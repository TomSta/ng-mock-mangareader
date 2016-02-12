describe("MangaCore", function () {

  var PopularMangas;
  var $httpBackend;

  beforeEach( module('mangaCore') );

  beforeEach( inject(function(_PopularMangas_, _$httpBackend_) {
    PopularMangas = _PopularMangas_;
    $httpBackend = _$httpBackend_;

  }));


  afterEach(function() {
   $httpBackend.verifyNoOutstandingExpectation();
   $httpBackend.verifyNoOutstandingRequest();
  });

  it("should create popular manga", function () {
 
      var expectedData = function(data) {
        return angular.fromJson(data).mangaId === 'ghost-in-the-shell';
      }

      $httpBackend.expectPOST(/./, expectedData)
        .respond(201);

      var popularManga = new PopularMangas({
        mangaId: "ghost-in-the-shell",
        description: "Great manga!"
      });

      popularManga.$save();

    expect($httpBackend.flush).not.toThrow();
  
  });

  it('should update popular manga', function () {
      $httpBackend.expectPUT('popular').respond(200);

      var popularManga = new PopularMangas({
        mangaId: "ghost-in-the-shell",
        description: "Great manga!"
      });

      popularManga.$update();
      
    expect($httpBackend.flush).not.toThrow();

  });

  it("should get popular manga by id", function() {

    $httpBackend.expectGET('popular/ghost-in-the-shell').respond(200);

    PopularMangas.get({ mangaId: 'ghost-in-the-shell' });

    expect($httpBackend.flush).not.toThrow();

  });

  it("should authenticate requests", function() {

    var expectedHeaders = function(headers) {
      //dump(angular.mock.dump(headers));
      return angular.fromJson(headers).authToken === 'something';

    }
    $httpBackend.expectGET('popular/ghost-in-the-shell', expectedHeaders)
      .respond(200);

    PopularMangas.get({ mangaId: 'ghost-in-the-shell' });

    expect($httpBackend.flush).not.toThrow();
  });

});
