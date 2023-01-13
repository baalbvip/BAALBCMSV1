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

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
  <script src="https://code.jquery.com/jquery-latest.js"></script>
  <script type="text/javascript">
        $(document).ready(function(e) {
            $.ajaxSetup({
                cache:true
      });
            setInterval(function() {
                $('#onlinecount').load('/onlinecount');
      }, 1500);
            $( "#onlinecount").click(function() {
        $('#onlinecount').load('/onlinecount');
      });
    });
  </script>
  <script type="text/javascript">
        $(document).ready(function(e) {
            $.ajaxSetup({
                cache:true
      });
            setInterval(function() {
                $('#roomcount').load('/roomcount');
      }, 5500);
            $( "#roomcount").click(function() {
        $('#roomcount').load('/roomcount');
      });
    });
  </script>

  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="../../templates/brain/assets/css/style.css">
    <title><?= $config['hotelName'] ?>: <?= User::userData('username') ?></title>
  </head>
<?php 
  include_once 'includes/alerts.php';
?>
  <body>
    <div id="container">
      <div class="wrapper">

      <?php 
        include_once 'includes/header.php';
      ?>


        <div class="content">
          <div class="wrapper">

            <div class="hotel">
              <button onclick="location.href='/clienthtml'" class="animate__animated animate__headShake">
                <span class="icon"></span>Jugar (recomendado)
              </button>
              <?php if($hotel['cliente_flash'] == true){ ?>
              <button onclick="location.href='/client'" class="animate__animated animate__headShake">
                <span class="icon"></span>Flash
              </button>
              <?php } ?>
            </div>

			<div class="center">
				<div class="columleft" style="width: 100%;">
					<div class="box">
						<div class="title red">
							Error 404
						</div>
						<div class="mainBox" style="float;left">
							<div class="boxHeader"></div>
							La pagina a la que estás accediendo no existe
						</div>
					</div>
				</div>
				<?php
					include_once 'includes/footer.php';
				?>
			</div>

			</div>
		</div>
	</div>
</div>
</body>
</html>			