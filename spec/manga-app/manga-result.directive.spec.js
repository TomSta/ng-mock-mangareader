describe("Manga result directive", function () {

var mangaData = {"name":"Ghost in the Shell ARISE","href":"ghost-in-the-shell-arise","author":["fujisaku-junichi"],"artist":["ooyama-takumi"],"status":"completed","yearOfRelease":2013,"genres":["action","drama","mature","psychological","sci-fi","shounen"],"info":"This manga follows the story of how Batou and Kusanagi met during the civil war. It is also a parallel story to the Arise OVA series with Batou as the lead.","cover":"http://s3.mangareader.net/cover/ghost-in-the-shell-arise/ghost-in-the-shell-arise-l0.jpg","lastUpdate":"2016-02-10T14:57:58.367Z","chapters":[{"chapterId":1},{"chapterId":2},{"chapterId":3},{"chapterId":4},{"chapterId":5},{"chapterId":6}]}

var expectedHtml = '<h3 class="text-center ng-binding">Ghost in the Shell ARISE</h3>';

  var $compile, $rootScope;

  

  beforeEach( module('mangaApp', 'manga-app/directives/manga-result.html') );


  beforeEach( inject(function(_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }) );

  it('should output manga results to expected HTML format', function()
  {
    $rootScope.result = mangaData;
    var element;
    element = $compile('<manga-result result="result"></manga-result>')($rootScope);
    $rootScope.$digest();
    expect(element.html()).toContain(expectedHtml);

  });
  

});
