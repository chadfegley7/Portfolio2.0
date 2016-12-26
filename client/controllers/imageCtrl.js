App.controller('imageCtrl', function($scope, $http){

  $http.get("https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=9324307a53115f972624ac7e84387c24&photoset_id=72157672246593266&user_id=134646885%40N03&format=json&nojsoncallback=1&auth_token=72157674545419033-264221d30828dc82&api_sig=dbea6030e527c4840669c655e8a724ee").then(function(response){

    $scope.picture = response.data.photoset.photo;
    console.log($scope.picture);

  })
})
