# Token Authentication

Django and Django REST Framework come with a number of authentication systems in-built. Unfortunately for us their token are not JSON Web Token (JWT), so we have two options, create our own JWT authentication middleware, or change the way we manage tokens in our client side React app. As the token authentication works well on your React apps, let's go for the custom django middleware options

Before we begin, create a new folder called **Django-REST-Token-Auth** and create a python virtual environment inside it:

```
mkdir Django-REST-Token-Auth
cd Django-REST-Token-Auth
pipenv shell
pip install django 
```

```
django-admin startproject django_rest_token_auth
cd django_rest_token_auth
django-admin startapp api
```


We need to install the Django Rest Framework, along with a few other libraries:

```
pip install djangorestframework psycopg2-binary 
```

Let's also create a database for this called "catcollector."

```
psql
CREATE DATABASE catcollector;
```

Once our application is created, we need to update our SETTINGS.py with our postgresql database and our rest framework configurations:

In settings.py:

```py
INSTALLED_APPS = [
    'api',
    'rest_framework',
    ...,
    ...,
    ...
]
... .. ...
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'catcollector',
    }
}
... .. ...
REST_FRAMEWORK = {
    'DEFAULT_RENDERER_CLASSES': [
        'rest_framework.renderers.JSONRenderer',
        'rest_framework.renderers.BrowsableAPIRenderer',
    ],
}
```

We're going to eventually set up URLs for our api application, which means
we'll need to bring in `api/urls.py`. We can do that by editing our project's
main app's `urls.py` to look like this:

```py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    # path('api/', include('api.urls')),
]
```

> Because `api/urls.py` is currently blank, it'll throw us an error when we
run our server. That's why it's currently commented out.


## Basic REST API Cats List

We will create a brief endpoint to our REST API to retrieve a list of cats using serializers and both Class Based Views and Function Based Views

We need to update our models.py with a basic layout for our cats:

```py
from django.db import models

# Create your models here.
class Cat(models.Model):
    name = models.CharField(max_length=100)
    breed = models.CharField(max_length=100)
    description = models.TextField(max_length=250)
    age = models.IntegerField()

    def __str__(self):
        return self.name
```

**Don't forget to run migrations after modifying the models.py file**

Create a serializers.py file inside your api app and write the following code:

```py
from rest_framework import serializers
from .models import Cat

class CatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cat
        fields = '__all__'
```

Next, we need to add a path to retrieve our cats in the urls.py file inside of our api app:


```py
from django.urls import path
from . import views

urlpatterns = [
    path('cats-list/', views.cats_list, name='cats_list'),
    # path('cats-list/', views.CatsView.as_view(), name='cats_list'),
]
```
Both paths were added to demonstrate how to use either Class Based Views or Function Based.

Once that is done, we can go ahead and write the view to fetch our cats in our views.py:

```py
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import CatSerializer
from .models import Cat
from rest_framework.views import APIView

# Create your views here.

@api_view(('GET',))
def cats_list(request):
    cats = Cat.objects.all()
    serializer = CatSerializer(cats, many=True)
    return Response(serializer.data)


# class CatsView(APIView):
#     def get(self, request):
#         cats = Cat.objects.all()
#         serializer = CatSerializer(cats, many=True)
#         return Response(serializer.data)
```

> You can uncomment the `path('api/', include('api.urls')),` line in the main
app's `urls.py` file now



## JWT middleware

First off, we'll need to install a JWT library, so using _pipenv_ install _pyjwt_:

```
pip install pyjwt
```


Now create a file called `authentication.py` in the `api` folder and add the following code:

```py
from rest_framework.authentication import BasicAuthentication
from rest_framework.exceptions import PermissionDenied
from django.contrib.auth import get_user_model
from django.conf import settings # for the secret key
import jwt
User = get_user_model()

class JWTAuthentication(BasicAuthentication):
    def authenticate(self, request):
        header = request.headers.get('Authorization')
        if not header:
            return None
        if not header.startswith('Bearer'):
            raise PermissionDenied({'message': 'Invalid authorization header'})
        token = header.replace('Bearer ', '')
        try:
            payload = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])
            user = User.objects.get(pk=payload.get('sub'))
        except jwt.exceptions.InvalidTokenError:
            raise PermissionDenied({'message': 'Invalid Token'})
        except User.DoesNotExist:
            raise PermissionDenied({'message': 'User not found'})
        return (user, token)
```

So what does this all do?

We check for a `Authorization` header. If there isn't one, we return `None`, which means the user continues as an unauthorised user, they will not be able to perform any authorised actions.

If there is a header, but it does not start with `Bearer` we throw a `PermissionDenied` error, which will in turn return a 403 response with the message _Invalid Authorization header_.

If the header is good, we extract the token from it by removing the `Bearer ` portion of the string, then we decode the token, which gives us back the payload, including the `sub` or user's ID. We use this to get the user from the database

If the token is invalid or the user does not exist, again we return a 403 response with a useful message.

All being well we return a tuple containing what Django Rest Framework should store as `request.user`, and `request.auth`. We pass the `user` as the first element, and `token` as the second. If we want access to the current user we can get it with `request.user`, and if we want access to the token, it's `request.auth`.


## Adding out custom authenticate method to the project

With that created we hook it into the project in the project folder's `settings.py` file. Add the following to the file:

```py
REST_FRAMEWORK = {
    'DEFAULT_RENDERER_CLASSES': [
        'rest_framework.renderers.JSONRenderer',
        'rest_framework.renderers.BrowsableAPIRenderer',
    ],
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'api.authentication.JWTAuthentication',
    ],
}
```

> **Note**: the `api` in `api.authentication...` refers to the name of the
app. Replace it with whatever the name of the app you're creating is. 

We've added our `JWTAuthentication` class to the project's default
authentication classes, which means it will use our custom middleware. We've
also added the `JSONRenderer` class to the default render classes. This will
allow Django Rest Framework to convert dictionaries to JSON, useful for sending custom messages in our views.

## Custom user serializer

Django comes with its own user model baked in. This is the same user model that you use when you log in to the admin site.

We need to create our own serializer that will check the `password` and `password_confirmation` fields match. It will also need to hash the password.

Let's edit our `serializers.py` file, adding the following:

```py
from rest_framework import serializers
from django.contrib.auth import get_user_model
import django.contrib.auth.password_validation as validations
from django.contrib.auth.hashers import make_password
from django.core.exceptions import ValidationError
User = get_user_model()

class UserSerializer(serializers.ModelSerializer):

    password = serializers.CharField(write_only=True)
    password_confirmation = serializers.CharField(write_only=True)

    def validate(self, data):

        password = data.pop('password')
        password_confirmation = data.pop('password_confirmation')

        if password != password_confirmation:
            raise serializers.ValidationError({'password_confirmation': 'Passwords do not match'})

        try:
            validations.validate_password(password=password)
        except ValidationError as err:
            raise serializers.ValidationError({'password': err.messages})

        data['password'] = make_password(password)
        return data

    class Meta:
        model = User
        fields = ('username', 'email', 'password', 'password_confirmation',)
```

This should look fairly straightforward. We take the `password` and `password_confirmation` fields and check that they match. If not we send a validation error to the user.

We then use Django's built in `validate_password` method that checks the strength of the password. This is the same method used when creating a super user in the terminal. It ensures that passwords aren't too weak.

> **Note**: We could skip this step, which might be desirable to make manual testing easier. However it's a neat feature that requires little effort on our part.

Finally we hash the password using Django's in-built `make_password` function, and we store it back on the data object. This will become the `serializer.data` property and will ultimately get stored in the database.

## Register and login views

We need some custom views for handling register and login. In the app's `views.py` file add the following:

```py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import PermissionDenied
from django.contrib.auth import get_user_model
from django.conf import settings
import jwt
from .serializers import UserSerializer
User = get_user_model()

class RegisterView(APIView):

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Registration successful'})

        return Response(serializer.errors, status=422)


class LoginView(APIView):

    def get_user(self, email):
        try:
            return User.objects.get(email=email)
        except User.DoesNotExist:
            raise PermissionDenied({'message': 'Invalid credentials'})

    def post(self, request):

        email = request.data.get('email')
        password = request.data.get('password')

        user = self.get_user(email)
        if not user.check_password(password):
            raise PermissionDenied({'message': 'Invalid credentials'})

        token = jwt.encode({'sub': user.id}, settings.SECRET_KEY, algorithm='HS256')
        return Response({'token': token, 'message': f'Welcome back {user.username}!'})
```

Again, this should be fairly self explanatory. The register view simply creates a new user and sends back a success message if all is well, and any errors if not. These errors might include the custom errors we just added to the `UserSerializer`.

The login view finds the user by email and verifies their password with Django's `check_password` function that's automatically added to the user object. If there's an error, we send back an error message, otherwise we create a token and send it back to the client in the response.
    
We are also going to need to add URLs for the register and login views in
our `api/urls.py`:

```
from django.urls import path
from . import views

urlpatterns = [
    # path('cats-list/', views.cats_list, name='cats_list'),
    path('cats-list/', views.CatsView.as_view(), name='cats_list'),
    path('register/', views.RegisterView.as_view(), name='register'),
    path('login/', views.LoginView.as_view(), name='login'),
]


```
## Creating a React Frontend and making HTTP Requests to our Django API
    
So far we've implemented Token Authentication with our Django API Backend, and now its time to create a React Frontend to be our API's main client. First we need to set up our application, and then render basic login and singup forms to test our Django API.
    
In the same folder as your Django Project (Django-REST-Token-Auth), create a react app with the following command:

```
npx create-react-app react-auth-client 
```
    
Once your application is created, we can go ahead and modify the top-level of our App.js component and test out our API by making a call to it:

```js
  const [state, setState] = useState({})

  useEffect(() => {
    console.log('useEffect Ran!')
    fetch('http://localhost:8000/api/cats-list/')
    .then(res => res.json())
    .then(res => {
      setState(res)
      return res
    }).then(res => console.log(res))
  }, []) 
```
    
**Don't forget to import useState and useEffect at the top**
    
## Django CORS
    
Uh Oh! We're getting a huge CORS error. CORS stands for Cross Origin Resource Sharing. To fix this error, we are going to download and use a library called (django-cors-headers)[https://pypi.org/project/django-cors-headers/]:
    
```
pip install django-cors-headers
```
    
We then need to configure django-cors-headers in our SETTINGS.py:
    
```py
INSTALLED_APPS = [
    "api",
    "rest_framework",
    "corsheaders",
    ... ... ...
]
... ... ...
    
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware', # <-------Add this line here (above Common Middleware)
    'django.middleware.common.CommonMiddleware',
    ...
    ...
    ...
]
... ... ...  
                                                           
CORS_ALLOWED_ORIGINS = ["http://localhost:3001",] # Use whichever port your React Frontend is running on
# This option will also need to be configured to include your Applications URL when deployed online                                                           
```

## Back to React
                                                           
Try out the fetch one more time, and you should be able to successfully retrieve the list of cats data from our Django REST API! Nice!
                                                           
As a mini-activity, create a Sign up Form component with the following fields and track them in your state: 
(**Important!**)
                                                           
username <br>
email <br>
password <br>
password_confirmation <br>
                                                           
You need to have these exact fields in the signup (or login) form data that's sent in the request body. These are the default fields that come with Django's built in User Model. If you prefer to have different fields, make sure you override the default User Model in your Django backend and match those fields accordingly
    
Make sure you attach a call to the correct signup url to the django backend upon form submittal. Try to register a new user using your React Frontend.
Once your component is created, import and display it in App.js
                                                           
                                                           
## Further reading

- [PyJWT Docs](https://pyjwt.readthedocs.io/en/latest/)
- [Authentication - Django REST Framework Docs](https://www.django-rest-framework.org/api-guide/authentication/)
