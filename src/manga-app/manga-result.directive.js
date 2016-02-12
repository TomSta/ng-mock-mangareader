angular.module('mangaApp')
.directive('mangaResult', mangaResult);

function mangaResult(){
  return {
    restrict: 'E',
    replace: true,
    scope: {
      result: '=result'
    },
    templateUrl: 'manga-app/directives/manga-result.html'
  }
}

