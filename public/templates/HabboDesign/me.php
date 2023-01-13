<html>
<head>
    <meta name="robots" content="index,follow,all"/>
    <meta name="description" content="Maak vrienden, doe mee en val op!"/>
    <meta name="build" content="AuroraCMS - RELEASE-02082016"/>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <title><?= $config['hotelName'] ?>: Mi perfil</title>

    <link type="text/css" href="templates/<?php echo $config['skin']; ?>/css/style.css" rel="stylesheet">
</head>

<body>
	
	<?php include "templates/Header.php"; ?>

	<div class="container">
		<div class="row">
			<div class="col-8">
				<div id="news-content">

	          	<?php
	            $sql = $dbh->prepare("SELECT * FROM cms_news ORDER BY id DESC");
	            $sql->execute();
	            while ($news = $sql->fetch()){
	            ?>

					<div class="news-article show" style="background-image:url(<?= filter($news["image"]) ?>)">
						<div class="shadow"></div>

						<div class="news-content">
							<div class="news-title"><?= filter($news["title"]) ?></div>
							<div class="news-short-text"><?= filter($news["shortstory"]) ?></div>
						</div>

						<div class="details-box">
							<div class="back-news"><i class="fal fa-angle-left"></i></div>

							<div class="authors-details">
								<div class="written-by">
						          	<?php
						          	$autor = filter($news["author"]);
						            $sql2 = $dbh->prepare("SELECT * FROM users WHERE id='$autor'");
						            $sql2->execute();
						            while ($news2 = $sql2->fetch()){ ?>

									<b>Publicado por:</b>
									<span><?= filter($news2["username"]) ?></span>

									<?php } ?>
								</div>
							</div>

							<a href="news/<?= filter($news['id']) ?>" class="btn green news-slider-btn">Ver más</a>

							<div class="next-news"><i class="fal fa-angle-right"></i></div>
						</div>
					</div>
				<?php } ?>
					
				</div>
			</div>
			<div class="col-4">
				<iframe src="https://discordapp.com/widget?id=570313601563492353&theme=dark" width="340" height="250" allowtransparency="true" frameborder="0"></iframe>
			</div>
			<div class="col-7">
				<div id="content-box">
					<div class="title-box png20">
						<div class="title">Salas favoritas</div>
						<div class="desc">Estás son las 5 salas del hotel con más likes</div>
					</div>
					<div class="png20">
			          	<?php
			            $sql = $dbh->prepare("SELECT * FROM rooms ORDER BY score DESC LIMIT 5");
			            $sql->execute();
			            while ($news = $sql->fetch()){ ?>

						<div class="campaigns">
							<a>
								<div class="col-4 img" style="background-image:url(templates/<?php echo $config['skin']; ?>/img/profile/room-thumbnail.png)"></div>
								<div class="col-4 details">
									<div class="title"><?= filter($news["name"]) ?></div>
									<div class="desc" style="margin-top: 0.2rem;"><?= filter($news["description"]) ?></div>
									<div class="desc" style="margin-top: 0.2rem;"><?= filter($news["owner_name"]) ?></div>
								</div>
							</a>
						</div>

						<?php } ?>
					</div>
				</div>
			</div>
			<div class="col-5">
				<div id="content-box" style="max-height:300px">
					<div class="title-box png20">
						<div class="title">Nuestras redes sociales</div>
						<div class="desc">No puedes perderte nuestras publicaciones, siguenos en nuestras redes</div>
					</div>
					<div class="png20" style="padding: 0rem 1rem;margin-bottom: 0.5rem;">
							<a href="" style="display: contents;">
							<div class="col-12 event" style="background-image:url(templates/HabboDesign/img/profile/facebook.png);height: 2rem;background-repeat: no-repeat;background-position: revert;background-size: contain; margin-bottom: 0.5rem;">
							</div>
							</a>
							<a href="" style="display: contents;">
							<div class="col-12 event" style="background-image:url(templates/HabboDesign/img/profile/instagram.png);height: 2rem;background-repeat: no-repeat;background-position: revert;background-size: contain;">
							</div>
							</a>
					</div>
				</div>

				<?php if ($cms['video_youtube'] == "SI"){ ?>
					<div id="content-box" style="max-height:400px">
						<div class="title-box png20">
							<div class="title">¿No sabes cómo jugar?</div>
							<div class="desc">Mira nuestro vídeo tutorial</div>
						</div>
						<div class="png20" style="padding: 0rem 1rem;margin-bottom: 0.5rem;width: 100%;display: flex;flex-direction: row;flex-wrap: nowrap;align-items: baseline;align-content: stretch;justify-content: space-between;">
							<video src=""></video>
						</div>
					</div>
				<?php } ?>
			</div>

			<?php include "templates/Footer.php"; ?>

        </div>
    </div>
    </body>
    <script type="text/javascript" src="js/vendor.js"></script>
    <script type="text/javascript" src="js/app.js"></script>
</html>