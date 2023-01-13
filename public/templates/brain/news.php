<!--
Developed by
 _   _   _   _   _____   _____  __    __  _   __   _  
| | | | | | | | /  ___| /  _  \ \ \  / / | | |  \ | |
| |_| | | | | | | |     | | | |  \ \/ /  | | |   \| |
|  _  | | | | | | |  _  | | | |   \  /   | | | |\   |
| | | | | |_| | | |_| | | |_| |   / /    | | | | \  |
|_| |_| \_____/ \_____/ \_____/  /_/     |_| |_|  \_|

-----------------------------------------------------
        EDITADO Y LANZADO CON AMOR by SrThrone
              www.youtube.com/SrThroneIT
-----------------------------------------------------
-->
<!DOCTYPE html>
<html lang="tr" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="../../templates/brain/assets/css/style.css">
    <title><?= $config['hotelName'] ?>: <?= User::userData('username') ?></title>
    <title>Habbo Hotel: Title</title>
  </head>


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

            <div class="content-noticias" style="height: 6rem; overflow: hidden; margin-bottom: 1rem;">
              <div class="news">
                <?php
                  $sql = $dbh->prepare("SELECT id,title,image,shortstory FROM cms_news ORDER BY id DESC LIMIT 4");
                  $sql->execute();
                  while ($news = $sql->fetch())
                  { ?>

                <div onclick="location.href='/news/<?= filter($news["id"]) ?>'" class="item" style="background-image: url('<?= filter($news["image"]) ?>'); height: auto; width: 10rem; margin: 0px 10px 20px 0px;">
                  <div class="item-hover">
                    <span class="span"><?= filter($news["title"]) ?></span>
                  </div>
                </div>

                 <?php } ?>
              </div>
            </div>

          <?php

            $la_id = $_GET['id'];

            $sql = $dbh->prepare("SELECT * FROM cms_news WHERE id='$la_id' LIMIT 1");
            $sql->execute();
            while ($news = $sql->fetch()){
          ?>

    	    <div class="read">
    	      <span class="title"><?= filter($news['title']) ?></span>
      		  <div class="divider"></div>
      		  <div class="leer" style="padding: 0.7rem 0.6rem; margin-top: 10px;"><?= html_entity_decode($news['longstory']) ?></div>
    	    </div>

         <?php } ?>

            <?php
              include_once 'includes/footer.php';
            ?>

          </div>
      </div>
    </div>
  </div>
  </body>

</html>