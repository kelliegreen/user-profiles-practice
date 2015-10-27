angular.module('userProfiles').controller('MainController', function ($scope, mainService) {
	(
		function () {
			$scope.users = mainService.getData();
		}
		)();
});