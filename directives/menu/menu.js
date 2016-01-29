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
				
				$scope.mobileMenu = false;
				
				$scope.showMobileMenu = function () {
					$scope.mobileMenu = !$scope.mobileMenu;	
				};
				
			}
		};
	});