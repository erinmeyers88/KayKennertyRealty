angular.module('kayKennerty')
    .controller('testimonialsCtrl', function ($scope, $location) {
		
        $scope.moreOrLess = "More";

        $scope.showMoreTestimonials = function () {
            var testimonial = document.getElementsByClassName("moreTestimonialsDiv");
			
            testimonial[0].style.display = (testimonial[0].style.display == "flex") ? "none" : "flex";
           
            if ($scope.moreOrLess === "More") {
                $scope.moreOrLess = "Less";
            } else {
                $scope.moreOrLess = "More";
            }
           
            console.log($scope.moreOrLess);
        };
		

    });