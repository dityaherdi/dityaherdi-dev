<template>
<div>
  <!-- NAV -->
  <div class="uk-navbar-container uk-navbar-transparent" uk-navbar>
    <div class="uk-navbar-center">
      <!-- <div class="uk-navbar-center-left">
        <div>
          <ul class="uk-navbar-nav">
            <li><a class="uk-navbar-toggle" data-uk-toggle data-uk-navbar-toggle-icon href="#offcanvas-nav"></a></li>
          </ul>
        </div>
      </div> -->
      <a href="" class="uk-navbar-item uk-logo">
        <img src="img/dityaherdi.png" alt="dityaherdi">
      </a>
      <!-- <div class="uk-navbar-center-right">
        <div>
          <ul class="uk-navbar-nav">
            <li><a class="uk-navbar-toggle" data-uk-toggle data-uk-navbar-toggle-icon href="#offcanvas-nav"></a></li>
          </ul>
        </div>
      </div> -->
    </div>
  </div>
  <!-- /NAV -->
 
  <!-- <OffCanvas /> -->
</div>
</template>

<script>
import Event from './../../helpers/event'

export default {
  name: 'AppNavbar',
  components: {
    // OffCanvas: () => import('./../modals/OffCanvas')
  },
  methods: {
    // showOffCanvas: function () {
    //   Event.$emit('show:offCanvas')
    // }
  }
}
</script>

<style scoped lang="less">

</style>
