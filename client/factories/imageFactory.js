App.factory('imageFactory', function($http){
  var factory = {};
  var pics = [];

  factory.index = function(callback){
      $http.get('#/photography').then(function(response){
      pics = response;
      callback(pics);
    })
  }

  factory.jsonFlickrApi = function(callback){
    $http.get("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=0ab58028d38ed14a97cb1a6da25254b8&user_id=134646885%40N03&per_page=15&format=json&nojsoncallback=1&auth_token=72157677768648575-59de4fc5e61bea4c&api_sig=c2bf412f074c3328d371a4506da31bcb").then(function(response){
      callback(response);
      console.log(response);
      gallery = response.photos.photo;
    })
  }

  return factory;
});
