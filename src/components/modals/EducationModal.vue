<template>
  <div id="education-modal" class="uk-modal-full" uk-modal>
    <div class="uk-modal-dialog" uk-overflow-auto uk-height-viewport>
        <button class="uk-modal-close-full uk-close-large" type="button" uk-close></button>
        <div class="uk-grid-collapse uk-child-width-1-2@s uk-flex-middle" uk-grid>
            <div class="uk-padding">
              <h3>EDUCATION</h3>
              <img uk-img src="img/svg/education.svg" alt="No Picture Available">
            </div>
            <div class="uk-padding">
                <Timeline />
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import UIkit from 'uikit'
import Event from './../../helpers/event'

export default {
  name: 'EducationModal',
  components: {
    Timeline: () => import('./../parts/Timeline')
  },
  created() {
    Event.$on('show:EducationModal', () => {
      UIkit.modal('#education-modal').show()
    })
  }
}
</script>

<style scoped lang="less">

</style>
