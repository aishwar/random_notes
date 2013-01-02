var mongoose = require("mongoose");
mongoose.connect("localhost", "random_notes");

var schema = mongoose.Schema({ text:'string' });
var Note = mongoose.model('Note', schema);

exports.search = function (q, callback) {
  q = new RegExp(q, "i");
  Note.find({ text:q }, function (err, res) {
    // Error
    if (err) return callback(err, null);
    // Success
    callback(null, res);
  });
}

exports.saveNew = function (text, callback) {
  var note = new Note({ text:text });
  note.save(function (err) {
    // Error
    if (err) return callback(err, null);
    // Success
    callback(null, null);
  });
}
