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

          <?php
            $sql1 = $dbh->prepare("SELECT * FROM ranks WHERE id>'1' ORDER BY id DESC");
            $sql1->execute();
            while ($news1 = $sql1->fetch()){
            ?>

            <div class="staffs">
              <span class="title"><?= filter($news1["name"]) ?></span>
              <div class="item" style="display: flex;flex-wrap: wrap;width: 105%;overflow: revert;">
                <?php
                  $sql2 = $dbh->prepare("SELECT * FROM users WHERE rank='".filter($news1["id"])."'");
                  $sql2->execute();
                  while ($news2 = $sql2->fetch())
                  { ?>

                  <div class="staff">
                    <span class="avatar" style="background-image: url('https://habbo.com/habbo-imaging/avatarimage?figure=<?= filter($news2["look"]) ?>&direction=2&head_direction=2&size=l');"></span>
                    <div class="details">
                      <span class="username"><?= filter($news2["username"]) ?></span>
                      <span class="rank"><?= filter($news1["name"]) ?></title>
                    </div>
                  </div>

                <?php } ?>
              </div>
            </div>

          <?php } ?>


          </div>
        </div>
      </div>
    </div>
  </body>
</html>
