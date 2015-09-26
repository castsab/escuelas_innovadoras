
var app = "";

app = angular.module('links', []);

app.controller('linksController', function($scope, $http) {
    
    var pid = document.getElementById('pid').value;
    
    var url = Drupal.settings.basePath + 'links/listLinks';
    $http.post(url,{'pid': pid}).success(function(data) {
        if (data.response == true)
            $scope.links = data.arrayDatos;
    }).error(function(data, status, headers, config) {
        alert('<< Se produjo un error, favor intente más tarde. >>');
    });

    $scope.addLink = function() {
        var url = Drupal.settings.basePath + 'links/addLink';
        
        var data = {
            'pid':pid,
            'title': $scope.title,
            'description':$scope.description,
            'link':$scope.link
        };
        
        $http.post(url, data).success(function(data) {
            if (data.response == true){
                $scope.links.push(data.arrayDatos);
                $scope.typeAlert = 'status';
                $scope.statusAlert = true;
                $scope.msgAlert = 'Registro almacenado correctamente.';
                $scope.title = "";
                $scope.description = "";
                $scope.link = "";
            }else{
                $scope.typeAlert = 'warning';
                $scope.statusAlert = true;
                $scope.msgAlert = 'Usted no tiene permisos para esta acción.';
                $scope.title = "";
                $scope.description = "";
                $scope.link = "";
            }
        }).error(function(data, status, headers, config) {
            alert('<< Se produjo un error, favor intente más tarde. >>');
        });
    };
    
    $scope.removeLink = function(index,lid) {
        var url = Drupal.settings.basePath + 'links/removeLink';
        $http.post(url, {'lid': lid}).success(function(data) {
            if (data.response == true){
                $scope.links.splice(index, 1);
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

