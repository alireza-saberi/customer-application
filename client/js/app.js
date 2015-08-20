(function() {
    
    var app = angular.module('customersApp', ['ui.router']);
    app.value('appSettings', {
        title:'Customer Application',
        version:'1.0'
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
    