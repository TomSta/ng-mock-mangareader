var app = angular.module('mangaApp');

app.controller('ResultsController', ResultsController);

function ResultsController ($scope, $location, mangaApi) {
  var mangaData = 
    {
      "mangaId": "ghost-in-the-shell-arise",
      "name": "Ghost in the Shell ARISE",
      "genres": [
        "action",
        "drama",
        "mature",
        "psychological",
        "sci-fi",
        "shounen"
      ],
      "cover": "http://s3.mangareader.net/cover/ghost-in-the-shell-arise/ghost-in-the-shell-arise-l0.jpg"
    }
  ;
  
  $scope.results = [];
  $scope.results.push({ data: mangaData });
  
  var query= $location.search().q;
  mangaApi.search(query)
    .then(function(data) {
      $scope.results = data;
      })
    .catch(function(e) {
      $scope.errorMessage = e;
    });
 
  $scope.resultExpanded = false;

  $scope.expand = function expand(index, id) {
        mangaApi.find(id)
          .then(function(data) {
            $scope.results[index].data = data;
          }).then(function(){
            $scope.results[index].loaded = true;
          });
        
        
  };

}
