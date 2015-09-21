angular.module('UsersProjects', []).controller('usersProjectsController', function($scope) {

    $scope.users = [
        {'name': 'prueba', 'lastname': 'test'}
    ];

    $scope.add = function() {
        var email = $scope.email;

        alert('add...' + email);
    };
});



