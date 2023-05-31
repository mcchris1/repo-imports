**DO:**
- make small changes in PRs (50 lines of code max)
- your top priority is reviewing and merging code
- write meaningful commit messages
- handle merge conflicts with your teammates

## Create a branch

```bash
git checkout -b feature-branch-name-here
```

Make changes to your code, and **create commits only on your branch**.

```
git add .
git commit -m "Introduce a new feature"
```

## Make a pull request

When your feature is complete, check out the master branch:

```bash
git checkout master
```

Pull down any commits that have been added to master while you've been working on your feature branch:

```bash
git pull origin master
```

Merge these changes into your feature branch:

```bash
git checkout feature-branch-name-here
git merge master
```

Push your feature branch onto Github:

```
git push origin feature-branch-name-here
```

And then go to the Github repository website, create a pull request, and have another team member review and merge your PR.

## Clean-up after the PR has been merged

After the pull request has been merged, pull down the new commits in the master branch

```bash
git checkout master
git pull origin master
```

And delete your now unneeded feature branch:

```
git branch -d feature-branch-name-here
```
