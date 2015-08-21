(function() {
    
    var CustomersController = function ($scope, customersFactory, appSettings) {
        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.customers = [];
        $scope.appSettings = appSettings;
        $scope.doSort = function(propName) {
           $scope.sortBy = propName;
           $scope.reverse = !$scope.reverse;
        };
        $scope.deleteCustomer = function(customerId){
          customersFactory.deleteCustomer(customerId);
          for(var i=0;len=$scope.customers.length;i<len){
            if ($scope.customers[i].id === customerId) {
              $scope.customers.splice(i,1);
              break;
            };
           }
        };
        function init(){
           $scope.customers = customersFactory.getCustomers();
        };

        init();

    };
    
    CustomersController.$inject = ['$scope', 'customersFactory', 'appSettings'];

    angular.module('customersApp')
      .controller('CustomersController', CustomersController);
    
}());