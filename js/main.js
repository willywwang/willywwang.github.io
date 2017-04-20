var website = angular.module('website', ['ui.bootstrap']);

website.controller('web-controller', function($scope, $interval, $modal) {
	// set defaults
	$scope.androidProjectShow="true";
	$scope.pythonProjectShow="true";
	$scope.webProjectShow="true";
	$scope.mobileMenuClicked=false;

	// open mobile menu
	$scope.openMobileMenu = function() {
		$scope.mobileMenuClicked = !$scope.mobileMenuClicked;
	}

	// open android modal
	$scope.openAndroidModal = function() {
		var modalInstance = $modal.open({
			ariaLabelledBy: 'modal-title',
			ariaDescribedBy: 'modal-body',
			templateUrl: 'android-modal.html',
			controller: 'modal-controller'
		});
	}

	// open python modal
	$scope.openPythonModal = function() {
		var modalInstance = $modal.open({
			ariaLabelledBy: 'modal-title',
			ariaDescribedBy: 'modal-body',
			templateUrl: 'python-modal.html',
			controller: 'modal-controller'
		});
	}

	// open web modal
	$scope.openWebModal = function() {
		var modalInstance = $modal.open({
			ariaLabelledBy: 'modal-title',
			ariaDescribedBy: 'modal-body',
			templateUrl: 'web-modal.html',
			controller: 'modal-controller'
		});
	}

	// display original panel when modal is closed
	$scope.$on('modal-closed', function(){
		$scope.androidProjectShow="true";
		$scope.pythonProjectShow="true";
		$scope.webProjectShow="true";
	})

	// infinitely loop through these words to display on landing page
	$scope.nouns =	['Student', 'Developer','Customer Support'];
	var int = 0;
	function rotateWords() {
		rotateText = function() {
			if (int === $scope.nouns.length - 1)
			{
				int = 0;
			} 
			else 
			{
				int++;
			}

			return int;
		}

		var index = rotateText();
		$scope.noun = $scope.nouns[index];
	}

	$scope.noun = $scope.nouns[0];
	$interval(rotateWords, 1000);
});

website.controller('modal-controller', function($scope, $rootScope, $modalInstance) {
	$scope.close = function() {
		$rootScope.$broadcast('modal-closed');
		$modalInstance.dismiss('close');
	}
});
