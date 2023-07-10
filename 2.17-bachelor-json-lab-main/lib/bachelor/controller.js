const Bachelor = require("./model.js")
module.exports = {
  index(req, res) {
    Bachelor
      .find({})
      .then(bachelor => res.json(bachelor))
  },
  showYear(res, req) {
    Bachelor
      .find({name: req.params.name})
      .then(bachelor => res.json(bachelor))
  },
  showName(req, res) {
    Bachelor
      .find({name: req.params.name})
      .then(bachelor => res.render(bachelor))
  },
  create(req, res) {
    Bachelor
      .create(req.body)
      .then(bachelor => res.json(bachelor))
  },
  edit(req, res) {
    Bachelor
      .findOne({name: req.params.name}, req.body)
      .then(bachelor => res.json(bachelor))
  },
  delete(req, res) {
    Bachelor
      .delete({name: req.params.name})
      .then(bachelor => res.json(bachelor))
  }
}
