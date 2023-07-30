[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Scribble

![](https://dl.dropboxusercontent.com/s/8frf8rblw6pnpds/hipsterlogogenerator_1438007087793.png?dl=0)

Scribble is a Django application where users can read, write and interact with the best content all around the world.

## Instructions

1. Fork and clone this repository.
1. Change into the new directory.
1. Fulfill the listed requirements.

Build your Django application in the root of this repository. 
**When asked if you want to overwrite the readme, enter "n" (for no).**

## Requirements

Your Django app should use a PostgreSQL database and have two models: `Post` and `Comment`.

A `Post` should have the following fields:

* `author`
* `title`
* `body`

A `Comment` should have the following fields:

* `author`
* `body`
* `post` (a foreign key to `Post`)

Be sure to create & run migrations for `Post` and `Comment`.
Test your models by creating records in the database through the admin panel and the Django shell.

## Plagiarism

Take a moment to refamiliarize yourself with the [Plagiarism policy](https://git.generalassemb.ly/DC-WDI/Administrative/blob/master/plagiarism.md). Plagiarized work will not be accepted.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
