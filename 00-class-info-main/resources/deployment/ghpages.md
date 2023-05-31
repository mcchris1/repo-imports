Github Pages Deployment
====

1. Create a new branch: `git checkout -b gh-pages`
2. Push the master to new branch: `git push -u origin gh-pages`
3. On GitHub, select the `gh-pages` branch and go to `Settings` to view the link to deployed site

Merging gh-pages with master
----------------
1. Go back to master branch: `git checkout master`
2. Merge changes: `git merge gh-pages`
3. Push merged changes to master: `git push origin master`

Merging master to gh-pages
-------
```
git push origin master:gh-pages
```
