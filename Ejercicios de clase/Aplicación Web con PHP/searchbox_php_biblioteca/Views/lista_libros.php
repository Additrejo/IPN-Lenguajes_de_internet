
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Aplicacion Web</title>

    <link rel="stylesheet" href="../Resources/css/bootstrap.min.css">

</head>
 
<body onload="lista_libros('');">
    <!--Barra de Navegacion-->
    <nav class="navbar navbar-default">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                <span class="sr-only">Cambiar Navegacion</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a href="#" class="navbar-brand">AplicacionWeb</a>
        </div>

        
    </nav>
    <div class="container">
         <div class="row form-horizontal">
            <ul class="nav nav-tabs">
              <li class="active"><a href="#tab_consultar" data-toggle="tab">Tab A</a></li>
              <li><a href="#tab_registrar" data-toggle="tab">Tab B</a></li>
              
            </ul>
        </div>
        </br>
        <div class="tab-content">
            <div class="tab-pane active" id="tab_consultar">
                <div class="row form-horizontal">
                    <div class="panel panel-default">
                        <div class="panel-heading">Libros Existentes</div>
                        <div class="panel-body">
                            <div class="form-group">
                                <div class="col-xs-4  text-right">
                                    <label for="buscar" class="control-label">Buscar:</label>
                                </div>
                                <div class="col-xs-4">
                                    <input  type="text" name="buscar" id="buscar" class="form-control" onkeyup="lista_libros(this.value);" placeholder="Ingrese nombre o descripcion"/>
                                </div>
                            </div>
                            <div class="form-group">
                                <div id="lista"></div> 
                            </div> 
                            
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="tab-pane" id="tab_registrar">
                <h4>Pane B</h4>
                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames
                    ac turpis egestas.</p>
            </div>
                
        </div><!-- tab content -->
    </div>
    <script src="../Resources/js/jquery-1.11.2.js"></script>
    <script src="../Resources/js/bootstrap.min.js"></script>
    <script src="../Resources/js/libros.js"></script>
</body>
</html>

    