App.controller('imageCtrl', function($scope, $http){

  $http.get("https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=0f46877b43d77c431e7cdaf7bb7d19b6&photoset_id=72157672246593266&user_id=134646885%40N03&per_page=8&format=json&nojsoncallback=1&auth_token=72157683745929673-8d05ac97c13cf4c9&api_sig=c8a3403bdf9cff90b6bf30262e81be21").then(function(response){

    $scope.picture = response.data.photoset.photo;
    console.log($scope.picture);

  })
})
