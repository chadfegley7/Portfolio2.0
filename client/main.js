var App = angular.module('myApp', ['ui.router']);

App.config(function($stateProvider, $urlRouterProvider, $qProvider){

  $qProvider.errorOnUnhandledRejections(false);

  $urlRouterProvider.otherwise('/');

  $stateProvider

    .state('index',{
      url: '/',
      templateUrl: '/partials/_index.html'
    })

    .state('about',{
      url: '/about',
      templateUrl: '/partials/_about.html'
    })

    .state('highflyers',{
      url: '/highflyers',
      templateUrl: '/partials/_highflyers.html'
    })

    .state('corkboard',{
      url: '/corkboard',
      templateUrl: '/partials/_corkboard.html'
    })

    .state('homie',{
      url: '/homie',
      templateUrl: '/partials/_homie.html'
    })

    .state('game2fame',{
      url: '/game2fame',
      templateUrl: '/partials/_game2fame.html'
    })

    .state('shakequake',{
      url: '/shakequake',
      templateUrl: '/partials/_shakequake.html'
    })

    .state('reactweather',{
      url: '/reactweather',
      templateUrl: '/partials/_reactweather.html'
    })

    .state('photography',{
      url: '/photography',
      templateUrl: '/partials/_photography.html',
      controller: 'imageCtrl',

    })

    .state('contact',{
      url: '/contact',
      templateUrl: '/partials/_contact.html',
      controller: 'messageCtrl'
    })

    .state('secret',{
      url: '/secret',
      templateUrl: '/partials/_secret.html',
      controller: 'messageCtrl'
    })
})
