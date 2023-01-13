<html>
<head>
    <meta charset="utf-8">

    <title>Habbo: <?= User::userData('username') ?></title>

    <link rel="stylesheet" type="text/css" href="/templates/<?php echo $config['skin']; ?>/css/style.css">
    <title><?= $config['hotelName'] ?>: <?= User::userData('username') ?></title>
</head>

<style type="text/css">
	.news-list{margin-bottom: 0.6rem; list-style: none; } .news-list li a:after{display: none; }
</style>

<body>
	
	<?php include "templates/Header.php"; ?>

	<div class="container">
		<div class="row">
        <div class="col-4">
            <div id="content-box">
                <div class="title-box png20">
                    <div class="title">News</div>
                </div>
                <div class="png20">

	            	<?php 
	            	$la_id = $_GET['id'];
			        $sql = $dbh->prepare("SELECT * FROM cms_news WHERE id='$la_id' LIMIT 1");
			        $sql->execute();
			        while ($news = $sql->fetch()){
	            	?>
	                    <ul class="news-list" style="margin-bottom: 2rem;">
	                        <li><a class="selected" href="/news/<?= filter($news['id']) ?>"><?= filter($news['title']) ?></a></li>
	                    </ul>
	                <?php } ?>

	            	<?php 
			        $sql1 = $dbh->prepare("SELECT * FROM cms_news ORDER BY id");
			        $sql1->execute();
			        while ($news1 = $sql1->fetch()){
	            	?>
	                    <ul class="news-list">
	                        <li><a href="/news/<?= filter($news1['id']) ?>"><?= filter($news1['title']) ?></a></li>
	                    </ul>
	                <?php } ?>
                </div>
            </div>
        </div>

      <?php

        $la_id = $_GET['id'];

        $sql = $dbh->prepare("SELECT * FROM cms_news WHERE id='$la_id' LIMIT 1");
        $sql->execute();
        while ($news = $sql->fetch()){
      ?>

        <div class="col-8">
            <div id="content-box">
                <div class="png20">
                    <?= html_entity_decode($news['longstory']) ?>
                </div>
            </div>
        </div>

     <?php } ?>
		
     <?php include "templates/Footer.php"; ?>
     
        </div>
    </div>
    </body>
    <script type="text/javascript" src="js/vendor.js"></script>
    <script type="text/javascript" src="js/app.js"></script>
</html>