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
<html lang="es" dir="es">

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
          <div class="wrapper" style="overflow: auto;">
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

            <span class="title">Últimas 2 noticias</span>
            <div class="news">
              <?php
                $sql = $dbh->prepare("SELECT id,title,image,shortstory FROM cms_news ORDER BY id DESC LIMIT 2");
                $sql->execute();
                while ($news = $sql->fetch())
                { ?>

              <div onclick="location.href='/news/<?= filter($news["id"]) ?>'" class="item" style="background-image: url('<?= filter($news["image"]) ?>')">
                <div class="item-hover">
                  <span class="span"><?= filter($news["title"]) ?></span>
                </div>
              </div>

               <?php } ?>
            </div>

            <div class="staffs" style="margin-bottom: 1rem;">
              <span class="title" style="margin-bottom: 1.5rem; margin-top: 1rem;">Usuario de la semana</span>
              <div class="item" style="display: flex;flex-wrap: wrap;width: 105%;overflow: revert;">

                <?php
	                $sql = $dbh->prepare("SELECT * FROM uotw ORDER BY userid DESC LIMIT 3");
	                $sql->execute();
	                while ($news = $sql->fetch()){

	                	$viendo_id = filter($news["userid"]);

		                $sql2 = $dbh->prepare("SELECT * FROM users WHERE id='$viendo_id'");
		                $sql2->execute();
		                while ($news2 = $sql2->fetch())
                { ?>

                  <div class="staff" style="width: 15rem;">
                    <span class="avatar" style="background-image: url('https://habbo.com/habbo-imaging/avatarimage?figure=<?= filter($news2["look"]) ?>&direction=2&head_direction=2&size=l'); width: 30%;"></span>
                    <div class="details" style="width: 70%;">
                      <span class="username" style="color: #383838;font-size: 13px;text-align: center;margin-bottom: 0.3rem;"><?= filter($news2["username"]) ?></span>
                      <span class="rank" style="color: #383838; font-size: 13px; text-align: center;"><?= filter($news["text"]) ?></title>
                    </div>
                  </div>

                <?php }} ?>

              </div>
            </div>

            <?php
              include_once 'includes/footer.php';
            ?>

          </div>
        </div>

      </div>
    </div>
  </body>
</html>
