var app = angular.module('UsersProjects', []);

//hacemos el ruteo de nuestra aplicación
app.config(function($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "users-projects-page.tpl.php"
    }).when("/add", {
        title: 'Añadir usuario',
        templateUrl: "templates/add.html",
        controller: "addController"
    }).otherwise({redirectTo: "/"})
});

app.controller('usersProjectsController', function($scope) {

    $scope.users = [
        {'name': 'prueba', 'lastname': 'test'},
    ];

    $scope.add = function() {
        var email = $scope.email;

        alert('add...' + email);
    };
});



