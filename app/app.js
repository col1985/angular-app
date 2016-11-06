'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  // 'myApp.view1',
  // 'myApp.view2',
  'myApp.version'
]).config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');

  $stateProvider
    // HOME STATES AND NESTED VIEWS ========================================
    .state('home', {
      url: '/home',
      templateUrl: 'home/home.html'
    })

    // nested list with custom controller
    .state('home.list', {
      url: '/list',
      templateUrl: 'home/partials/list.html',
      controller: function ($scope) {
        $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
      }
    })

    // nested list with just some random string data
    .state('home.paragraph', {
      url: '/paragraph',
      template: 'I could sure use a drink right now.'
    })

    // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
    .state('about', {
      url: '/about',
      views: {

        // the main template will be placed here (relatively named)
        '': { templateUrl: 'about/about.html' },

        // the child views will be defined here (absolutely named)
        'columnOne@about': { template: 'Look I am a column!' },

        // for column two, we'll define a separate controller 
        'columnTwo@about': {
          templateUrl: 'about/partials/table-data.html',
          controller: 'scotchController'
        }
      }

    });

}).controller('scotchController', function($scope) {
    
    $scope.message = 'test';
   
    $scope.scotches = [
        {
            name: 'Macallan 12',
            price: 50
        },
        {
            name: 'Chivas Regal Royal Salute',
            price: 10000
        },
        {
            name: 'Glenfiddich 1937',
            price: 20000
        }
    ];
    
});