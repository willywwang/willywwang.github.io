var app = angular.module('websiteApp', []);

app.controller('WebsiteController', function($scope) {
	$scope.showPopup = false;
	$scope.openPopup = function() {
		$scope.showPopup = !$scope.showPopup;
	};
});