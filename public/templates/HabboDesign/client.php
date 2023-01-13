<?php
	staffCheck();
	Game::sso('client');	
	Game::homeRoom();	

	if($hotel['cliente_flash'] == false){
		header("Location: /me");
	}
?>
<html>
</body>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
	<html lang="es" dir="es">
	<title><?= $config['hotelName'] ?> - Game</title>
	<script src="/templates/HabboDesign/client/js/jquery-latest.js" type="text/javascript"></script>
	<script src="/templates/HabboDesign/client/js/jquery-ui.js" type="text/javascript"></script>
	<script src="/templates/HabboDesign/client/js/flashclient.js"></script>
	<script src="/templates/HabboDesign/client/js/flash_detect_min.js"></script>
	<script src="/templates/HabboDesign/client/js/client.js" type="text/javascript"></script>
	<link rel="stylesheet" href="/templates/HabboDesign/client/css/client.css?v=5" type="text/css">
	<link rel="stylesheet" href="/templates/HabboDesign/assets/client.css?v1" type="text/css">
	</head>
<body>

<style>
	            body{
	                line-height:normal!important;
	                background-color:#0E151C;
	                margin:auto;
	            }
	            #client-div, #client-ui{
	                display: block;       /* iframes are inline by default */
	                background: #000;
	                border: none;         /* Reset default border */
	                height: 100vh;        /* Viewport-relative units */
	                width: 100vw;
	            }
				#radio-content {
						overflow: hidden;
						display: flex;
						width: 20rem;
						height: 3.5rem;
						background: rgba(40,40,40,0.65);
						position: fixed;
						top: 10.5%;
						align-items: center;
						flex-direction: column;
						justify-content: center;
						border-radius: 0px 12px 12px 0px;
						display: none;
						border: solid 2px rgba(255,255,255,0.20);
						left: -5px;
					}
	            .radio-load{
	            	border-radius: 51px; background: #77c6d2; height: 38px;
	            }
				#laradio {
					top: 9px;
					float: left;
					margin-right: 0;
					left: 2px;
					padding-left: 6px;
					padding-right: 24px;
					width: 124px;
					user-select: none;
					cursor: pointer;
					padding-bottom: 4px;
					padding-top: 1rem;
				}
	            .clientOnlineBoxTxt{
	            	text-transform: uppercase;font-size: 11px;line-height: 0.1 !important;
	            }
        </style>

		<label for="checkRadio" onchange="javascript:abrirRadio()" class="clientOnlineBox" id="laradio">
			<div class="clientOnlineBoxTxt" id="onlinecount">Abrir radio</div>
			<img src="/templates/brain/client/images/radio.png" style="width:29px;height:28px;margin-left: 84px;margin-top: -17px;">
		</label>

		<!-- Contenido para mostrar el reproductor -->
			<div id="radio-content">
	            <audio id="radioload" class="radio-load" <?php if($hotel['cliente_radio_autoplay'] == true){ echo "autoplay=''"; } ?> controls="" width="180">
	                <source src="<?php echo $hotel['cliente_radio_url']; ?> type="audio/mpeg"><em>Este navegador no soporta HTML5, usa Firefox o Chromme</em>
	            </audio>
	        </div>

			<div class="form-check" style="display: none;">
			  <input style="display: none;" class="form-check-input" type="checkbox" name="checkRadio" id="checkRadio" onchange="javascript:abrirRadio()" />
			</div>

			<script type="text/javascript">
			const elemento = document.getElementById("radio-content");
			const isChecked = localStorage.getItem("checkRadio");
			 if (isChecked == 'true') {elemento.style.display = 'flex'; } 
			 else {elemento.style.display = 'none';}

			function abrirRadio(){check = document.getElementById("checkRadio"); if (check.checked) {elemento.style.display = 'flex'; } else {elemento.style.display = 'none';}}
			</script>
		<!-- Cierre contenido para mostrar el reproductor -->

		<?php
		if($hotel['onlineCounter'] == true){
		?>
		<div class="clientOnlineBox">
			<div class="clientOnlineBoxTxt" id="onlinecount"><small><b><?= Game::usersOnline() ?></b> <?= $config['hotelName'] ?>'s online</small></div>
			<img src="/templates/brain/client/images/onlineiconclient.png" style="width:29px;height:28px;ht; */position: absolute;margin-left: 130px;margin-top: -19px;">
		</div>
		<?php } ?>


	<center>
		<div id="client-ui">
			<div class="client" id="client"></div>
		</div>
		<script>
			var Client = new SWFObject("<?= $hotel['swfFolderSwf'] ?>", "client", "100%", "100%", "10.0.0");
			Client.addVariable("client.allow.cross.domain", "0"); 
			Client.addVariable("client.notify.cross.domain", "1");
			Client.addVariable("connection.info.host", "<?= $hotel['emuHost'] ?>");
			Client.addVariable("connection.info.port", "<?= $hotel['emuPort'] ?>");
			Client.addVariable("site.url", "<?= $config['hotelUrl'] ?>");
			Client.addVariable("url.prefix", "<?= $config['hotelUrl'] ?>"); 
			Client.addVariable("client.reload.url", "<?= $config['hotelUrl'] ?>/me");
			Client.addVariable("client.fatal.error.url", "<?= $config['hotelUrl'] ?>/me");
			Client.addVariable("client.connection.failed.url", "<?= $config['hotelUrl'] ?>/me");
			Client.addVariable("external.override.texts.txt", "<?= $hotel['external_Texts_Override'] ?>"); 
			Client.addVariable("external.override.variables.txt", "<?= $hotel['external_Variables_Override'] ?>"); 	
			Client.addVariable("external.variables.txt", "<?= $hotel['external_Variables'] ?>");
			Client.addVariable("external.texts.txt", "<?= $hotel['external_Texts'] ?>"); 
			Client.addVariable("external.figurepartlist.txt", "<?= $hotel['figuredata'] ?>"); 
			Client.addVariable("flash.dynamic.avatar.download.configuration", "<?= $hotel['figuremap'] ?>");
			Client.addVariable("productdata.load.url", "<?= $hotel['productdata'] ?>"); 
			Client.addVariable("furnidata.load.url", "<?= $hotel['furnidata'] ?>");
			Client.addVariable("use.sso.ticket", "1"); 
			Client.addVariable("sso.ticket", "<?= User::userData('auth_ticket') ?>");
			Client.addVariable("processlog.enabled", "0");
			Client.addVariable("client.starting", "<?= $config['hotelName'] ?> is loading...");
			Client.addVariable("flash.client.url", "<?= $hotel['swfFolder'] ?>/"); 
			Client.addVariable("flash.client.origin", "popup");
			Client.addVariable("ads.domain", "");
			Client.addVariable("diamonds.enabled", '<?= $hotel['diamonds.enabled'] ?>');
			Client.addParam('base', '<?= $hotel['swfFolder'] ?>/');
			Client.addParam('allowScriptAccess', 'always');
			Client.addParam('wmode', "opaque");
			Client.write('client');
			FlashExternalInterface.signoutUrl = "<?= $config['hotelUrl'] ?>/logout";
		</script>
	</center>
</body>
</html>
</center>
</div>
</head>