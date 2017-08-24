var App = angular.module('myApp', ['ui.router']);

App.config(function($stateProvider, $urlRouterProvider, $qProvider){

  $qProvider.errorOnUnhandledRejections(false);

  $urlRouterProvider.otherwise('/');

  $stateProvider

    .state('index',{
      url: '/',
      templateUrl: '/partials/_index.html',
      controller: 'messageCtrl'
    })

    .state('secret',{
      url: '/secret',
      templateUrl: '/partials/_secret.html',
      controller: 'messageCtrl'
    })
})
