describe("ResultsController", function () {

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

  var $controller;
  var $scope;
  var $q;
  var $rootScope;
  var mangaApi;
  var $location;

  beforeEach(module('mangascraper'));
  beforeEach(module('mangaApp'));

  beforeEach( inject(function(_$controller_, _$q_, _$rootScope_, _mangaApi_, _$location_) {
    $controller = _$controller_;
    $scope = {};
    $location = _$location_;
    $q = _$q_;
    $rootScope = _$rootScope_;
    mangaApi = _mangaApi_;

  }) );
  
  it('should load search results', function() {
    spyOn(mangaApi, 'search').and.callFake(function() {
        var deferred = $q.defer();
        deferred.resolve(mangaData);
        return deferred.promise;
    });
    $location.search('q', 'ghost in the shell');
    $controller('ResultsController', {$scope: $scope });
    $rootScope.$apply();
    expect($scope.results[0].mangaId).toBe(mangaData[0].mangaId);
    expect(mangaApi.search).toHaveBeenCalledWith("ghost in the shell");
  });

  it('should catch an error', function() {
    spyOn(mangaApi, 'search').and.callFake(function() {
        var deferred = $q.defer();
        deferred.reject('Something went wrong!');
        return deferred.promise;
    });
    $location.search('q', 'ghost in the shell');
    $controller('ResultsController', {$scope: $scope });
    $rootScope.$apply();
    expect($scope.errorMessage).toBe('Something went wrong!');


  });
});
