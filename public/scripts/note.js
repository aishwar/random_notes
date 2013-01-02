angular.module('note', []).
  config(function ($routeProvider) {
    $routeProvider.
      when('/',    { controller:SearchCtrl , templateUrl:'search.html' }).
      when('/new', { controller:NoteCtrl   , templateUrl:'new.html'    }).
      otherwise({ redirectTo:'/' });
  });

var notes = [];

function NoteCtrl($scope) {
  $scope.text = "";
  
  // Saves the new note to the notes list
  $scope.save = function () {
    notes.push({ text: $scope.text });
    $scope.text = "";
  }
}

function SearchCtrl($scope) {
  $scope.q = "";
  $scope.results = [];
  
  // Populates the results list with the results for the search query
  $scope.search = function () {
    var matches = [];
    
    notes.forEach(function (note) {
      if (note.text.toLowerCase().indexOf($scope.q.toLowerCase()) > -1) {
        matches.push(note);
      }
    });
    
    $scope.results = matches;
    return matches;
  }
  
  // Initialization
  $scope.search();
}
