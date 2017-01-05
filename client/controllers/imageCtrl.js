App.controller('imageCtrl', function($scope, $http){

  $http.get("https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=753f95ec28dd07aff0c749b4aa00a812&photoset_id=72157672246593266&user_id=134646885%40N03&format=json&nojsoncallback=1&auth_token=72157675058702413-a151d45a4c09b6f7&api_sig=b3fd6ec42e077f2eb91e288ce94eadd0").then(function(response){

    $scope.picture = response.data.photoset.photo;
    console.log($scope.picture);

  })
})
