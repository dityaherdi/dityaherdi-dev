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
                    <img class="uk-border uk-box-shadow-hover-xlarge" width="300" height="300" :src="portf.image" alt="">
                </a>
                <p style="font-size: 10pt;">{{ portf.desc }}</p>
                <button @click="gotoPortfolio(index)" :class="portf.url === 'local' ? 'uk-disabled' : ''" class="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom">
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
          image: 'https://gdurl.com/XwSc',
          desc: 'SIMA-SP2D adalah singkatan dari Sistem Manajemen Arsip Surat Perintah Pencairan Dana yang dibangun dengan menggunakan Framework Laravel dan Vue.Js. Sistem ini dilengkapi dengan penggunaan QR-Code untuk identifikasi letak penyimpanan arsip yang berbentuk fisik. Sistem ini merupakan Tugas Akhir (Skripsi) untuk memenuhi syarat memperoleh gelar S.Kom.',
          url: 'local'
        },
        {
          title: 'WARUNG DEWA RAMA',
          image: 'https://gdurl.com/BoJb',
          desc: 'Warung Dewa Rama adalah sebuah restoran yang terletak di daerah lokasi wisata Air Terjun Tegenungan, Gianyar. Melalui website ini diharapkan dapat digunakan sebagai media promosi restoran Warung Dewa Rama. Pelanggan dapat memesan langsung makanan dan paket tour melalui tombol Whatsapp di pojok kanan bawah. Website ini adalah project team yang terdiri dari saya dan dua orang teman saya.',
          url: 'https://tegenungan-warungdewarama.com'
        },
        {
          title: 'BUNDA FM (FILE MANAGER)',
          image: 'https://gdurl.com/98m9',
          desc: 'BUNDA FM (FILE MANAGER) adalah sebuah sistem yang dibuat untuk mengelola file yang digunakan untuk proses operasional tiap-tiap unit di RSIA Puri Bunda Denpasar. Sistem ini dilengkapi denga fitur pembatasan kapasitas penyimpanan tiap unit, hak akses dan sistem back-up terhadap file yang dihapus tetapi hanya tersedia selama 30 hari setelah penghapusan.',
          url: 'local'
        },
        {
          title: 'DREAM',
          image: 'https://gdurl.com/bOqN',
          desc: 'DREAM (Dokumen Elektronik Rekam Medis) adalah sebuah sistem penyimpanan arsip Rekam Medis Pasien RSIA Puri Bunda. Sistem ini dibuat untuk menyimpan arsip yang berusia 10 Tahun keatas dimana dokumen fisik Rekam Medis Pasien akan di-scan dan di upload pada sistem ini kemudian dilakukan pelenyapan terhadap dokumen fisiknya.',
          url: 'local'
        },
        {
          title: 'DITYAHERDI',
          image: 'https://gdurl.com/VKh9',
          desc: 'DITYAHERDI adalah personal website yang saya buat secara pribadi untuk menampilkan beberapa informasi mengenai diri saya. Website ini dibuat dibuat menjadi Single Page Application dengan memaksimalkan penggunaan komponen tersembunyi untuk setiap menunya sehingga tampak minimalis namun menampung berbagai macam informasi.',
          url: 'https://dityaherdi.github.io'
        },
      ]
    }
  },
  components: {

  },
  methods: {
    gotoPortfolio: function (index) {
      const url = this.portfolio[index].url
      window.open(url, '_blank')
    }
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
