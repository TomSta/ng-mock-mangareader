describe("Search Controller", function () {

   var $scope, $location, $timeout;

  beforeEach( module('mangaApp') );

  beforeEach( inject(function(_$controller_, _$location_, _$timeout_) {
    $scope = {};
    $controller = _$controller_;
    $location = _$location_;
    $timeout = _$timeout_;
    
    _$controller_('SearchController', { $scope: $scope, $location: $location });
  }) );


  it("should redirect to query results page for non empty queries", function () {
   $scope.query = "ghost in the shell";
   $scope.search();
   expect($location.url()).toBe('/results?q=ghost%20in%20the%20shell');
  });

  it("should redirect user after 1 second of inactivity", function () {
    
    $scope.query = 'ghost in the shell';
    $scope.keyup();
    $timeout.flush(); 
    expect($timeout.verifyNoPendingTasks).not.toThrow(); 
  
  });

  it("should stop search if user press another key", function () {
    $scope.query = 'ghost in the shell';
    $scope.keyup();
    $scope.keydown();
    expect($timeout.verifyNoPendingTasks).not.toThrow();
  });

  it("should stop timeout when user search for a query", function () {
    $scope.query = 'ghost in the shell';
    $scope.keyup();
    $scope.search();
    expect($timeout.verifyNoPendingTasks).not.toThrow();
  });
});
