var app = angular.module('beardsleyio', []);

function initController() {
};

function sidebarController($scope, NavigationService) {
	$scope.navigationService = NavigationService;
};

function bodyController($scope, NavigationService) {
	$scope.navigationService = NavigationService;
};

app.controller("InitController", [initController]);
app.controller("SidebarController", ["$scope", "NavigationService", sidebarController]);
app.controller("BodyController", ["$scope", "NavigationService", bodyController]);
