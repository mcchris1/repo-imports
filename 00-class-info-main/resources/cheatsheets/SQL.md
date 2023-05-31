Connect to the Postgres terminal

```
$ psql
```

`\list` List databases

`CREATE DATABASE database_name;` Create a database

`\c database_name` Connect to a database

`\dt` List tables in database

Create a table:

```sql
CREATE TABLE table_name (
  id BIGSERIAL PRIMARY KEY,
  column_2 INTEGER,
  column_3 VARCHAR(255),
  column_4 BOOLEAN,
  column_5 INTEGER REFERENCES other_table(id)
);
```

`\d table_name` View table column info

Select rows

```sql
SELECT name, population 
FROM city 
WHERE country = 'Spain' 
AND region = 'Catalan' 
ORDER BY population ASC 
LIMIT 10 
OFFSET 0;
```

Insert a row

```sql
INSERT INTO users
  (first_name, last_name)
VALUES
  ('Leonardo', 'Dicaprio');
```

Update a row

```sql
UPDATE users SET first_name = 'vincenzo' WHERE id = 2;
```

Delete a row

```sql
DELETE FROM users WHERE id = 1;
```

Like

```sql
SELECT * FROM users WHERE email LIKE '%gmail.com';
```

Group by

```sql
SELECT AVG(population) FROM country GROUP BY continent;
```
