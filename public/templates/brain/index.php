<!DOCTYPE html>
<html lang="tr" dir="ltr">
	<head>
		<meta name="robots" content="index,follow,all"/>
		<meta name="description" content="Maak vrienden, doe mee en val op!"/>
		<meta name="keywords" content="<?= $config['hotelName'] ?>, <?= $config['hotelName'] ?>hotel, <?= $config['hotelName'] ?> hotel, virtueel, wereld, sociaal netwerk, gratis, community, avatar, chat, online, tiener, roleplaying, doe mee, sociaal, groepen, forums, veilig, speel, games, online, vrienden, tieners, zeldzaams, zeldzame meubi, verzamelen, maak, verzamel, kom in contact, meubi, meubeks, huisdieren, kamer inrichten, delen, uitdrukking, badges, hangout, muziek, beroemdheid, VIP-visits, celebs, mmo, mmorpgs, massive multiplayer"/>
		<meta name="build" content="AuroraCMS - RELEASE-02082016"/>
		<title><?= $config['hotelName'] ?> Hotel: Beleef het plezier!</title>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
		<meta name="viewport" content="width=device-width, initial-scale=1">
	</head>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="../../templates/brain/assets/css/index-style.css">
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">

			<script type="text/javascript">function siteUrl() {return "";}function showReg() {window.location = siteUrl() + "register";}  function fblogin() {window.location = siteUrl() + "/system/app/plugins/fblogin/fbconfig.php";}</script>

			<?php User::Login(); ?>	
  <body>
    <div id="container">
      <div class="wrapper">
        <div class="sidebar">
          <button onclick="location.href='/register'" class="button register">Register</button>
		  <span class="text"></span>
        </div>

        <form class="content animate__animated animate__fadeInRight" method="post">
        	<div class="pfeil"></div>
          <img class="logo" src="../../templates/brain/assets/img/logo.png">
          <span class="online"><b><?= Game::usersOnline() ?> <?= $config['hotelName'] ?>'s</b> Online!</span>
			<input class="text" type="text" id="username" name="username" placeholder="<?php echo $lang['Iusername']; ?>">


			<input class="text" type="password" id="password" name="password" placeholder="<?php echo $lang['Ipassword']; ?>">

				<a style="text-decoration : none" href="#">
					<div class="buttonforgot">
						<div class="buttonforgottxt">Forgot password</div>
					</div>
				</a>

			<button type="submit" class="button submit" name="login" style="background-color: #58ce5d;">
				<img src="/templates/brain/style/images/login/go.gif">
				</div>
			</button>
        </form>

					<!-- Placed at the end of the document so the pages load faster -->
					<script src="../../templates/brain/style/js/jquery.min.js"></script>

      </div>
    </div>
  </body>
</html>
