App.controller('imageCtrl', function($scope, $http){

  $http.get("https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=907c1a90b12b135d3fcc558f26f33219&photoset_id=72157672246593266&user_id=134646885%40N03&per_page=15&format=json&nojsoncallback=1&auth_token=72157675391404063-00a9cdd5d07f1daf&api_sig=07342797b52f872249770b3c86b380a5").then(function(response){

    $scope.picture = response.data.photoset.photo;
    console.log($scope.picture);

  })
})
