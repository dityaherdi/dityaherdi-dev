<template>
  <div>
    <ul class="uk-iconnav uk-iconnav-vertical uk-float-left">
      <li>
        <a href="javascript:void(0)" uk-icon="icon: user" @click="showProfileModal"></a>
        <p class="uk-margin-small-top uk-margin-remove-bottom iconav-font-size">Profile</p>
      </li>
      <li>
        <a href="javascript:void(0)" uk-icon="icon: file-edit" @click="showEducationModal"></a>
        <p class="uk-margin-small-top uk-margin-remove-bottom iconav-font-size">Education</p>
      </li>
      <!-- <li>
        <a href="javascript:void(0)" uk-icon="icon: star" @click="showSoftSkillsModal"></a>
        <p class="uk-margin-small-top uk-margin-remove-bottom iconav-font-size">Soft Skills</p>
      </li>
      <li>
        <a href="javascript:void(0)" uk-icon="icon: receiver" @click="showContactModal"></a>
        <p class="uk-margin-small-top uk-margin-remove-bottom iconav-font-size">Contact</p>
      </li> -->
      <li>
        <a href="javascript:void(0)" uk-icon="icon: quote-right" @click="showMilestonesModal"></a>
        <p class="uk-margin-small-top uk-margin-remove-bottom iconav-font-size">Milestones</p>
      </li>
    </ul>
    
    <ul class="uk-iconnav uk-iconnav-vertical uk-float-right">
      <li>
        <a href="javascript:void(0)" uk-icon="icon: history" @click="showExperienceModal"></a>
        <p class="uk-margin-small-top uk-margin-remove-bottom iconav-font-size">Experience</p>
      </li>
      <li>
        <a href="javascript:void(0)" uk-icon="icon: code" @click="showDevToolsModal"></a>
        <p class="uk-margin-small-top uk-margin-remove-bottom iconav-font-size">DevTools</p>
      </li>
      <li>
        <a href="javascript:void(0)" uk-icon="icon: thumbnails" @click="showPortfolioModal"></a>
        <p class="uk-margin-small-top uk-margin-remove-bottom iconav-font-size">Portfolio</p>
      </li>
    </ul>

    <ProfileModal />
    <EducationModal />
    <!-- <SoftSkillsModal /> -->
    <!-- <ContactModal /> -->
    <ExperienceModal />
    <DevToolsModal />
    <PortfolioModal />
    <MilestonesModal />
  </div>
</template>

<script>
import Event from './../../helpers/event'
// import ProfileModal from './../modals/ProfileModal'

export default {
  name: 'SideIcon',
  components: {
    ProfileModal: () => import('./../modals/ProfileModal'),
    EducationModal: () => import('./../modals/EducationModal'),
    // SoftSkillsModal: () => import('./../modals/SoftSkillsModal'),
    // ContactModal: () => import('./../modals/ContactModal'),
    ExperienceModal: () => import('./../modals/ExperienceModal'),
    DevToolsModal: () => import('./../modals/DevToolsModal'),
    PortfolioModal: () => import('./../modals/PortfolioModal'),
    MilestonesModal: () => import('./../modals/MilestonesModal')
  },
  methods: {
    showProfileModal: function () {
      Event.$emit('show:ProfileModal')
    },
    showEducationModal: function () {
      Event.$emit('show:EducationModal')
    },
    // showSoftSkillsModal: function () {
    //   Event.$emit('show:SoftSkillsModal')
    // },
    // showContactModal: function () {
    //   Event.$emit('show:ContactModal')
    // },
    showExperienceModal: function () {
      Event.$emit('show:ExperienceModal')
    },
    showDevToolsModal: function () {
      Event.$emit('show:DevToolsModal')
    },
    showPortfolioModal: function () {
      Event.$emit('show:PortfolioModal')
    },
    showMilestonesModal: function () {
      Event.$emit('show:MilestonesModal')
    }
  }
}
</script>

<style scoped lang="less">
.iconav-font-size {
  font-size: 7pt;
}
</style>
