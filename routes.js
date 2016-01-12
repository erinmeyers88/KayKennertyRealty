angular.module("kayKennerty")
	.config(function ($stateProvider, $urlRouterProvider) {
		
		$stateProvider
			.state("home", {
				url: "/home",
				templateUrl: "features/home/home.html",
				controller: "homeCtrl"
			})
			
			.state("resources", {
				url: "/resources",
				templateUrl: "features/resources/resources.html",
				controller: "resourcesCtrl"
			})
			
			.state("charleston", {
				url: "/charleston",
				templateUrl: "features/charleston/charleston.html",
				controller: "charlestonCtrl"
			})
			
			.state("testimonials", {
				url: "/testimonials",
				templateUrl: "features/testimonials/testimonials.html",
				controller: "testimonialsCtrl"
			})
			
			.state("contact", {
				url: "/contact",
				templateUrl: "features/contact/contact.html",
				controller: "contactCtrl"
			});
	
		$urlRouterProvider.otherwise("/home");
		
	});