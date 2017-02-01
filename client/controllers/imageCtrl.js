App.controller('imageCtrl', function($scope, $http){

  $http.get("https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=84c5ed5bf712522499951598508d97ec&photoset_id=72157672246593266&user_id=134646885%40N03&per_page=15&format=json&nojsoncallback=1&auth_token=72157679742029736-3489e16920e3ad18&api_sig=4f1c2763ebea17ae87c7b7de893a9e16").then(function(response){

    $scope.picture = response.data.photoset.photo;
    console.log($scope.picture);

  })
})
