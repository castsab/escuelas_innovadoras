alert('ttttttt');

var app = "";

app = angular.module('links', []);

app.controller('linksController', function($scope, $http) {
    alert('fffffffffffffffffffffffff');
    var pid = document.getElementById('pid').value;
    
    var url = Drupal.settings.basePath + 'links/listLinks';
    $http.post(url,{'pid': pid}).success(function(data) {
        if (data.response == true)
            $scope.users = data.arrayDatos;
    }).error(function(data, status, headers, config) {
        alert('<< Se produjo un error, favor intente más tarde. >>');
    });

    $scope.addLink = function() {
        var url = Drupal.settings.basePath + 'links/addLink';
        
        var data = {
            'pid':pid,
            'title': $scope.title,
            'descripction':$scope.descripction,
            'link':$scope.link
        };
        
        $http.post(url, data).success(function(data) {
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
                        $scope.msgAlert = 'Este usuario no esta registrado.';
                        $scope.email = "";
                    }else{
                        $scope.typeAlert = 'warning';
                        $scope.statusAlert = true;
                        $scope.msgAlert = 'Usted no tiene permisos para esta acción.';
                        $scope.email = "";
                    }
                }
            }
        }).error(function(data, status, headers, config) {
            alert('<< Se produjo un error, favor intente más tarde. >>');
        });
    };
    
    $scope.removeLink = function(index,lid) {
        var url = Drupal.settings.basePath + 'links/removeLink';
        $http.post(url, {'lid': lid}).success(function(data) {
            if (data.response == true){
                $scope.users.splice(index, 1);
                $scope.typeAlert = 'status';
                $scope.statusAlert = true;
                $scope.msgAlert = 'Registro borrado correctamente.';
            }else{
                $scope.typeAlert = 'warning';
                $scope.statusAlert = true;
                $scope.msgAlert = 'Usted no tiene permisos para esta acción.';
                $scope.email = "";
            }
        }).error(function(data, status, headers, config) {
            alert('<< Se produjo un error, favor intente más tarde. >>');
        });
    };
});

