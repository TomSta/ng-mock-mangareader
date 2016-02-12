describe("mangascraper service", function () {

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


  var mangaApi, $httpBackend;

  beforeEach(module('mangascraper'));

  beforeEach(inject(function(_mangaApi_, _$httpBackend_){
    mangaApi = _mangaApi_;
    $httpBackend = _$httpBackend_;
  }));


  it('should return searched manga data', function() {
    var response;

    var expectedUrl = function(url){
        return url.indexOf('https://doodle-manga-scraper.p.mashape.com/mangareader.net/search') !== -1;
    }

    $httpBackend.when('GET', expectedUrl).respond(200, mangaData);
 

    mangaApi.search('ghost in the shell')
      .then(function(data) {
        response = data;
    });

    $httpBackend.flush();


    expect(response).toEqual(mangaData);
  });

  it('should return manga data by id', function() {
    var response;

    var expectedUrl = function(url){
        return url.indexOf('https://doodle-manga-scraper.p.mashape.com/mangareader.net/manga/') !== -1;
    }

    $httpBackend.when('GET', expectedUrl).respond(200, mangaChapters);
 

    mangaApi.find('ghost in the shell')
      .then(function(data) {
        response = data;
        });

    $httpBackend.flush();


    expect(response).toEqual(mangaChapters);
  });

  it('should handle error', function() {
    var response;

    var expectedUrl = function(url){
        return url.indexOf('https://doodle-manga-scraper.p.mashape.com/mangareader.net/manga/') !== -1;
    }

    $httpBackend.when('GET', expectedUrl).respond(500);
 

    mangaApi.find('ghost in the shell')
      .then(function(data) {
        response = data;
        })
      .catch(function() {
        response = "error";
      });

    $httpBackend.flush();


    expect(response).toEqual("error");
  });
});
