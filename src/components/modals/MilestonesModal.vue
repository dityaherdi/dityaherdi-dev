<template>
  <div id="milestones-modal" class="uk-modal-full" uk-modal>
    <div class="uk-modal-dialog" uk-overflow-auto uk-height-viewport>
        <button class="uk-modal-close-full uk-close-large" type="button" uk-close></button>
        <div class="uk-container uk-padding uk-text-center">
          <h3>MILESTONES</h3>
          <ul class="uk-subnav uk-subnav-pill uk-flex uk-flex-center" uk-switcher="animation: uk-animation-slide-bottom">
            <li v-for="(milestone, index) in milestones" :key="index">
              <a href="javascript:void(0)">{{ milestone.category }}</a>
            </li>
          </ul>
          <hr>
          <ul class="uk-switcher uk-margin uk-flex uk-flex-center">
            <li v-for="(milestone, index) in milestones" :key="index">
                <dl v-for="(list, index) in milestone.lists" :key="index" class="uk-description-list">
                  <dt>{{ list.date }}</dt>
                  <dd>{{ list.title }}</dd>
                  <hr class="uk-divider-icon">
                </dl>
            </li>
          </ul>
        </div>
    </div>
  </div>
</template>

<script>
import UIkit from 'uikit'
import Event from './../../helpers/event'

export default {
  name: 'MilestonesModal',
  data: function () {
    return {
      milestones: [
        {
          category: 'Certificate',
          lists: [
            { title: 'Sertifikasi Profesional Microsoft Office Desktop Training', date: 'Jan. 2017' },
            { title: 'Sertifikasi Kompetensi Bidang Pengembangan Perangkat Lunak dengan Kualifikasi Programmer dari Badan Nasional Sertifikasi Profesi', date: 'Nov. 2018' },
            { title: 'Sertifikasi Pelatihan International Project Management Associate dari Multimatics', date: 'Des. 2018' },
          ]
        },
        {
          category: 'Organization',
          lists: [
            { title: 'Anggota Unit Kegiatan Mahasiswa Stikom Bali Music Community (SBMC)', date: 'Sep. 2015 – Sep. 2016' },
            { title: 'Panitia Event Valentine Music Festival SBMC Divisi Perlengkapan', date: 'Feb. 2016' },
            { title: 'Panitia Event SBMC Roadshow Divisi Humas', date: 'Apr. 2016' },
            { title: 'Panitia Event Musik Pojok SBMC Divisi Acara', date: 'Jun. 2016' },
            { title: 'Anggota Unit Kegiatan Mahasiswa Badminton of STMIK STIKOM Bali (BOSS)', date: 'Sep. 2016 – Feb. 2019' },
            { title: 'Panitia Event STIKOM Badminton Cup IV Divisi Publikasi', date: 'Okt. 2016' },
            { title: 'Panitia Event Pertandingan Persahabatan UKM BOSS Koordinator Divisi Dekorasi dan Dokumentasi', date: 'Nov. 2016' },
            { title: 'Panitia Event Badminton STIKOM Cup IV Koordinator Divisi Publikasi', date: 'Jan. 2017' },
            { title: 'Panitia Event STIKOM Badminton Cup V Divisi Publikasi', date: 'Okt. 2017' },
            { title: 'Etc.', date: '' },
          ]
        },
        {
          category: 'Academic or Soft Skills',
          lists: [
            { title: 'Asisten Dosen Mata Kuliah Perancangan Web (4 SKS)', date: 'Sep. 2017 – Dec. 2017' },
            { title: 'Asisten Dosen Mata Kuliah Pemrograman Berorientasi Objek (4 SKS)', date: 'Sep. 2017 – Dec. 2017' },
          ]
        },
      ]
    }
  },
  components: {

  },
  created() {
    Event.$on('show:MilestonesModal', () => {
      UIkit.modal('#milestones-modal').show()
    })
  }
}
</script>

<style scoped lang="less">

</style>
