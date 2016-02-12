describe("Chapter reader", function () {
  
  var $scope, $location, mangaApi, $q, $rootScope;
  var chaptersData = {
  "href": "ghost-in-the-shell-arise/1",
  "pages": [
    {
      "pageId": 1,
      "url": "http://i9.mangareader.net/ghost-in-the-shell-arise/1/ghost-in-the-shell-arise-5585937.jpg"
    },
    {
      "pageId": 2,
      "url": "http://i3.mangareader.net/ghost-in-the-shell-arise/1/ghost-in-the-shell-arise-5585939.jpg"
    },
    {
      "pageId": 3,
      "url": "http://i1.mangareader.net/ghost-in-the-shell-arise/1/ghost-in-the-shell-arise-5585941.jpg"
    },
    {
      "pageId": 4,
      "url": "http://i3.mangareader.net/ghost-in-the-shell-arise/1/ghost-in-the-shell-arise-5585943.jpg"
    },
    {
      "pageId": 5,
      "url": "http://i3.mangareader.net/ghost-in-the-shell-arise/1/ghost-in-the-shell-arise-5585945.jpg"
    },
    {
      "pageId": 6,
      "url": "http://i9.mangareader.net/ghost-in-the-shell-arise/1/ghost-in-the-shell-arise-5585947.jpg"
    },
    {
      "pageId": 7,
      "url": "http://i9.mangareader.net/ghost-in-the-shell-arise/1/ghost-in-the-shell-arise-5585949.jpg"
    },
    {
      "pageId": 8,
      "url": "http://i9.mangareader.net/ghost-in-the-shell-arise/1/ghost-in-the-shell-arise-5585951.jpg"
    },
    {
      "pageId": 9,
      "url": "http://i9.mangareader.net/ghost-in-the-shell-arise/1/ghost-in-the-shell-arise-5585953.jpg"
    },
    {
      "pageId": 10,
      "url": "http://i3.mangareader.net/ghost-in-the-shell-arise/1/ghost-in-the-shell-arise-5585955.jpg"
    },
    {
      "pageId": 11,
      "url": "http://i5.mangareader.net/ghost-in-the-shell-arise/1/ghost-in-the-shell-arise-5585957.jpg"
    },
    {
      "pageId": 12,
      "url": "http://i1.mangareader.net/ghost-in-the-shell-arise/1/ghost-in-the-shell-arise-5585959.jpg"
    },
    {
      "pageId": 13,
      "url": "http://i4.mangareader.net/ghost-in-the-shell-arise/1/ghost-in-the-shell-arise-5585961.jpg"
    },
    {
      "pageId": 14,
      "url": "http://i10.mangareader.net/ghost-in-the-shell-arise/1/ghost-in-the-shell-arise-5585963.jpg"
    },
    {
      "pageId": 15,
      "url": "http://i6.mangareader.net/ghost-in-the-shell-arise/1/ghost-in-the-shell-arise-5585965.jpg"
    },
    {
      "pageId": 16,
      "url": "http://i2.mangareader.net/ghost-in-the-shell-arise/1/ghost-in-the-shell-arise-5585967.jpg"
    },
    {
      "pageId": 17,
      "url": "http://i2.mangareader.net/ghost-in-the-shell-arise/1/ghost-in-the-shell-arise-5585969.jpg"
    },
    {
      "pageId": 18,
      "url": "http://i6.mangareader.net/ghost-in-the-shell-arise/1/ghost-in-the-shell-arise-5585971.jpg"
    },
    {
      "pageId": 19,
      "url": "http://i8.mangareader.net/ghost-in-the-shell-arise/1/ghost-in-the-shell-arise-5585973.jpg"
    },
    {
      "pageId": 20,
      "url": "http://i10.mangareader.net/ghost-in-the-shell-arise/1/ghost-in-the-shell-arise-5585975.jpg"
    },
    {
      "pageId": 21,
      "url": "http://i6.mangareader.net/ghost-in-the-shell-arise/1/ghost-in-the-shell-arise-5585977.jpg"
    },
    {
      "pageId": 22,
      "url": "http://i8.mangareader.net/ghost-in-the-shell-arise/1/ghost-in-the-shell-arise-5585979.jpg"
    },
    {
      "pageId": 23,
      "url": "http://i4.mangareader.net/ghost-in-the-shell-arise/1/ghost-in-the-shell-arise-5585981.jpg"
    },
    {
      "pageId": 24,
      "url": "http://i8.mangareader.net/ghost-in-the-shell-arise/1/ghost-in-the-shell-arise-5585983.jpg"
    },
    {
      "pageId": 25,
      "url": "http://i8.mangareader.net/ghost-in-the-shell-arise/1/ghost-in-the-shell-arise-5585985.jpg"
    },
    {
      "pageId": 26,
      "url": "http://i2.mangareader.net/ghost-in-the-shell-arise/1/ghost-in-the-shell-arise-5585987.jpg"
    },
    {
      "pageId": 27,
      "url": "http://i2.mangareader.net/ghost-in-the-shell-arise/1/ghost-in-the-shell-arise-5585989.jpg"
    },
    {
      "pageId": 28,
      "url": "http://i2.mangareader.net/ghost-in-the-shell-arise/1/ghost-in-the-shell-arise-5585991.jpg"
    },
    {
      "pageId": 29,
      "url": "http://i6.mangareader.net/ghost-in-the-shell-arise/1/ghost-in-the-shell-arise-5585993.jpg"
    },
    {
      "pageId": 30,
      "url": "http://i8.mangareader.net/ghost-in-the-shell-arise/1/ghost-in-the-shell-arise-5585995.jpg"
    },
    {
      "pageId": 31,
      "url": "http://i6.mangareader.net/ghost-in-the-shell-arise/1/ghost-in-the-shell-arise-5585997.jpg"
    },
    {
      "pageId": 32,
      "url": "http://i4.mangareader.net/ghost-in-the-shell-arise/1/ghost-in-the-shell-arise-5585999.jpg"
    },
    {
      "pageId": 33,
      "url": "http://i10.mangareader.net/ghost-in-the-shell-arise/1/ghost-in-the-shell-arise-5586001.jpg"
    },
    {
      "pageId": 34,
      "url": "http://i8.mangareader.net/ghost-in-the-shell-arise/1/ghost-in-the-shell-arise-5586003.jpg"
    },
    {
      "pageId": 35,
      "url": "http://i8.mangareader.net/ghost-in-the-shell-arise/1/ghost-in-the-shell-arise-5586005.jpg"
    },
    {
      "pageId": 36,
      "url": "http://i4.mangareader.net/ghost-in-the-shell-arise/1/ghost-in-the-shell-arise-5586007.jpg"
    },
    {
      "pageId": 37,
      "url": "http://i8.mangareader.net/ghost-in-the-shell-arise/1/ghost-in-the-shell-arise-5586009.jpg"
    },
    {
      "pageId": 38,
      "url": "http://i6.mangareader.net/ghost-in-the-shell-arise/1/ghost-in-the-shell-arise-5586011.jpg"
    },
    {
      "pageId": 39,
      "url": "http://i6.mangareader.net/ghost-in-the-shell-arise/1/ghost-in-the-shell-arise-5586013.jpg"
    },
    {
      "pageId": 40,
      "url": "http://i10.mangareader.net/ghost-in-the-shell-arise/1/ghost-in-the-shell-arise-5586015.jpg"
    },
    {
      "pageId": 41,
      "url": "http://i6.mangareader.net/ghost-in-the-shell-arise/1/ghost-in-the-shell-arise-5586017.jpg"
    },
    {
      "pageId": 42,
      "url": "http://i8.mangareader.net/ghost-in-the-shell-arise/1/ghost-in-the-shell-arise-5586019.jpg"
    },
    {
      "pageId": 43,
      "url": "http://i9.mangareader.net/ghost-in-the-shell-arise/1/ghost-in-the-shell-arise-5586021.jpg"
    },
    {
      "pageId": 44,
      "url": "http://i5.mangareader.net/ghost-in-the-shell-arise/1/ghost-in-the-shell-arise-5586023.jpg"
    },
    {
      "pageId": 45,
      "url": "http://i1.mangareader.net/ghost-in-the-shell-arise/1/ghost-in-the-shell-arise-5586025.jpg"
    }
  ],
  "lastUpdate": "2016-02-09T16:46:49.358Z"
}; 
  beforeEach( module('mangaApp', 'mangascraper') );

  beforeEach( inject(function(_$q_, _$controller_, _$rootScope_, _$location_, _mangaApi_) {
    $location = _$location_;
    $controller = _$controller_;
    $scope = {};
    mangaApi = _mangaApi_;
    $q = _$q_;
    $rootScope = _$rootScope_;
    $location.search('manga', 'ghost-in-the-shell-arise');
    $location.search('chapter', '1');
  }) );

  it("should redirect to chapter url when readChapter function called", function () {
    $controller('ChapterController', {$scope: $scope, $location: $location, mangaApi: mangaApi});
      expect($location.url()).toBe('/chapter?manga=ghost-in-the-shell-arise&chapter=1');
  });

  it('should not do nothing if manga or chapter vars are empty', function() {
    spyOn(mangaApi, 'read').and.callFake(function() {
      var deferred = $q.defer();
      deferred.resolve(chaptersData);
      return deferred.promise;
    });
    
    $controller('ChapterController', {$scope: $scope, $location: $location, mangaApi: mangaApi});
    $rootScope.$apply();
    expect($scope.chaptersData.pages[0].pageId).toBe(1);
    expect($scope.chaptersData.pages[1].pageId).toBe(2);
    expect($scope.chaptersData.pages[2].pageId).toBe(3);

  });

  it('should catch errors', function(){
    spyOn(mangaApi, 'read').and.callFake(function() {
      var deferred = $q.defer();
      deferred.reject();
      return deferred.promise;
    });

    $controller('ChapterController', {$scope: $scope, $location: $location, mangaApi: mangaApi});
    $rootScope.$apply();
    expect($scope.status).toBe('Error!');
  });

});
