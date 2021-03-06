(function() {
  'use strict'

  angular.module('app')
    .config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  function config($stateProvider, $urlRouterProvider, $locationProvider){
    $locationProvider.html5Mode(true)

    $stateProvider
      .state({
        name: "dashboard",
        url: "/",
        component: "dashboard"
      })
      .state({
        name: "quests",
        url: "/quests",
        component: "quests"
      });

      $urlRouterProvider.otherwise("/");
  }

}());
