(function() {
    
    var OrdersController = function ($scope, $stateParams) {
        // $routeParams.customerId comes from  routing configuration customerId after PATH       
        // var customerId = $stateParams.customerId;
        $scope.orders = null;
        function init() {
            var customerId = $stateParams.customerId;
            //Search the customers for the customerId
            for (var i=0,len=$scope.customers.length;i<len;i++) {
               if ($scope.customers[i].id === parseInt(customerId)) {
                   $scope.orders = $scope.customers[i].orders;
                   break;
               }
            }
        }

        $scope.doSort = function(propName) {
           $scope.sortBy = propName;
           $scope.reverse = !$scope.reverse;
        };
        init();
    };
    
    OrdersController.$inject = ['$scope', '$stateParams'];

    angular.module('customersApp')
      .controller('OrdersController', OrdersController);
    
}());