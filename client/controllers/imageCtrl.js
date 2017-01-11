App.controller('imageCtrl', function($scope, $http){

  $http.get("https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=3e360e2c5a7ab6dd84bf0d810e947a2b&photoset_id=72157672246593266&user_id=134646885%40N03&per_page=15&format=json&nojsoncallback=1&auth_token=72157677570230420-19a4789d1e038181&api_sig=feea6b31e3ffa726ab76546fcc1baff6").then(function(response){

    $scope.picture = response.data.photoset.photo;
    console.log($scope.picture);

  })
})
