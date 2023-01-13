<html>
<head>
    <meta charset="utf-8">

    <?php 

    $username = $_GET['username'];

    $sql = $dbh->prepare("SELECT * FROM users WHERE username='$username' LIMIT 1");
    $sql->execute();
    while ($ver = $sql->fetch()){ ?>
    <title><?= $config['hotelName'] ?>: Profile <?php echo $username; ?></title>
    <link type="text/css" href="/templates/<?php echo $config['skin']; ?>/css/style.css" rel="stylesheet">
</head>

<body>

    <?php include "templates/Header.php"; ?>

	<div class="container">
		<div class="row">
        <link type="text/css" href="css/profile.css" rel="stylesheet">
        <div class="col-6">
            <div id="content-box" class="profile">
                <div class="bg"></div>
                <div class="overlay">
                    <div class="avatar-image" style="background-image:url(http://habbo.com/habbo-imaging/avatarimage?figure=hr-155-31.lg-275-82.hd-180-1391.ch-3323-73-1408.sh-295-1408&size=l&head_direction=3&gesture=sml)"></div>

                    <div class="username"><?= filter($ver["username"]) ?></div>
                    <div class="motto">Misión: <b><?= filter($ver["motto"]) ?></b></div>

                    <div class="last-online">Última vez: <?= filter($ver["last_online"]) ?></div>
                </div>
                <div style="clear:both"></div>
            </div>
        </div>


        <?php include "templates/Footer.php"; ?>
        
        </div>
    </div>
    
    <?php } ?>
    </body>

    <script type="text/javascript" src="js/vendor.js"></script>
    <script type="text/javascript" src="js/app.js"></script>
</html>