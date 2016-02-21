angular.module('mangaApp', ['ngRoute', 'mangascraper', 'ui.bootstrap', 'mangaCore', 'ngAnimate'])
.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'manga-app/home.html',
      controller: 'HomeController'
      })
    .when('/results', {
      templateUrl: 'manga-app/results.html',
      controller: 'ResultsController'
      })
    .when('/chapter', {
      templateUrl: 'manga-app/chapter.html',
      controller: 'ChapterController'
      })
    .otherwise({
      redirectTo: '/'
      });

});
