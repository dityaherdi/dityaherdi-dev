<template>
  <div id="devtools-modal" class="uk-modal-full" uk-modal>
    <div class="uk-modal-dialog" uk-overflow-auto uk-height-viewport>
        <button class="uk-modal-close-full uk-close-large" type="button" uk-close></button>
        <h1>DEVTOOLS</h1>
    </div>
  </div>
</template>

<script>
import UIkit from 'uikit'
import Event from './../../helpers/event'

export default {
  name: 'DevToolsModal',
  components: {

  },
  created() {
    Event.$on('show:DevToolsModal', () => {
      UIkit.modal('#devtools-modal').show()
    })
  }
}
</script>

<style scoped lang="less">

</style>
