(function() {
    
    var app = angular.module('customersApp', ['ui.router']);
    app.constant('appSettings', {
        title:'Customer Application',
        version:'1.0'
    });
    app.controller('footercontroller', function($scope, appSettings){
        $scope.appSettings = appSettings;
    });
    app.config(function($stateProvider, $urlRouterProvider){
    	
    	$urlRouterProvider.otherwise("/")
    	$stateProvider
    		.state('home',
    			{
    				url:'/',
    				controller:'CustomersController',
    				templateUrl:'views/customers.html'
    			})
    		.state('order',{
    				url:'/order/:customerId',
    				controller: 'OrdersController',
    				templateUrl:'views/orders.html'
    		});

    });
    
}());
    