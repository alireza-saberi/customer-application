(function() {
    
    var bodyController = function ($scope, appSettings) {
        $scope.appSettings = appSettings;
    };
    
    bodyController.$inject = ['$scope', 'appSettings'];

    angular.module('customersApp')
      .controller('bodyController', bodyController);
    
}());