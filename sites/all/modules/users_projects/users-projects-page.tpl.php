<!doctype html>
<html lang="en" ng-app="UsersProjects">
    <head>
        <meta charset="utf-8">
    </head>

    <body ng-controller="usersProjectsController">

        <br>
        <div class="filtro">
            <span >Nombre:</span> 
            <input ng-model="name" disabled="disabled">
            <span >Apellido:</span> 
            <input ng-model="lastname" disabled="disabled">
            <span >Correo:</span> 
            <input name="email" ng-model="email" >
            <button id="btnAddUsersProject" ng-click="add();">+</button>
        </div> 

        <table border="1">
            <tr>
                <th>Nombres</th>
                <th>Apellidos</th>
                <th>Acciones</th>
            </tr>
            <tr ng-repeat="arrayUsers in users">
                <td>{{arrayUsers.name}}</td>
                <td>{{arrayUsers.lastname}}</td>
                <th>
                    <a onclick="">x</a>
                </th>
            </tr>
        </table>



    </body>
</html>
