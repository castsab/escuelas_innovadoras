
<!doctype html>
<html lang="en" ng-app="UsersProjects">
    <head>
        <meta charset="utf-8">
    </head>

    <body ng-controller="usersProjectsController">

        <div >
            <input type="hidden" id="pid" name="pid" value="<?php echo $pid;?>" >
            <span >Correo:</span> 
            <input name="email" ng-model="email" >
            <button id="btnAddUsersByProject" ng-click="addUserByProject();" ng-required="true">Adicionar</button>
        </div> 

        <table border="1">
            <tr>
                <th>Nombres</th>
                <th>Apellidos</th>
                <th>Correo</th>
                <th>Acciones</th>
            </tr>
            <tr ng-repeat="arrayUsers in users">
                <td>{{arrayUsers.name}}</td>
                <td>{{arrayUsers.lastname}}</td>
                <td>{{arrayUsers.email}}</td>
                <th>
                    <a style="cursor: pointer" ng-click="removeUserByProject($index,arrayUsers.uid);">x</a>
                </th>
            </tr>
        </table>



    </body>
</html>
