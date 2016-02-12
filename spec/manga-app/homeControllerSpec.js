describe("Home Controller", function () {

  var results = [{
      'name': 'Black Lagoon',
      'mreaderID': 'black-lagoon'
    },
    {
      'name': 'Ghost In The Shell Arise',
      'mreaderID': 'ghost-in-the-shell-arise'
    },
    {
      'name': 'Trigun Badlands Rumble',
      'mreaderID': 'trigun-badlands-rumble'
    }];

  var $scope, $interval, mangaApi;

  beforeEach( module('mangaApp') );

  beforeEach( inject(function(_$location_, _$interval_, _mangaApi_) {
    $scope = {};
    $interval = _$interval_;
    mangaApi = _mangaApi_;
  }) );

  beforeEach( inject(function(_$q_, _PopularMangas_) {
    spyOn(_PopularMangas_, 'get').and.callFake(function() {
      var deferred = _$q_.defer();
      deferred.resolve(['black-lagoon', 'ghost-in-the-shell-arise', 'trigun-badlands-rumble']);
      return deferred.promise;
    });
  }) );
  
  beforeEach( inject(function(_$q_, _$controller_) {
    spyOn(mangaApi, 'find').and.callFake(function() {
      var deferred = _$q_.defer();
      var args = mangaApi.find.calls.mostRecent().args[0];
      if (args == 'black-lagoon') {
          deferred.resolve(results[0]);
      } else if (args == 'ghost-in-the-shell-arise') {
          deferred.resolve(results[1]);
      } else if (args == 'trigun-badlands-rumble') {
          deferred.resolve(results[2]);
      }
      else {
          deferred.reject();
      }
      return deferred.promise;
    });
  }) );

  beforeEach( inject(function(_$controller_, _PopularMangas_, _$rootScope_) {
    _$controller_('HomeController', {
        $scope: $scope,
        $interval: $interval,
        mangaApi: mangaApi,
        PopularMangas: _PopularMangas_
    });

    _$rootScope_.$apply();
  }));
      

  it("should rotate anime every 5 seconds", function () {
  
    expect($scope.result.name).toBe(results[0].name);
    $interval.flush(5000);
    //console.log($scope.result);
    expect($scope.result.name).toBe(results[1].name);
    $interval.flush(5000);
    //console.log($scope.result);
    expect($scope.result.name).toBe(results[2].name);
    //console.log(angular.mock.dump($scope.result));
    $interval.flush(5000);
    //console.log($scope.result);
    expect($scope.result.name).toBe(results[0].name);
  
  });
      
});
