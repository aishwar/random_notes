var Notes = require('../models/notes.js');

exports.search = function (req, res) {
  Notes.search(req.query.q, function (err, results) {
    if (err) return res.send(500, { error: 'The database says "No Search for You!"' });
    res.json(results);
  });
}

exports.saveNew = function (req, res) {
  Notes.saveNew(req.body.text, function (err, results) {
    if (err) return res.send(500, { error: 'The database rejects you!' });
    res.send(200);
  });
}
