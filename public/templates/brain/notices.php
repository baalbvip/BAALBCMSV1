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

      <style type="text/css">
        .ver{
          width: 13rem !important;
          height: 13rem !important; 
        }

        .ver:nth-of-type(2) {
          width: 18rem !important;
          height: 14rem !important;
        }

        .ver:nth-of-type(4) {
          width: 18rem !important;
          height: 14rem !important;
        }

        .ver:nth-of-type(6) {
          width: 18rem !important;
          height: 14rem !important;
        }

        .ver:nth-of-type(8) {
          width: 18rem !important;
          height: 14rem !important;
        }

      </style>

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

            <span class="title">Últimas 8 noticias</span>
            <div class="news" style="flex-wrap: wrap; width: 41rem;">
              <?php
                $sql = $dbh->prepare("SELECT id,title,image,shortstory FROM cms_news ORDER BY id DESC LIMIT 8");
                $sql->execute();
                while ($news = $sql->fetch())
                { ?>

              <div onclick="location.href='/news/<?= filter($news["id"]) ?>'" class="item ver" style="background-image: url('<?= filter($news["image"]) ?>')">
                <div class="item-hover">
                  <span class="span"><?= filter($news["title"]) ?></span>
                </div>
              </div>

               <?php } ?>
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
