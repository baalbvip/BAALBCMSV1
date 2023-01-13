  <script src="https://localhost/templates/brain/js/jquery.min.js"></script>
  <script src="https://code.jquery.com/jquery-latest.js"></script>
  
       <div class="sidebar">
          <img class="logo" src="../../templates/brain/assets/img/logo.png">
          <div class="profile">
            <div class="avatar-content">
              <div class="background">
                <span class="avatar" style="background-image: url('https://habbo.com/habbo-imaging/avatarimage?figure=<?= User::userData('look') ?>&size=n&direction=3&head_direction=3&gesture=sml&action=wav');"></span>
              </div>
              <span class="username"><?= User::userData('username') ?></span>
              <div class="statics">
                <div class="item">
                  <span class="bold"><?= User::userData('credits') ?></span>
                  <span class="normal"><?= $lang["Mcredits"] ?></span>
                </div>
                <span class="divider-y"></span>
                <div class="item">
                  <span class="bold"><?= User::userData('vip_points') ?></span>
                  <span class="normal"><?= $lang["Mdiamond"] ?></span>
                </div>
                <span class="divider-y"></span>
                <div class="item">
                  <span class="bold"><?= User::userData('activity_points') ?></span>
                  <span class="normal"><?= $lang["Mduckets"] ?></span>
                </div>
              </div>
              <ul class="menu">

                <?php
                  if (User::userData('rank') > '3')
                  { ?>

                <li onclick="location.href='/adminpan/dash'">
                  <span class="icon" style="color: #22822d; stroke: #12653a;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></span>
                  <span class="title" style="color: #22822d;">Housekeeping</span>
                </li>

                <?php } ?>

                <li onclick="location.href='/me'">
                  <span class="icon"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span>
                  <span class="title">Inicio</span>
                </li>
                <li onclick="location.href='/notices'">
                  <span class="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path stroke-linecap="round" stroke-linejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/></svg></span>
                  <span class="title">News</span>
                </li>
                <li onclick="location.href='/staffs'">
                  <span class="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></span>
                  <span class="title">Staffs</span>
                </li>
                <li onclick="location.href='/leaders'">
                  <span class="icon"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span>
                  <span class="title">Leaders</span>
                </li>

                <li onclick="location.href='/logout'">
                  <span class="icon"><svg class="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg></span>
                  <span class="title">Logout</span>
                </li>
              </ul>
            </div>
          </div>
        </div>