<?php $path = substr($_SERVER['SCRIPT_NAME'], 0, -9); ?>

<!doctype html>
<html lang="en" >
    <head>
        <meta charset="utf-8">
        <script type="text/javascript" src="<?php echo $path;?>sites/all/modules/links/js/angular.js"></script>
        <script type="text/javascript" src="<?php echo $path;?>sites/all/modules/links/js/linksController.js"></script>
    </head>

    <body >
        <div ng-app="links">
            <div ng-controller="linksController">
                <div >

                    <div ng-show="statusAlert" class="messages--{{typeAlert}} messages status ng-binding">{{msgAlert}}</div>

                    <form name="form_links">

                        <input type="hidden" id="pid" name="pid" value="<?php echo $pid; ?>" >

                        <span >Titulo:</span> 
                        <input type="text" name="title" ng-model="title" required="true" >
                        <span ng-show="!form_links.$pristine && form_links.title.$error.required">Campo requerido.</span>

                        <span >Descripcion:</span> 
                        <input type="text" name="description" ng-model="description" required="true" >
                        <span ng-show="!form_links.$pristine && form_links.description.$error.required">Campo requerido.</span>

                        <span >Enlace:</span> 
                        <input type="text" name="link" ng-model="link" required="true" >
                        <span ng-show="!form_links.$pristine && form_links.link.$error.required">Campo requerido.</span>

                        <button id="btnAddLink" ng-click="addLink();" ng-disabled="!form_links.$valid">Adicionar</button>
                    </form>
                </div> 

                <table border="1">
                    <tr>
                        <th>Titulo</th>
                        <th>Descripción</th>
                        <th>Enlace</th>
                        <th>Accion</th>
                    </tr>
                    <tr ng-repeat="arrayLinks in links">
                        <td>{{arrayLinks.title}}</td>
                        <td>{{arrayLinks.description}}</td>
                        <td>{{arrayLinks.link}}</td>
                        <td>
                            <a style="cursor: pointer" ng-click="removeLink($index, arrayLinks.lid);">Borrar</a>
                        </td>
                    </tr>
                </table>

            </div>
        </div>

    </body>
</html>
