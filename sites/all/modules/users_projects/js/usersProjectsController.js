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
        $http.post(url, {'email': $scope.email,'pid':pid}).success(function(data) {
            if (data.response == true){
                $scope.users.push(data.arrayDatos);
                $scope.typeAlert = 'status';
                $scope.statusAlert = true;
                $scope.msgAlert = 'Registro almacenado correctamente.';
                $scope.email = "";
            }else{
                if(data.response == 2){
                    $scope.typeAlert = 'warning';
                    $scope.statusAlert = true;
                    $scope.msgAlert = 'Este registro ya fue adicionado.';
                    $scope.email = "";
                }else{
                    if(data.response == 3){
                        $scope.typeAlert = 'warning';
                        $scope.statusAlert = true;
                        $scope.msgAlert = 'Este correo no esta registrado.';
                        $scope.email = "";
                    }else{
                        alert('<< Problemas para almacenar el registro. >>');
                    }
                }
            }
        }).error(function(data, status, headers, config) {
            alert('<< Se produjo un error, favor intente más tarde. >>');
        });
    };
    
    $scope.removeUserByProject = function(index,uid) {
        var url = Drupal.settings.basePath + 'users_projects/removeUserByProject';
        $http.post(url, {'uid': uid,'pid':pid}).success(function(data) {
            if (data.response == true){
                $scope.users.splice(index, 1);
                $scope.typeAlert = 'status';
                $scope.statusAlert = true;
                $scope.msgAlert = 'Registro borrado correctamente.';
            }else{
                alert('<< Problemas para borrar el registro. >>');
            }
        }).error(function(data, status, headers, config) {
            alert('<< Se produjo un error, favor intente más tarde. >>');
        });
    };
});

