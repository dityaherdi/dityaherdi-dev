<template>
  <div id="app">
    <!-- NAVBAR -->
    <AppNavbar />
    <!-- /NAVBAR -->
    <div class="uk-flex uk-flex-center uk-flex-middle uk-position-z-index uk-position-relative">

      <!-- CONTENT -->
      <div class="uk-container uk-container-small uk-flex-auto uk-text-center" data-uk-scrollspy="target: > .animate; cls: uk-animation-slide-bottom-small uk-invisible; delay: 300">

        <SideIcon />

        <img class="uk-border-circle uk-box-shadow-hover-xlarge animate uk-invisible " src="img/ME.jpg" width="200" height="200" alt="No Image">
        <h1 class="uk-heading-primary animate uk-invisible" style="font-weight: 700;">ADITYA HERDINATA PUTRA</h1>
        <div class="uk-width-4-5@m uk-margin-auto animate uk-invisible">
          <p class="lead"><i>"Web Developer, Programmer, IT & Music Enthusiast, Gamer, Traveler, Blogger, etc."</i></p>
          <p class="lead">Hi, Welcome to my Personal Web Page. This page shows you my simple profile. If you can't find any information about me here or you just want to know more about me, please don't be hestitate to contact me by clicking these options below. Thank you and Enjoy!</p>
        </div>
        
        <AccountSection />
        <hr class="uk-divider-icon uk-margin-remove-top">
      </div>
      <!-- /CONTENT -->
      
    </div>
      <!-- FOOTER -->
      <AppFooter />
      <!-- FOOTER -->

  </div>
</template>

<script>
export default {
  components: {
    AppNavbar: () => import('./components/parts/AppNavbar'),
    AppFooter: () => import('./components/parts/AppFooter'),
    SideIcon: () => import('./components/parts/SideIcon'),
    AccountSection: () => import('./components/parts/AccountSection')
  }
}
</script>

<style lang="less" scoped>

</style>
