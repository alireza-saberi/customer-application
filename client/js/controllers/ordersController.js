(function() {
    
    var OrdersController = function ($scope, $stateParams) {

        // $routeParams.customerId comes from  routing configuration customerId after PATH       
        var customerId = $stateParams.customerId;
        $scope.orders = null;
        function init() {
            //Search the customers for the customerId
            for (var i=0,len=$scope.customers.length;i<len;i++) {
               if ($scope.customers[i].id === parseInt(customerId)) {
                   $scope.orders = $scope.customers[i].orders;
                   break;
               }
            }
        }
        $scope.customers = [
            {id:1, joined: '2000-12-02', name:'Ali', city:'Montreal', orderTotal: 9.9956, orders: [ {id: 1, product:'Shoes', total: 9.9956}]},
            {id:2, joined: '1965-01-25',name:'Zoe', city:'Montreal', orderTotal: 19.99, orders: [{id: 2, product:'Baseball', total: 9.995}, {id: 3, product:'Bat', total: 9.9956}]},
            {id:3, joined: '1944-06-15',name:'Tina', city:'Toronto', orderTotal:44.99, orders: [{id: 4, product: 'Headphones', total: 44.99}]},
            {id:4, joined: '1995-03-28',name:'Azad', city:'Vancouver', orderTotal:101.50, orders: [{id: 5, product: 'Kindle', total: 101.50}]}
            ];

        $scope.doSort = function(propName) {
           $scope.sortBy = propName;
           $scope.reverse = !$scope.reverse;
        };
        init();
    };
    
    OrdersController.$inject = ['$scope', '$routeParams'];

    angular.module('customersApp')
      .controller('OrdersController', OrdersController);
    
}());