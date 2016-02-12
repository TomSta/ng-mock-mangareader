angular.module('mangaCore', ['ngResource'])
  .factory('PopularMangas', PopularMangas);

function PopularMangas($resource){
  var token = 'something'; 

  return $resource('popular/:mangaId', {mangaId: '@id' }, {
      update: { 
        method: 'PUT',
        headers: { 'authToken': token }
      },
      get: {
        method: 'GET',
        headers: { 'authToken': token }
      },
      query: {
        method: 'GET',
        headers: { 'authToken': token },
        isArray: true
      },
      save: {
        method: 'POST',
        headers: { 'authToken': token }
      },
      remove: {
        method: 'DELETE',
        headers: { 'authToken': token }
      }
   });
}


