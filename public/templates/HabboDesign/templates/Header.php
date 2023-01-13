<?php include "configuraciones.php"; ?>

<div id="header-content">

		<div class="container">
			<div class="row">
				<div class="col-12">
					<div class="hotel"></div>

					<div class="online-count-box"><b><?= Game::usersOnline() ?></b>Habbos online</div>
					
					<div class="content-botones">

						<a style="top: 2rem;right: -1.5rem;" href="clienthtml" class="btn green big check-in-header">Jugar (recomendado)</a>
						<?php if($hotel['cliente_flash'] == true){ ?>

							<a style="top: 6rem; background: #ffcc02;" href="client" class="btn green big check-in-header">Jugar Client flash </a>

						<?php } ?>

					</div>
				</div>
			</div>
		</div>
		
	</div>
	<div id="header-menu">
		<div class="container">
			<div class="row">

			    <?php
                 if (User::userData('rank') > '3')
                { ?>

				<div class="col-4">
					<ul class="user-menu">
						<li>
							<a href="/me">
								<div class="user-avatar-menu" style="background-image:url(http://habbo.com/habbo-imaging/avatarimage?figure=<?= User::userData('look') ?>&head_direction=3&gesture=sml)"></div><?= User::userData('username') ?><span><i class="far fa-angle-down"></i></span>
							</a>
                            <ul class="user-subnavi">
                                <li><a href="/profile/<?= User::userData('username') ?>">Mi perfil</a></li>
                                <li><a href="/settings">Configuraciones</a></li>
                                <li><a href="/logout" class="logout">Cerrar sesión</a></li>
                            </ul>
						</li>
					</ul>
				</div>

				<div class="col-2">
					<ul class="user-menu">
						<li><a href="/adminpan/dash" style="color: #ff8802;">Housekeeping</a></li>
					</ul>
				</div>
				<?php } else { ?>

				<div class="col-4">
					<ul class="user-menu">
						<li>
							<a href="/me">
								<div class="user-avatar-menu" style="background-image:url(http://habbo.com/habbo-imaging/avatarimage?figure=<?= User::userData('look') ?>&head_direction=3&gesture=sml)"></div><?= User::userData('username') ?><span><i class="far fa-angle-down"></i></span>
							</a>
                            <ul class="user-subnavi">
                                <li><a href="/profile/<?= User::userData('username') ?>">Mi perfil</a></li>
                                <li><a href="/settings">Configuraciones</a></li>
                                <li><a href="/logout" class="logout">Cerrar sesión</a></li>
                            </ul>
						</li>
					</ul>
				</div>

				<?php } ?>

				<div class="col-2">
					<?php if ($cms['mostrar_logo'] == "SI"){  ?>
						<a href="\" class="logo"></a>
					<?php } else { ?>
						<a href="\" class="logo" style="display: none;"></a>
					<?php } ?>
				</div>

				<div class="col-4">
					<ul class="navigation">
						<li>
							<a href="community">Comunidad<span><i class="far fa-angle-down"></i></span></a>

							<ul class="subnavi">
								<li><a href="/news">Noticias</a></li>
								<li><a href="/staffs">Equipo</a></li>
								<li><a href="/photos">Fotos</a></li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>