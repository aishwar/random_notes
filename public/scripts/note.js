angular.module('note', []).
  config(function ($routeProvider) {
    $routeProvider.
      when('/',    { controller:SearchCtrl , templateUrl:'search.html' }).
      when('/new', { controller:NoteCtrl   , templateUrl:'new.html'    }).
      otherwise({ redirectTo:'/' });
  });

function NoteCtrl($scope, $http) {
  $scope.text = "";
  
  $scope.save = function () {
    // Notifies the server of the new note
    $http.post('/api/v1/notes/new', { text: $scope.text }).success(function () {
      // Clear out the old text
      $scope.text = "";
    });
  }
}

function SearchCtrl($scope, $http) {
  $scope.q = "";
  $scope.results = [];
  
  // Populates the results list with the results for the search query
  $scope.search = function () {
    $http.get('/api/v1/notes/search', { params:{ q:$scope.q } }).success(function (data) {
      $scope.results = data;
    });
  }
  
  // Initialization
  $scope.search();
}
