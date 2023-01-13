
<html>
    <head>
        <meta charset="utf-8">

        <title>Habbo: Wähle dein Geschlecht und dein Geburtsdatum!</title>

        <link type="text/css" href="templates/<?php echo $config['skin']; ?>/css/registration.css" rel="stylesheet">
    </head>

<style>
  .error {
    text-align: center;
    font-size: 13px;
    background: #f44336;
    display: none;
    width: 100%;
    color: #fff;
    padding: 0 10px;
    border-radius: 2px;
    margin-bottom: 8px;
    line-height: 40px;
  }
</style>

<?php
  if(isset($_GET['userref'])) {
    $userref = $_GET['userref'];
  }
  else{
    $userref = null;
  }
?>

    <body>
        <div class="main">
            <div class="logo"></div>
            <div class="content-box" id="step-2">
                <div class="title-box">
                    <div class="title">Registrate ahora y forma parte</div>
                    <div class="steps"></div>
                </div>

                <div class="png20">
                    <form method="post">

                        <span class="error" id="top">
                            <div class="alert">Du musst eine E-Mail Adresse angeben.</div>
                        </span>
                        
                            
                        <label for="register-username">Nombre de usuario</label>
                        <input type="text" id="username" name="username" onkeyup="checkUsernameOrEmail(this.value, 'username')">
                        <p class="desc">Ingresa el nombre de usuario por el que serás conocido en todo el hotel.</p>

                        
                        <label for="register-mail">Correo electrónico</label>
                        <input type="text" id="email" name="email" onkeyup="checkUsernameOrEmail(this.value, 'email')">
                        <p class="desc">Ingresa un correo electrónico existente.</p>

                        <label for="register-password">Contraseña</label>
                        <input type="password" id="password" name="password" onkeyup="checkPasswords(this.value, 'password')">
                        <p class="desc">Coloca una contraseña de seguridad a tu cuenta.</p>
                        
                        <label for="register-password-repeat">Repite tu contraseña</label>
                        <input type="password" id="password_repeat" name="password_repeat" onkeyup="checkPasswords(this.value, 'password_repeat')">
                        <p class="desc">Repite la contraseña que colocaste a tu cuenta</p>

                        <label for="register-password-repeat">Referido</label>
                        <input type="text" id="referrer" name="referrer" onkeyup="checkUsernameOrEmail(this.value, 'referrer')">
                        <p class="desc">¿Fuiste invitado por alguién al hotel? coloca su nombre</p>

                          <div class="form-group" style="display: none;">
                            <input type="hidden" class="text" style="width: 100%;" id="avatar" name="avatar" value="<?php echo $hotel['avatar']; ?>">
                          </div>

                        <a href="/index" class="btn red back-register">No quiero registrarme</a>
                        <button type="submit" class="btn green next-register" name="register" id="registerSubmit">Registrarme</button>

                        <div style="clear:both"></div>
                    </form>
                </div>
            </div>
        </div>
    </body>
            <!-- Placed at the end of the document so the pages load faster -->
            <script src="../../templates/<?php echo $config['skin']; ?>/js/jquery.min.js"></script>
            <script src="../../templates/<?php echo $config['skin']; ?>/js/register.js?v=<?= rand(1,100011111) ?>"></script>

    <script type="text/javascript" src="js/vendor.js"></script>
    <script type="text/javascript" src="js/app.js"></script>
</html>