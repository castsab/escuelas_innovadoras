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
                $scope.users.push(data.arrayDatos);
            else
                alert('<< Problemas para almacenar el registro. >>');
        }).error(function(data, status, headers, config) {
            alert('<< Se produjo un error, favor intente más tarde. >>');
        });
    };
    
    $scope.removeUserByProject = function(index,uid) {
        var url = Drupal.settings.basePath + 'users_projects/removeUserByProject';
        $http.post(url, {'uid': uid,'pid':pid}).success(function(data) {
            if (data.response == true)
                $scope.users.splice(index, 1);
            else
                alert('<< Problemas para borrar el registro. >>');
        }).error(function(data, status, headers, config) {
            alert('<< Se produjo un error, favor intente más tarde. >>');
        });
    };
});

