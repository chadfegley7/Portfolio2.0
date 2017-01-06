App.controller('imageCtrl', function($scope, $http){

  $http.get("https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=0a9e130425e50f9173010ea8a0bd6bf5&photoset_id=72157672246593266&user_id=134646885%40N03&per_page=15&format=json&nojsoncallback=1&auth_token=72157675018562974-76cf823bae4a7016&api_sig=f2a1a78b3c2be9b1326141ec33f2a6b4").then(function(response){

    $scope.picture = response.data.photoset.photo;
    console.log($scope.picture);

  })
})
