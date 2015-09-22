var app = "";

app = angular.module('UsersProjects', []);

app.controller('usersProjectsController', function($scope, $http) {
    var pid = document.getElementById('pid').value;
    var url = Drupal.settings.basePath + 'users_projects/listUsersByProject';
    $http.post(url,{'pid': pid}).success(function(data) {
        if (data.response == true)
            $scope.users = data.arrayDatos;
    }).error(function(data, status, headers, config) {
        alert('<< Se produjo un error, favor intente más tarde. >>');
    });

    $scope.addUserByProject = function() {
        var url = Drupal.settings.basePath + 'users_projects/addUserByProject';
        $http.post(url, {'email': $scope.email}).success(function(data) {
            if (data.response == true)
                alert('<< Registro almacenado correctamente. >>');
            else
                alert('<< Problemas para almacenar el registro. >>');
        }).error(function(data, status, headers, config) {
            alert('<< Se produjo un error, favor intente más tarde. >>');
        });
    };
});

