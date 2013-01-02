var notes = [];

exports.search = function (q) {
  var matches = [];
  q = (q || "").toLowerCase();
  
  notes.forEach(function (note) {
    if (note.text.toLowerCase().indexOf(q) > -1) {
      matches.push(note);
    }
  });
  
  return matches;
}

exports.saveNew = function (text) {
  if (typeof text == 'string') {
    notes.push({ text: text });
  }
}
