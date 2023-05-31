# The Rails Checklist
## Common Gotchas: So You Don't Get Derailed

#### 1. Did you bundle?
Make sure your gems are all up to date, run:

```bash
bundle
# same as
bundle install
# or to update your dependencies to their latest version
bundle update
```

#### 2. Did you create your database?

``` bash
rails db:create
```

#### 3. Did you run your migrations?
Make sure you've run all your migrations (`db/migrate`) so that `schema.rb` is up to date.

``` bash
rails db:migrate
```

#### 4. Did you seed your database?
You may be dead in the water until you populate your database. If you have a `seed.rb` file, make sure to run it:

``` bash
rails db:seed
```

#### 5. Is the server running?
Make sure your server is running in the background:
```bash
rails s
#or
rails server
```

#### 6. Does that route exist?
If you're hitting and endpoint and getting an error, do a quick sanity check and verify that route exists:
```bash
rails routes
```

#### 7. Does that Active Record query actually work?
If you're having issues querying your database, do a sanity check in your rails console to see if your query actually returns anything:
```bash
rails console
# or
rails c
> Student.first #=> <#Student134oiu3 @name="bob" @id=1>
```
