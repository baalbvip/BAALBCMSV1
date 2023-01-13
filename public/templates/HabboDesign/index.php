<html>
    <head>
        <meta name="robots" content="index,follow,all"/>
        <meta name="description" content="Maak vrienden, doe mee en val op!"/>
        <meta name="build" content="AuroraCMS - RELEASE-02082016"/>

        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <title><?= $config['hotelName'] ?>: World Connected</title>

        <link type="text/css" href="/templates/<?php echo $config['skin']; ?>/css/index.css" rel="stylesheet">

        <script type="text/javascript">function siteUrl() {return "";}function showReg() {window.location = siteUrl() + "register";}  function fblogin() {window.location = siteUrl() + "/system/app/plugins/fblogin/fbconfig.php";}</script>

        <?php User::Login(); ?> 

        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>

    <?php include "templates/configuraciones.php"; ?>

    <body>
        <!--<div class="error-msg">Die Felder müssen ausgefüllt sein.</div>-->
		
        <div class="hero">
            <div class="hotel"></div>
        </div>

        <div id="header-content">
            <div class="container">
                <div class="row">

                    <?php if($index['mostrar_logo'] == "SI"){ ?> 
                    <div class="col-md-12">
                        <div class="logo" style="background: url(<?php $index['logo_url']; ?>);"></div>
                        <div class="online-count"><b><?= Game::usersOnline() ?></b> Habbos online</div>
                    </div>
                    <?php } else { ?> 
                    <div class="col-md-12">
                        <div class="logo"></div>
                        <div class="online-count"><b><?= Game::usersOnline() ?></b> Habbos online</div>
                    </div>
                    <?php } ?>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row" style="margin-bottom: 12rem;">
                <div class="col-md-5">
                    <div class="login-position">
                        <h2>Inicia sesión ahora</h2>
                        <form method="post">
                            <label for="login-username">Nombre de usuario</label>
                            <input type="text" name="username" id="username">

                            <label for="login-password">Contraseña</label>
                            <input type="password" name="password" id="password">

                            <button style="width: 100%;" type="submit" class="btn big green login-button" name="login">Entrar</button>
                        </form>
                        <div class="clear"></div>
                        <div class="row">
                            <div class="col-md-12">
                                <p>¿Aún no te haz registrado?</p>
                            </div>
                            <div class="col-md-12">
                                <a href="register" class="btn big orange register-button">Quiero registrarme ahora</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="clear"></div>
            
            <div class="row">
                <?php include "templates/Footer.php"; ?>
            </div>
        </div>
    </body>
</html>