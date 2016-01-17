'use strict';

describe('Controller: RegisterController', function() {

    //Load the ui.router module
    beforeEach(module('ui.router'));
    //Load the module
    beforeEach(module('core'));

    var RegisterController,
        scope;

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        RegisterController = $controller('RegisterController', {
        $scope: scope
        });
    }));

    it('should ...', function() {

    });
});
