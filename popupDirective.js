var app = angular.module('websiteApp', []);

app.controller('WebsiteController', function($scope) {
	$scope.showPopup = false;
	$scope.openPopup = function() {
		$scope.showPopup = !$scope.showPopup;
	};
});

app.directive('popup', function() {
	return {
		restrict: 'E', 
		scope: true, 
		transclude: true, 
		replace: true, 
		link: function postLink(scope, element, attrs) {
			scope.$watch(attrs.visible, function(value){
				if(value == true)
					$(element).modal('show');
				else
					$(element).modal('hide');
			});

			$(element).on('shown.bs.modal', function(){
				scope.$apply(function(){
					scope.$parent[attrs.visible] = true;
				});
			});

			$(element).on('hidden.bs.modal', function(){
				scope.$apply(function(){
					scope.$parent[attrs.visible] = false;
				});
			});
		},
		templateURL:"popup.html" 
	};
})