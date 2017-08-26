// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs

//= require angular/angular
//= require angular-ui-router/release/angular-ui-router
//= require angularjs-dropdown-multiselect
//= require angular-route

//= require bootstrap

//= require_self
//= require_tree .

angular
  .module('maphack', ['ui.router', 'ngRoute', 'angularjs-dropdown-multiselect'])
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$routeProvider' ,function ($stateProvider, $urlRouterProvider, $locationProvider, $routeProvider) {
    $stateProvider
      .state('cheatIndex', {
        url: '/',
        component: 'cheatIndex'
      })
      .state('home', {
        url: '/home',
        component: 'homePage'
      })
      .state('mapIndex', {
        url: '/map',
        component: 'mapIndex'
      })
      .state('cheatNew', {
        url: '/cheat/new',
        component: 'cheatNew'
      })
      .state('cheatShow', {
        url: '/cheat/:id',
        component: 'cheatShow'
      })
      .state('cheatEdit', {
        url: '/cheat/:id/edit',
        component: 'cheatEdit'
      });

      $stateProvider
      .state('profileShow', {
        url: '/user/:id',
        component: 'profileShow'
      })
      .state('profileEdit', {
        url: '/user/:id/edit',
        component: 'profileEdit'
      })
      .state('userCheatIndex', {
        url: '/user/:id/cheat',
        component: 'userCheatIndex'
      });

    // default fall back route
    $urlRouterProvider.otherwise('/');

    // enable HTML5 Mode for SEO
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }]);