const Bachelor = require('./bachelor/model')
const Bachelorette = require('./bachelorette/model')
const bachelorData = require('./bachelor/bachelors.json')
const bacheloretteData = require('./bachelorette/bachelorettes.json')

Bachelor.deleteMany({})
Bachelor.insertMany(bachelorData)
  .then(bachelorData => {
    console.log(bachelorData)
  })
  .catch(err => {
    console.log(err)
  })

Bachelorette.deleteMany({})
Bachelorette.insertMany(bacheloretteData)
  .then(bacheloretteData => {
    console.log(bacheloretteData)
  })
  .catch(err => {
    console.log(err)
  })
