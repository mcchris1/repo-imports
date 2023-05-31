# Simple Git/GitHub Workflow for Pair Programming

## Intro: [Pair Programming](https://en.wikipedia.org/wiki/Pair_programming)

## Workflow

1. Working with your partner, decide who the first driver will be.
2. The navigator's laptop should be closed
3. Driver should create a fork the starter repo (or if there is no prompt, create a new repo)
    1. Once the driver has a repo (forked or created) the driver should add the navigator as a collaborator (under settings)
    2. Finally, the driver should clone the repo
4. Spend 5-10 minutes reviewing the prompt before beginning to work -- make sure the driver and navigator agree on a high level plan of attack
5. For the next 25 minutes, the pair begins working on implementing the agreed upon plan, committing and pushing code regularly
6. *Switch*: After 25 minutes the driver should commit their most recent changes.
    1. If at that point in time, the current feature is not complete, preface the commit with WIP for **W**ork **I**n **P**rogress (at a later point we will discuss tidying commit histories and this will be a helpful indicator).
    2. Once all changes are pushed, the driver should slack the navigator a link to the repo and the driver's laptop should be closed
    3. The navigator should open his/her computer, follow the link to the repo, and clone that repo
    4. The navigator is now the driver and the driver, now the navigator
    5. Spend 5 minutes discussing how the last 25 minutes went and deciding best next steps
7. Repeat the process with the new driver, committing and pushing regularly
8. *Switch Again*: After another 25 minutes, make sure all code is pushed
    1. The navigator should close her/his computer
    2. The driver should open her/his computer and *pull* all of the changes that the partener pushed
    3. Plan for 5 minutes and code for another 25 minute strech

### Exercises

- [Dots Game](https://git.generalassemb.ly/wdi-nyc-terabyte/event-listener-demo)
- [Pixart](https://git.generalassemb.ly/wdi-nyc-terabyte/pixart_js)
