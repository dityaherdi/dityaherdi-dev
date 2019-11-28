<template>
<div>
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

  <OffCanvas />
</div>
</template>

<script>
import Event from './../../helpers/event'

export default {
  name: 'AppNavbar',
  components: {
    OffCanvas: () => import('./../modals/OffCanvas')
  },
  methods: {
    showOffCanvas: function () {
      Event.$emit('show:offCanvas')
    }
  }
}
</script>

<style scoped lang="less">

</style>
