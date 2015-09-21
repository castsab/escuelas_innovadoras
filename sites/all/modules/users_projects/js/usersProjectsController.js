angular.module('UsersProjects', []).controller('usersProjectsController', function($scope,$http) {

    $scope.users = [
        {'name': 'prueba', 'lastname': 'test'}
    ];

    $scope.add = function() {
        
        var data = {
            'name': $scope.name,
            'lastname': $scope.lastname,
            'email': $scope.email
        };
        
        //$http.post('../users_projects.module',data);
    };
});



