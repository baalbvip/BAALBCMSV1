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
            <div class="users">
              <span class="title">¡Con más Creditos!</span>
              <div class="item" style="display: flex; flex-wrap: wrap; width: 41rem; overflow: hidden;">

                <?php
                  $sql = $dbh->prepare("SELECT * FROM users ORDER BY credits DESC LIMIT 3");
                  $sql->execute();
                  while ($datos = $sql->fetch())
                  { ?>

				<div class="user">
                  <span class="avatar" style="background-image: url('https://habbo.com/habbo-imaging/avatarimage?figure=<?= filter($datos["look"]) ?>&direction=2&head_direction=2&size=l');"></span>
                  <div class="details">
                    <span class="username"><?= filter($datos["username"]) ?></span>
                    <span class="rank"><b><?= filter($datos["credits"]) ?></b>&nbsp;Creditos</title>
                  </div>
                </div>

            	<?php } ?>

              </div>
            </div>
            <div class="users">
              <span class="title">¡Con más diamantes!</span>
              <div class="item">

                <?php
                  $sql = $dbh->prepare("SELECT * FROM users ORDER BY points DESC LIMIT 3");
                  $sql->execute();
                  while ($datos = $sql->fetch())
                  { ?>

				<div class="user">
                  <span class="avatar" style="background-image: url('https://habbo.com/habbo-imaging/avatarimage?figure=<?= filter($datos["look"]) ?>&direction=2&head_direction=2&size=l');"></span>
                  <div class="details">
                    <span class="username"><?= filter($datos["username"]) ?></span>
                    <span class="rank"><b><?= filter($datos["points"]) ?></b>&nbsp;Diamantes</title>
                  </div>
                </div>

            	<?php } ?>

              </div>
            </div>
            <div class="users">
              <span class="title">¡Con más Duckets!</span>
              <div class="item">

                <?php
                  $sql = $dbh->prepare("SELECT * FROM users ORDER BY pixels DESC LIMIT 3");
                  $sql->execute();
                  while ($datos = $sql->fetch())
                  { ?>

				<div class="user">
                  <span class="avatar" style="background-image: url('https://habbo.com/habbo-imaging/avatarimage?figure=<?= filter($datos["look"]) ?>&direction=2&head_direction=2&size=l');"></span>
                  <div class="details">
                    <span class="username"><?= filter($datos["username"]) ?></span>
                    <span class="rank"><b><?= filter($datos["pixels"]) ?></b>&nbsp;Duckets</title>
                  </div>
                </div>

            	<?php } ?>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
