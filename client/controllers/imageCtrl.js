App.controller('imageCtrl', function($scope, $http){

  $http.get("https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=5c9e7efef1ac6c3478ae954c23ec352b&photoset_id=72157672246593266&user_id=134646885%40N03&format=json&nojsoncallback=1&auth_token=72157683070635461-89d5a155e98c24e6&api_sig=acaa82bf03db36abe44b2de86efcca04").then(function(response){

    $scope.picture = response.data.photoset.photo;
    console.log($scope.picture);

  })
})
