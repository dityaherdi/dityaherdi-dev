<template>
  <div class="uk-flex uk-flex-center animate uk-invisible" uk-grid>
    <div class="uk-width-1-2@s uk-width-1-1@l">
      <template v-for="(account, index) in accounts">
        <a :href="account.url" target="_blank" :uk-icon="account.icon" class="uk-margin-right-small uk-icon-button" :uk-tooltip="account.name" :key="index"></a>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccountSection',
  data: function () {
    return {
      accounts: [
        {
          name: 'Google Mail',
          url: 'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=dityaherdi@gmail.com',
          icon: 'icon: google'
        },
        {
          name: 'Whatsapp',
          url: 'https://api.whatsapp.com/send?phone=6281338043380',
          icon: 'icon: whatsapp'
        },
        {
          name: 'Github',
          url: 'https://github.com/dityaherdi',
          icon: 'icon: github'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/dityaherdi',
          icon: 'icon: instagram'
        },
        {
          name: 'Facebook',
          url: 'https://www.facebook.com/herdinata.putra',
          icon: 'icon: facebook'
        },
        {
          name: 'Linkedin',
          url: 'https://www.linkedin.com/in/herdinata-putra-30bb4a180',
          icon: 'icon: linkedin'
        },
      ]
    }
  }
}
</script>

<style scoped lang="less">

</style>
