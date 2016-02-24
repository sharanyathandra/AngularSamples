var orderApp = angular.module('orderApp', ['ngRoute'])

orderApp.config(['$routeProvider', 
function($routeProvider) {
  $routeProvider
  .when('/', {
	    templateUrl : 'pages/home.html',
	    controller : 'homeCntrl'
	  })
  .when('/ShowOrder/MyOrders', {
    templateUrl : 'pages/home.html',
    controller : 'homeCntrl'
  })
  .when('/ShowOrder/NewOrder', {
    templateUrl : 'pages/neworder.html',
    controller : 'newOrderCntrl'
  });
  
}]);

orderApp.controller('homeCntrl', function($scope, $http) {
  
  $http.get("http://localhost:8080/orders").success(function(data) {
	  $scope.info = data;
  })
  
  $scope.delOrder = function(id) {
	  $http.get("http://localhost:8080/delorder?id="+id).success(function(data) {
		  $scope.info = data;
	  })
  }
  
});

orderApp.controller('newOrderCntrl', function($scope, $http, $location) {
	
	$scope.addNewOrder = function() {
		$http.get("http://localhost:8080/neworder?desc="+$scope.desc+"&amt="+$scope.amt).success(function(data) {
			$scope.info = data;
			$location.path('/ShowOrder/MyOrders');
		})
	}
	
});