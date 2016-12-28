App.controller('imageCtrl', function($scope, $http){

  $http.get("https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=6fcd82d09c176c24f7f53b042db12478&photoset_id=72157672246593266&user_id=134646885%40N03&format=json&nojsoncallback=1&auth_token=72157676999765440-9856aa8a748ba47a&api_sig=e1567fa6e651b1bf290cb68cf359a281").then(function(response){

    $scope.picture = response.data.photoset.photo;
    console.log($scope.picture);

  })
})
