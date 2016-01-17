'use strict';

/**
 * @ngdoc object
 * @name core.Controllers.HomeController
 * @description Home controller
 * @requires ng.$scope
 */
angular
    .module('core')
    .controller('LoginController', ['$scope','Authentication',
        function($scope, Authentication) {

          $scope.login = function(){
            Authentication.login($scope.user);
          };

          $scope.logout = function(){
            Authentication.logout();
          };
        }
    ]);
