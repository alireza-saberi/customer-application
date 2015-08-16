(function() {
    
    var CustomersController = function ($scope) {
        $scope.sortBy = 'name';
        $scope.reverse = false;
        
        $scope.customers= [{joined: '2000-12-02', name:'Ali', city:'Montreal', orderTotal: 9.9956}, {joined: '1965-01-25',name:'Zoe', city:'Montreal', orderTotal: 19.99},{joined: '1944-06-15',name:'Tina', city:'Toronto', orderTotal:44.99}, {joined: '1995-03-28',name:'Azad', city:'Vancouver', orderTotal:101.50}];
        $scope.doSort = function(propName) {
           $scope.sortBy = propName;
           $scope.reverse = !$scope.reverse;
        };
    };
    
    CustomersController.$inject = ['$scope'];

    angular.module('customersApp')
      .controller('CustomersController', CustomersController);
    
}());