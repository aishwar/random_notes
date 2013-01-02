var Notes = require('../models/notes.js');

exports.search = function (req, res) {
  res.json(Notes.search(req.query.q));
}

exports.saveNew = function (req, res) {
  Notes.saveNew(req.body.text);
  res.json("ok");
}
