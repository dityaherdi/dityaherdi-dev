<template>
  <div id="app">
    <div class="uk-flex uk-flex-center uk-flex-middle uk-height-viewport uk-position-z-index uk-position-relative" data-uk-height-viewport="min-height: 400">
      <!-- NAV -->
      <div class="uk-position-top">
        <div class="uk-container uk-container-small">
          <nav class="uk-navbar-container uk-navbar-transparent" data-uk-navbar>
            <div class="uk-navbar-left">
              <div class="uk-navbar-item">
                <a class="uk-logo" href=""><img src="img/dityaherdi.png" alt="dityaherdi"></a>
              </div>
            </div>
            <div class="uk-navbar-right">
              <ul class="uk-navbar-nav">
                <li class="uk-active uk-visible@m"><a href="" data-uk-icon="home"></a></li>
                <li class="uk-visible@s"><a href="">Features</a></li>
                <li class="uk-visible@s"><a href="">Security</a></li>
                <li class="uk-visible@s"><a href="">Testimonials</a></li>
                <li><a class="uk-navbar-toggle" data-uk-toggle data-uk-navbar-toggle-icon href="#offcanvas-nav"></a></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <!-- /NAV -->
      <!-- CONTENT -->
      <div class="uk-container uk-container-small uk-flex-auto uk-text-center" data-uk-scrollspy="target: > .animate; cls: uk-animation-slide-bottom-small uk-invisible; delay: 300">
        <ul class="uk-iconnav uk-iconnav-vertical uk-float-left">
          <li>
            <a href="#modal-full" uk-toggle uk-icon="icon: user"></a>
            <p class="uk-margin-small-top uk-margin-remove-bottom iconav-font-size">Profile</p>
          </li>
          <li>
            <a href="#" uk-icon="icon: file-edit"></a>
            <p class="uk-margin-small-top uk-margin-remove-bottom iconav-font-size">Education</p>
          </li>
          <li>
            <a href="#" uk-icon="icon: star"></a>
            <p class="uk-margin-small-top uk-margin-remove-bottom iconav-font-size">Soft Skills</p>
          </li>
          <li>
            <a href="#" uk-icon="icon: receiver"></a>
            <p class="uk-margin-small-top uk-margin-remove-bottom iconav-font-size">Contact</p>
          </li>
        </ul>
        
        <ul class="uk-iconnav uk-iconnav-vertical uk-float-right">
          <li>
            <a href="#" uk-icon="icon: history"></a>
            <p class="uk-margin-small-top uk-margin-remove-bottom iconav-font-size">Experience</p>
          </li>
          <li>
            <a href="#" uk-icon="icon: code"></a>
            <p class="uk-margin-small-top uk-margin-remove-bottom iconav-font-size">DevTools</p>
          </li>
          <li>
            <a href="#" uk-icon="icon: thumbnails"></a>
            <p class="uk-margin-small-top uk-margin-remove-bottom iconav-font-size">Portfolio</p>
          </li>
          <li>
            <a href="#" uk-icon="icon: quote-right"></a>
            <p class="uk-margin-small-top uk-margin-remove-bottom iconav-font-size">Milestones</p>
          </li>
        </ul>
        <img class="uk-border-circle uk-box-shadow-hover-xlarge animate uk-invisible " src="img/ME.jpg" width="200" height="200" alt="Border circle">
        <h1 class="uk-heading-primary animate uk-invisible" style="font-weight: 700;">ADITYA HERDINATA PUTRA</h1>
        <div class="uk-width-4-5@m uk-margin-auto animate uk-invisible">
          <p class="lead"><i>"Web Developer, Programmer, IT & Music Enthusiast, Gamer, Traveler, Blogger, etc."</i></p>
          <p class="lead">Hi, Welcome to my Personal Web Page. This page shows you my simple profile. If you can't find any information about me here or you just want to know more about me, please don't be hestitate to contact me. Thank you and Enjoy!</p>
        </div>
        <!-- <div class="uk-margin-medium-top animate uk-invisible" data-uk-margin data-uk-scrollspy-class="uk-animation-fade uk-invisible">
          <a class="uk-button uk-button-default uk-button-large uk-width-2-3 uk-width-auto@s" data-uk-icon="arrow-right" title="Learn More">LEARN MORE</a>
          <a class="uk-button uk-button-primary uk-button-large uk-width-2-3 uk-width-auto@s" data-uk-icon="check" title="Learn More">TRY IT OUT</a>
        </div> -->
        <div class="uk-flex uk-flex-center">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=dityaherdi@gmail.com" target="_blank" uk-icon="icon: google" class="uk-icon-button"></a>
          <a href="https://api.whatsapp.com/send?phone=6281338043380" target="_blank" uk-icon="icon: whatsapp" class="uk-margin-left uk-icon-button"></a>
          <a href="https://github.com/dityaherdi" target="_blank" uk-icon="icon: github" class="uk-margin-left uk-icon-button"></a>
          <a href="https://www.instagram.com/dityaherdi" target="_blank" uk-icon="icon: instagram" class="uk-margin-left uk-icon-button"></a>
          <a href="https://www.facebook.com/herdinata.putra" target="_blank" uk-icon="icon: facebook" class="uk-margin-left uk-icon-button"></a>
          <a href="https://www.linkedin.com/in/herdinata-putra-30bb4a180" target="_blank" uk-icon="icon: linkedin" class="uk-margin-left uk-icon-button"></a>
        </div>
      <hr class="uk-divider-icon uk-margin-remove-top">
      </div>
      <!-- /CONTENT -->
      <!-- FOOT -->
      <div class="uk-position-bottom-center uk-position-small">
        <span class="uk-text-small uk-text-center">© 2019 | <a href="#" title="dityaherdi">Designed by @dityaherdi</a> | Built with <a href="http://getuikit.com" title="Visit UIkit 3 site" target="_blank" data-uk-tooltip><span data-uk-icon="uikit"></span></a></span>
      </div>
      <!-- /FOOT -->
    </div>

    <!-- OFFCANVAS -->
		<div id="offcanvas-nav" data-uk-offcanvas="flip: true; overlay: false">
			<div class="uk-offcanvas-bar uk-offcanvas-bar-animation uk-offcanvas-slide">
				<button class="uk-offcanvas-close uk-close uk-icon" type="button" data-uk-close></button>
				<ul class="uk-nav uk-nav-default">
					<li class="uk-active"><a href="#">Active</a></li>
					<li class="uk-parent">
						<a href="#">Parent</a>
						<ul class="uk-nav-sub">
							<li><a href="#">Sub item</a></li>
							<li><a href="#">Sub item</a></li>
						</ul>
					</li>
					<li class="uk-nav-header">Header</li>
					<li><a href="#js-options"><span class="uk-margin-small-right uk-icon" data-uk-icon="icon: table"></span> Item</a></li>
					<li><a href="#"><span class="uk-margin-small-right uk-icon" data-uk-icon="icon: thumbnails"></span> Item</a></li>
					<li class="uk-nav-divider"></li>
					<li><a href="#"><span class="uk-margin-small-right uk-icon" data-uk-icon="icon: trash"></span> Item</a></li>
				</ul>
				<h3>Title</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
			</div>
		</div>
		<!-- /OFFCANVAS -->

    <!-- Full Modal -->
    <!-- <a class="uk-button uk-button-default" href="#modal-full" uk-toggle>Open</a> -->

    <div id="modal-full" class="uk-modal-full" uk-modal>
        <div class="uk-modal-dialog">
            <button class="uk-modal-close-full uk-close-large" type="button" uk-close></button>
            <div class="uk-grid-collapse uk-child-width-1-2@s uk-flex-middle" uk-grid>
                <div class="uk-background-cover" style="background-image: url('img/ME.jpg');" uk-height-viewport></div>
                <div class="uk-padding-large">
                    <h1>Headline</h1>
                    <div uk-overflow-auto class="overflow-height">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>
                </div>
            </div>
        </div>
    </div>
    <!-- /Full Modal -->
  </div>
</template>

<style lang="less" scoped>
.overflow-height {
  min-height: 65vh !important;
}
.iconav-font-size {
  font-size: 7pt;
}
</style>
