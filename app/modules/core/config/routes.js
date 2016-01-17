'use strict';

/**
 * @ngdoc object
 * @name core.config
 * @requires ng.$stateProvider
 * @requires ng.$urlRouterProvider
 * @description Defines the routes and other config within the core module
 */
angular
    .module('core')

    .constant('FIREBASE_URL','https://todocordova.firebaseio.com/')

    /*detect authentication on pages*/

    .run(['$rootScope','$state', function($rootScope,$state){
        $rootScope.$on('$stateChangeError', function(event,next,previous,error){
            if(error == 'AUTH_REQUIRED'){
                $rootScope.message = 'Sorry you must log in to access that page';
                $state.go('#/login');
            } // AUTH REQUIRED
        }); // event info
    }]) // run

    .config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('login');

            /**
             * @ngdoc event
             * @name core.config.route
             * @eventOf core.config
             * @description
             *
             * Define routes and the associated paths
             *
             * - When the path is `'/'`, route to home
             * */
            $stateProvider
                .state('login', {
                  url: '/login',
                  templateUrl: 'modules/core/views/login.html',
                  controller: 'LoginController'
                })
                .state('register', {
                  url: '/register',
                  templateUrl: 'modules/core/views/register.html',
                  controller: 'RegisterController'
                })
                .state('todo', {
                  url: '/todo',
                  templateUrl: 'modules/core/views/todo.html',
                  controller: 'TodoController',
                  resolve: {
                     currentAuth: function(Authentication){
                        return Authentication.requireAuth();
                     } // currentAuth
                  } // resolve
                });
        }
    ]);
