var app = angular.module('mangaApp');

app.controller('ChapterController', ChapterController);


function ChapterController ($scope, $location, mangaApi, $timeout) {
      var xwow = new WOW;
      $scope.chaptersData = {};
      var mangaId = $location.search().manga;
      var chapterNumber = $location.search().chapter;
      $scope.nextChapter = parseInt(chapterNumber) + 1;
      $scope.mangaId = $location.search().manga;
      $scope.nextPage = function(){
       var next = parseInt(chapterNumber) + 1;
       $location.url('/chapter?manga='+mangaId+'&chapter='+next);
      };

      $scope.dataLoaded = true;
      $scope.showPageNumbers = false;
      if(mangaId.length > 1 && chapterNumber > 0) {
      
       mangaApi.read(mangaId, chapterNumber)
        .then(function(data) {
            $scope.chaptersData = data;
        })
        .then(function(data){
         $timeout(function(){
          xwow.init();
          $scope.showMeta = true;
         }, 100);
        })
        .catch(function(){
            $scope.status = 'Error!';
        });
       $location.url('/chapter?manga='+mangaId+'&chapter='+chapterNumber);
      }
}
