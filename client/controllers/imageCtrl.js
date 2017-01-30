App.controller('imageCtrl', function($scope, $http){

  $http.get("https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=898856f9c25df7dc1a7312ea70f9d459&photoset_id=72157672246593266&user_id=134646885%40N03&per_page=15&format=json&nojsoncallback=1&auth_token=72157678000576781-55e7b315e1c6b328&api_sig=c1604476b41309106f3b111a0d4759a9").then(function(response){

    $scope.picture = response.data.photoset.photo;
    console.log($scope.picture);

  })
})
