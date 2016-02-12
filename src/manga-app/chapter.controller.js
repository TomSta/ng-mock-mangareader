var app = angular.module('mangaApp');

app.controller('ChapterController', ChapterController);


function ChapterController ($scope, $location, mangaApi, $timeout) {
      var xwow = new WOW; //unhappily needs to be reinitialized
      
      $scope.chapterData = {};
      
      $scope.gotChapter = false; //show info if user request non existing chapter
      $scope.dataLoaded = false; //needed to keep out flickering/late animations

      /* assign variables to scope for reuse in template */
      $scope.chapter = $location.search().chapter; 
      $scope.mangaId = $location.search().manga;
      
      $scope.changeChapter = function(chapterNumber){
       $location.url('/chapter?manga='+$scope.mangaId+'&chapter='+chapterNumber);
      };

      if($scope.mangaId.length > 1 && $scope.chapter > 0) {
       mangaApi.read($scope.mangaId, $scope.chapter)
        .then(function(data) {
          checkMangaData(data);
          showMangaData();
        })
        .catch(function(){
            $scope.status = 'Error!';
        });
      }

    /*
     * if object is empty show no more chapters box
     */
    function checkMangaData(data) {
      if(data.hasOwnProperty('href')) {
        $scope.gotChapter = true;
        $scope.chapterData = data;
      } else {
       $scope.gotChapter = false; 
      }
    }

    /*
     * init WowJS scroller and show data
     * needs to go in timeout : (
     */
    function showMangaData() {
      $timeout(function(){
        xwow.init();
        $scope.dataLoaded = true;
      }, 100);
    }
}
