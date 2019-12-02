<template>
  <div id="experience-modal" class="uk-modal-full" uk-modal>
    <div class="uk-modal-dialog" uk-overflow-auto uk-height-viewport>
        <button class="uk-modal-close-full uk-close-large" type="button" uk-close></button>
        <div class="uk-container uk-padding">
          <h3>Work Experience</h3>
          <div class="uk-child-width-1-1 uk-child-width-1-1@s uk-grid-small uk-flex-center" uk-grid="masonry: true">
            <div v-for="(exp, index) in experience" :key="index">
              <article class="uk-comment uk-padding-small">
                <header class="uk-comment-header uk-grid-medium uk-flex-middle" uk-grid>
                    <div class="uk-width-auto">
                        <img class="uk-comment-avatar" :src="exp.logo" width="80" height="80" alt="No Logo">
                    </div>
                    <div class="uk-width-expand">
                        <h4 class="uk-comment-title uk-margin-remove">
                          <a class="uk-link-reset" :href="exp.url" target="_blank">{{ exp.company }}</a>
                        </h4>
                        <ul class="uk-comment-meta uk-subnav uk-margin-remove-top">
                            <li><a href="javascript:void(0)">{{ exp.category }}</a></li>
                            <li><a href="javascript:void(0)">{{ exp.fromDate }} <span uk-icon="chevron-double-right"></span> {{ exp.toDate }}</a></li>
                        </ul>
                    </div>
                </header>
                <div class="uk-comment-body">
                  <p class="uk-article-meta" style="font-style: italic">{{ exp.position }}</p>
                  <p>{{ exp.desc }}</p>
                </div>
              </article>
              <hr class="uk-divider-icon">
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
  name: 'ExperienceModal',
  data: function () {
    return {
      experience: [
        {
          company: 'PT. Telkom Indonesia (Persero) Tbk. (Telkom)',
          category: 'Telecommunication',
          logo: 'img/company/telkom.png',
          desc: "PT Telkom Indonesia (Limited Liability Company) is a State-Owned Enterprises that consist on information and communication service field as well as telecommunication network in Indonesia. The most shareholders of Telkom is Government of Republic of Indonesia in the total of 52.097% whereas the remaining of 47.91 % of shareholders are managed by public. Telkom's shares are traded in Indonesia Stock Exchange with its code 'TLKM' and New York Stock Exchange with its code 'TLK'.",
          url: 'https://www.telkom.co.id/',
          position: 'OFF 3 Customer Automation & IT Coherent Enablement',
          fromDate: 'November 1, 2019',
          toDate: 'Now'
        },
        {
          company: 'PT. RSIA Puri Bunda Denpasar',
          category: 'Hospital',
          logo: 'img/company/puri-bunda.png',
          desc: "Puri Bunda Maternity Hospital (Rumah Sakit Bersalin) is a health service center that focusing on woman. It is able to provide all of quality service needs and integrated sophisticated diagnostic facility as well as  an adequate physical facilities. Puri Bunda Maternity Hosptlital is exist to integrate a secure maternity hospital and its service is equal with a star hotel. Since July, 2016, Puri Bunda Maternity Hospital is altered to become Puri Bunda Mother and Child Care Hospital (Rumah Sakit Ibu dan Anak). This alteration is a demand of service and to accomodate people's willingness in order to this hospital can treat pediatric patient.",
          position: 'IT Officer & Programmer',
          url: 'https://www.puribunda.com/',
          fromDate: 'March 5, 2019',
          toDate: 'October 8, 2019'
        },
        {
          company: 'CV. Rumah Media',
          category: 'Software House',
          logo: 'img/company/rumah-media.png',
          desc: 'Rumahmedia was established in 2004 and is a group of young men that poses creativity in interactive multimedia, which then crystallized in becoming ideas to develop Information Technology in Denpasar, Bali, where by every second those idea crystals grow, disburse and collide in every situation. We would like to serve in an effort to improve the level of society life and strengthen local and national economic endurance through Information Technology and of course to create more business opportunities for Young Digital Entrepreneur. Rumahmedia provides business solutions starting from design, web site development, software development and also application development.',
          position: 'IT Internship',
          url: 'https://www.rumahmedia.com/',
          fromDate: 'February 19, 2018',
          toDate: 'May 19, 2018'
        },
      ]
    }
  },
  components: {

  },
  created() {
    Event.$on('show:ExperienceModal', () => {
      UIkit.modal('#experience-modal').show()
    })
  }
}
</script>

<style scoped lang="less">

</style>
