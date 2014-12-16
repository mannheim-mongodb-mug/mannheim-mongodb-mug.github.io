'use strict';

describe('Controller: NextdateCtrl', function () {

  // load the controller's module
  beforeEach(module('mannheimMongodbMuggithubioApp'));

  var NextdateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NextdateCtrl = $controller('NextdateCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
