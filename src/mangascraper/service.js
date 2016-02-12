angular.module('mangascraper', [])
  .factory('mangaApi', mangaApi);

function mangaApi($http, $q){
  var service = {};
  var baseUrl = "https://doodle-manga-scraper.p.mashape.com/mangareader.net/";
var mangaData = [
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
];

var mangaChapters = {"name":"Ghost in the Shell ARISE","href":"ghost-in-the-shell-arise","author":["fujisaku-junichi"],"artist":["ooyama-takumi"],"status":"completed","yearOfRelease":2013,"genres":["action","drama","mature","psychological","sci-fi","shounen"],"info":"This manga follows the story of how Batou and Kusanagi met during the civil war. It is also a parallel story to the Arise OVA series with Batou as the lead.","cover":"http://s3.mangareader.net/cover/ghost-in-the-shell-arise/ghost-in-the-shell-arise-l0.jpg","lastUpdate":"2016-02-09T16:47:35.186Z","chapters":[{"chapterId":1},{"chapterId":2},{"chapterId":3},{"chapterId":4},{"chapterId":5},{"chapterId":6}]}



  function httpPromise(url){
    var deferred = $q.defer();
    var config = { headers: {
        'Accept': 'text/plain',
        'X-Mashape-Key': '7K6U8zxB6hmsh3gvUqzdxosJsvxgp1jvIDKjsnEvuBHbPzwKrg',
      }};

    $http.get(url, config).success(function(data) {
        deferred.resolve(data);
     })
     .error(function() {
        deferred.reject('error');
     });
    return deferred.promise;
  }

  service.search = function(query) {
    return httpPromise(baseUrl + 'search?cover=1&info=0&l=0&q='+ encodeURIComponent(query));
  }

  service.find = function(query) {
    return httpPromise(baseUrl + 'manga/'+ encodeURIComponent(query)+'/');
  }
  
  service.read = function(mangaId, chapter) {
    return httpPromise(baseUrl + 'manga/'+ mangaId+'/'+chapter);
  }

  return service;

}
