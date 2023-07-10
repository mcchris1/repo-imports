const Bachelorette = require("./model.js")
module.exports = {
  index: (req, res) => {
    Bachelorette.find({})
      .then(bachelorette => {
        res.json(bachelorettes)
      })
  },
  showYear: (req, res) => {
    Bachelorette.find({year: req.body.year})
      .then(bachelorette => {
        res.json(bachelorette)
      })
  },
  showName: (req, res) => {
    Bachelorette.find({name: req.params.name})
      .then(bachelorette => {
        res.json(bachelorette)
      })
  },
  create: (req, res) => {
    Bachelorette.create(req.body)
      .then(bachelorette => {
        res.json(bachelorette)
      })
  },
  edit: (res, req) => {
    Bachelorette.findOneAndUpdate({name: req.params.name}, req.body)
      .then(bachelorette => {
        res.json(bachelorette)
      })
  },
  delete: (req, res) => {
    Bachelorette.findOneAndDelete({name: req.params.name})
      .then(bachelorette => {
        req.json(bachelorette)
      })
  }
}