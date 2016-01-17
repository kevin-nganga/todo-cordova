'use strict';

/**
 * @ngdoc object
 * @name core.Controllers.RegisterController
 * @description RegisterController
 * @requires ng.$scope
*/
angular
    .module('core')
    .controller('RegisterController', ['$scope','Authentication',
        function($scope,Authentication) {

          $scope.register = function(){
            Authentication.registration($scope.user);
          };

        }
]);
