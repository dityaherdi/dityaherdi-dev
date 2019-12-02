<template>
  <div id="portfolio-modal" class="uk-modal-full" uk-modal>
    <div class="uk-modal-dialog" uk-overflow-auto uk-height-viewport>
        <button class="uk-modal-close-full uk-close-large" type="button" uk-close></button>
        <div class="uk-container uk-padding">
          <h3>Portfolio</h3>
          <div class="uk-child-width-1-2 uk-child-width-1-4@s uk-grid-small uk-text-center" uk-grid="masonry: true">
            <div uk-lightbox>
              <a class="uk-button uk-button-default" data-type="image" href="https://i.scdn.co/image/07c323340e03e25a8e5dd5b9a8ec72b69c50089d" data-caption="Caption">
              test
              </a>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import UIkit from 'uikit'
import Event from './../../helpers/event'

export default {
  name: 'PortfolioModal',
  components: {

  },
  created() {
    Event.$on('show:PortfolioModal', () => {
      UIkit.modal('#portfolio-modal').show()
    })
  }
}
</script>

<style scoped lang="less">

</style>
