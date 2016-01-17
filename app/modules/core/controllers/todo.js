'use strict';

/**
 * @ngdoc object
 * @name core.Controllers.TodoController
 * @description TodoController
 * @requires ng.$scope
*/
angular
    .module('core')
    .controller('TodoController', ['$scope','Authentication', '$rootScope', '$firebaseAuth', '$firebaseArray', 'FIREBASE_URL',
      function($scope,Authentication, $rootScope, $firebaseAuth, $firebaseArray, FIREBASE_URL) {

        var ref = new Firebase(FIREBASE_URL);
        var auth = new $firebaseAuth(ref);

        auth.$onAuth(function(authUser){
          if(authUser){
            var todoRef = new Firebase(FIREBASE_URL + 'users/' + $rootScope.currentUser.$id + '/todo');
            var todoInfo = $firebaseArray(todoRef);

            $scope.todoList = todoInfo;

            $scope.newTask = function() {
              todoInfo.$add({
                task: $scope.newTodoList,
                date: Firebase.ServerValue.TIMESTAMP
              }).then(function(){
                $rootScope.newTodoList = ' ';
              })
            }; // add new todoList

            $scope.deleteTask = function(key){
              todoInfo.$remove(key);
            }; // delete task


          }  // authUser
        }); // check user Authentication
}]);
