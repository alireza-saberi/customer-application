(function() {
    
    var OrdersController = function ($scope, $stateParams, customersFactory) {
        // $routeParams.customerId comes from  routing configuration customerId after PATH       
        var customerId = $stateParams.customerId;
        $scope.customer = null;
        function init() {
            var customerId = $stateParams.customerId;
            //Search the customers for the customerId
            $scope.customer = customersFactory.getCustomer(customerId);
            var orderTotal = 0;
            for(var i=0; i< $scope.customer.orders.length; i++){
                orderTotal += $scope.customer.orders[i].total;
            }
            $scope.orderTotal = orderTotal;
            $scope.totalType = ($scope.orderTotal > 100) ? 'success':'danger';
        }

        $scope.doSort = function(propName) {
           $scope.sortBy = propName;
           $scope.reverse = !$scope.reverse;
        };
        init();
    };
    
    OrdersController.$inject = ['$scope', '$stateParams', 'customersFactory'];

    angular.module('customersApp')
      .controller('OrdersController', OrdersController);
    
}());