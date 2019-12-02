<template>
  <div id="portfolio-modal" class="uk-modal-full" uk-modal>
    <div class="uk-modal-dialog" uk-overflow-auto uk-height-viewport>
        <button class="uk-modal-close-full uk-close-large" type="button" uk-close></button>
        <div class="uk-container uk-padding">
          <h3>Portfolio</h3>
          <div class="uk-child-width-1-3@s uk-grid-collapse uk-text-center" uk-grid="masonry: true" uk-lightbox="animation: slide" >
            <div class="uk-padding-small" v-for="(portf, index) in portfolio" :key="index">
              <div class="uk-tile uk-tile-default uk-padding-small">
                <p class="uk-h4">{{ portf.title }}</p>
                <a class="uk-inline" data-type="image" :href="portf.image" :data-caption="portf.title">
                    <img width="300" height="300" :src="portf.image" alt="">
                </a>
                <p style="font-size: 10pt;">{{ portf.desc }}</p>
                <button :class="portf.url === 'local' ? 'uk-disabled' : ''" class="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom">
                  {{ portf.url === 'local' ? 'This app only runs locally!' : 'Check it out!' }}
                </button>
              </div>
              <hr>
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
  data: function () {
    return {
      portfolio: [
        {
          title: 'SIMA-SP2D',
          image: 'https://i.scdn.co/image/07c323340e03e25a8e5dd5b9a8ec72b69c50089d',
          desc: 'SIMA-SP2D adalah singkatan dari Sistem Manajemen Arsip Surat Perintah Pencairan Dana yang dibangun dengan menggunakan Framework Laravel dan Vue.Js. Sistem ini dilengkapi dengan penggunaan QR-Code untuk identifikasi letak penyimpanan arsip yang berbentuk fisik. Sistem ini merupakan Tugas Akhir (Skripsi) untuk memenuhi syarat memperoleh gelar S.Kom.',
          url: 'local'
        },
        {
          title: 'logo',
          image: 'https://gdurl.com/UaKg',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ducimus, ratione fugit maiores reprehenderit reiciendis. Labore sit dolores mollitia? Quo assumenda provident culpa ad saepe rem quae quos illo consectetur.',
          url: 'locala'
        }
      ]
    }
  },
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
