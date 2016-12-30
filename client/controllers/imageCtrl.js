App.controller('imageCtrl', function($scope, $http){

  $http.get("https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=cf53febc21d09753950eb1732e758dac&photoset_id=72157672246593266&user_id=134646885%40N03&format=json&nojsoncallback=1&auth_token=72157678504568565-75247e00ec0402c6&api_sig=7ee8b17ac74681318d5ca09b5adbdd24").then(function(response){

    $scope.picture = response.data.photoset.photo;
    console.log($scope.picture);

  })
})
