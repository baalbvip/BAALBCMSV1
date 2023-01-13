<!--
Developed by
 _   _   _   _   _____   _____  __    __  _   __   _  
| | | | | | | | /  ___| /  _  \ \ \  / / | | |  \ | |
| |_| | | | | | | |     | | | |  \ \/ /  | | |   \| |
|  _  | | | | | | |  _  | | | |   \  /   | | | |\   |
| | | | | |_| | | |_| | | |_| |   / /    | | | | \  |
|_| |_| \_____/ \_____/ \_____/  /_/     |_| |_|  \_|

-----------------------------------------------------
      EDITADO Y LANZADO CON <3 by SrThrone
          www.youtube.com/SrThroneIT
-----------------------------------------------------
-->

<!DOCTYPE html>
<html lang="tr" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="../../templates/brain/assets/css/index-style.css">
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
    <link href="../../templates/brain/style/css/avatargenerate.css" rel="stylesheet" />
    <title>Habbo Hotel: Register</title>
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
    <div id="container">
      <div class="wrapper">

	    <div class="content animate__animated animate__fadeInLeft" style="display: inline-grid;justify-content: center;overflow: auto;padding: 0rem 4rem;max-height: 77rem;align-content: space-between;align-items: center;justify-items: stretch;">
      <img class="logo" src="../../templates/brain/assets/img/logo.png" style="margin: 0 auto;">

		  <span class="online" style="width: 100%;"><b><?= Game::usersOnline() ?> <?= $config['hotelName'] ?>'s</b> Online!</span>

        <div class="panel panel-success" style="width: 100%;float: left;padding: 8px;">
            <fieldset style="border:none;padding: 0.6rem 0rem;">
              <legend><?php echo $lang['Rregister']; ?></legend>

              <span class="error" id="top"></span>
              
              <div class="form-group">
                <label for="inputUsername" class="col-lg-4 control-label"><?php echo $lang['Rname']; ?></label>
                <div class="col-lg-8">
                  <input type="text" class="text" style="width: 100%;" name="username" id="username" onkeyup="checkUsernameOrEmail(this.value, 'username')" placeholder="<?php echo $lang['Rname']; ?>...">
                  <i class="glyphicon glyphicon-user form-control-feedback" style="right: 10px;"></i>
                </div>
              </div>
              <div class="form-group">
                  <input type="hidden" class="text" style="width: 100%;" name="motto" id="motto" placeholder="<?php echo $lang['Rmotto']; ?>" value="<?= $config['startMotto'] ?>">
                  <i class="glyphicon glyphicon-star form-control-feedback" style="right: 10px;"></i>
              </div>
              <div class="form-group">
                <label for="inputEmail" class="col-lg-4 control-label"><?php echo $lang['Remail']; ?></label>
                <div class="col-lg-8">
                  <input type="text" class="text" style="width: 100%;" name="email" id="email" onkeyup="checkUsernameOrEmail(this.value, 'email')"  placeholder="<?php echo $lang['Remail']; ?>...">
                  <i class="glyphicon glyphicon-envelope form-control-feedback" style="right: 10px;"></i>
                </div>
              </div>
              <div class="form-group">
                <label for="inputPassword" class="col-lg-4 control-label"><?php echo $lang['Rpassword']; ?></label>
                <div class="col-lg-8">
                  <input type="password" class="text" style="width: 100%;" name="password" id="password"  onkeyup="checkPasswords(this.value, 'password')" placeholder="<?php echo $lang['Rpassword']; ?>...">
                  <i class="glyphicon glyphicon-lock form-control-feedback" style="right: 10px;"></i>
                </div>
              </div>
              <div class="form-group">
                <label for="inputPassword2" class="col-lg-4 control-label"><?php echo $lang['Rrepeatpassword']; ?></label>
                <div class="col-lg-8">
                  <input type="password" class="text" style="width: 100%;" name="password_repeat" id="password_repeat"  onkeyup="checkPasswords(this.value, 'password_repeat')"  placeholder="<?php echo $lang['Rrepeatpassword']; ?>...">
                  <i class="glyphicon glyphicon-lock form-control-feedback" style="right: 10px;"></i>
                </div>
              </div>

              <div class="form-group">
                  <input type="hidden" class="text" style="width: 100%;" name="referrer" id="referrer" value="<?= $userref; ?>" onkeyup="checkUsernameOrEmail(this.value, 'referrer')"  placeholder="">
              </div>

              <div class="form-group" style="display: none;">
                <input type="hidden" class="text" style="width: 100%;" id="avatar" name="avatar" value="<?php echo $hotel['avatar']; ?>">
              </div>

              <div style="clear:both;"></div>

              <center>
              <div class="form-group" style="text-align: right;">
              <div class="col-lg-8 col-lg-offset-4">
                <button type="submit" name="register" id="registerSubmit" class="button"><?php echo $lang['Rregister']; ?></button>
              </div>
            </div></center>
          </fieldset>

            <script src="../../templates/brain/style/js/jquery.avatargenerate.js?v=17" type="text/javascript"></script>
            <script src="../../templates/brain/style/js/jquery.avatargenerate.min.js?v=17" type="text/javascript"></script>

            <!-- Placed at the end of the document so the pages load faster -->
            <script src="../../templates/brain/style/js/jquery.min.js"></script>
            <script src="../../templates/brain/js/register.js?v=<?= rand(1,100011111) ?>"></script>

        </div>

    </div>

        <div class="sidebar" style="background: none;">
          <button onclick="location.href='/index'" class="button register">Login</button>
        </div>
      </div>
    </div>
  </body>
</html>
