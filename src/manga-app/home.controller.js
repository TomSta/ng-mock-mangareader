var app = angular.module('mangaApp');

app.controller('HomeController', HomeController);

function HomeController ($scope, $interval, mangaApi, PopularMangas) {

  var results = [];
  var idx = 0;
  var findManga = function(id) {
    mangaApi.find(id)
      .then(function(data) {
        $scope.result = data;
      });
  };

//  PopularMangas.get()
//    .then(function(data) {
      data = ['black-lagoon', 'ghost-in-the-shell-arise', 'trigun-badlands-rumble'];
      results = data;
      findManga(results[0]);
      $interval(function(){
        ++idx;
        findManga(results[idx % results.length]);
      }, 5000);

//    });



}
