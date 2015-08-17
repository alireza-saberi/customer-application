(function() {
    
    var app = angular.module('customersApp', ['ui.router']);

    app.config(function($routeProvider){
    	$routeProvider
    		.when('/',
    			{
    				controller:'CustomersController',
    				templateUrl:'views/customers.html'
    			})
    		.when('/orders/:customerId',{
    				controller: 'OrdersController',
    				templateUrl:'views/orders.html'
    		})
    		.otherwise({ redirectTo: '/'});

    });
    
}());
    