App.factory('MessageFactory', function($http){

  var factory = {};

  factory.getMessages = function(){
    return $http.get('/secret').then(function(res){
      return res.data;
      console.log(res.data);
    })
  }

  factory.createMessage = function(newMessage){
    return $http.post('/secret', newMessage)
  }

  return factory;

})
