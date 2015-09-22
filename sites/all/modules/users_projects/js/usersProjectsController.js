var app = "";

app = angular.module('UsersProjects', ['ngResource']);
// Factory for the ngResource service.
app.factory('Node', function($resource) {
    return $resource(Drupal.settings.basePath + 'api/node/:param', {}, {
      'search' : {method : 'GET', isArray : true}
    });
})

app.controller('usersProjectsController', function($scope,$http) {
    $scope.users = [
        {'name': 'prueba', 'lastname': 'test'}
    ];

    $scope.add = function() {
        $scope.nodes = Node.search({name: $scope.name,'lastname': $scope.lastname,'email': $scope.email});
    };
});



