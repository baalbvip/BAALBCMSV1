<html>
<head>
    <meta charset="utf-8">

    <title><?= $config['hotelName'] ?>: Mi perfil</title>

    <link type="text/css" href="templates/<?php echo $config['skin']; ?>/css/style.css" rel="stylesheet">

</head>

<body>
	
    <?php include "templates/Header.php"; ?>

	<div class="container">

          <?php
            $sql1 = $dbh->prepare("SELECT * FROM ranks WHERE id>'1' AND id!='10' ORDER BY id DESC");
            $sql1->execute();
            while ($news1 = $sql1->fetch()){
            ?>

            <div class="row">
                <div class="col-12">
                    <div id="title-headline"><?= filter($news1["name"]) ?></div>
                </div>
            </div>

                <?php
                  $sql2 = $dbh->prepare("SELECT * FROM users WHERE rank='".filter($news1["id"])."'");
                  $sql2->execute();
                  while ($news2 = $sql2->fetch()){ 
                    if(filter($news2["online"]) == 1){$status="online";}else{$status="offline";}
                ?>
                    <div class="row">
                        <div class="col-4">
                            <a href="/profile/<?= filter($news2["username"]) ?>" class="staff-box">
                                <div class="staff-header"><div class="header"></div><div class="overlay"><div class="work"><?= filter($news1["name"]) ?></div><div class="username"><?= filter($news2["username"]) ?></div></div></div>
                                <div class="avatarimage" style="background-image: url('https://habbo.com/habbo-imaging/avatarimage?figure=<?= filter($news2["look"]) ?>&direction=2&head_direction=2&size=l');"></div>
                                <div class="clear"></div>
                                <div class="png">
                                    <div class="motto"><?= filter($news2["motto"]) ?></div>
                                    <div class="online-status <?php echo $status; ?>"><div class="dot"></div></div>
                                    <div class="clear"></div>
                                </div>
                                <div class="clear"></div>
                            </a>
                        </div>
                    </div>
            <?php } ?>

            <?php } ?>


            <div class="row">
            <?php include "templates/Footer.php"; ?>
            </div>
    </div>

    </body>
    <script type="text/javascript" src="js/vendor.js"></script>
    <script type="text/javascript" src="js/app.js"></script>
</html>