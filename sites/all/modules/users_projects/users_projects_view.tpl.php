
<!doctype html>
<html lang="en" ng-app="UsersProjects">
    <head>
        <meta charset="utf-8">
    </head>

    <body ng-controller="usersProjectsController">
    <div class="formularioUsuariosProyecto">
        <div class="formularioAddUsuarios">
            
            <div ng-show="statusAlert" class="messages--{{typeAlert}} messages status ng-binding">{{msgAlert}}</div>
            
            <form name="form">
                <input type="hidden" id="pid" name="pid" value="<?php echo $pid;?>" >
                <span >Correo:</span> 
                <input type="email" name="email" ng-model="email" required="true" placeholder="nombre@email.com">
                <span ng-show="!form.$pristine && form.email.$error.required">Correo es requerido.</span>
                <span ng-show="!form.$pristine && form.email.$error.email">Por favor ingrese un correo valido.</span>
                <button id="btnAddUsersByProject" ng-click="addUserByProject();" ng-disabled="!form.$valid" class="separarBoton">Adicionar</button>
            </form>
        </div> 

        <table class="usuariosProyecto">
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
                <td>
                    <a style="cursor: pointer" ng-click="removeUserByProject($index,arrayUsers.uid);">Borrar</a>
                </td>
            </tr>
        </table>
    </div>    


    </body>
</html>
