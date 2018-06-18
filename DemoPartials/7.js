    var demoApp1 = angular.module("demoApp1", []);
    demoApp1.controller("SimpleController1", function($scope) {
	  $scope.customers = [

			{ name: 'Dave Jones', city: 'Phoenix' },

			{ name: 'Jamie Riley', city: 'Atlanta' },

			{ name: 'Heedy Wahlin', city: 'Chandler' },

			{ name: 'Thomas Winter', city: 'Seattle' }

        ];
    });

    demoApp1.controller("SimpleController2", function($scope) {
	  $scope.customers = [

			{ name: 'Dave Jones', city: 'Phoenix' },

			{ name: 'Jamie Riley', city: 'Atlanta' }			

        ];
    });
