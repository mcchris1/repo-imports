Create a [Heroku](https://www.heroku.com/) account.

Install the Heroku command line program:

```bash
brew install heroku
```

Authenticate with the heroku command line:

```bash
heroku login
```

Create a new Heroku app:

```bash
heroku apps:create my-super-cool-app-name

```

Add a database to your Heroku application:

```bash
heroku addons:create heroku-postgresql:hobby-dev --app your_app_name_here
```

Execute the schema and seed files in the context of the Heroku database:

```bash
heroku pg:psql --app your_app_name_here < database/schema.sql;
heroku pg:psql --app your_app_name_here < database/seed.sql
```

_Before doing this, comment out the `CREATE DATABASE` and `\c some_database_name` statements._

Push your changes to Heroku:

```bash
git push heroku master
```

Look at application logs in Heroku:

```bash
heroku logs --tail
```
