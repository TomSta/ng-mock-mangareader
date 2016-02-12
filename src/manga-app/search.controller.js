var app = angular.module('mangaApp');

app.controller('SearchController', SearchController);

function SearchController ($scope, $location, $timeout) {

  var timeout;
  
  function cancelTimeout(){
      $timeout.cancel(timeout);
  }

  $scope.keyup = function () {
    timeout = $timeout(function(){
      $scope.search();
    }, 1000, true);
  }

  $scope.keydown = function() {
    cancelTimeout();
  }

  $scope.search = function(){
    if($scope.query) {
      cancelTimeout();
      $location.path('/results').search('q', $scope.query);
    }
  }


}
