'use strict';

describe('Controller: TodoController', function() {

    //Load the ui.router module
    beforeEach(module('ui.router'));
    //Load the module
    beforeEach(module('core'));

    var TodoController,
        scope;

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        TodoController = $controller('TodoController', {
        $scope: scope
        });
    }));

    it('should ...', function() {

    });
});
