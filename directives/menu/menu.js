angular.module("kayKennerty")
	.directive("menu", function ($state) {

		return {
			restrict: "E",
			templateUrl: "directives/menu/menu.html",
			controller: function ($scope, $location) {
				$scope.url = $location.url();

				$scope.showHome = function () {
					if ($scope.url === "/home") {
						return false;
					} else {
						return true;
					}
				};	
			}
		};
	});