<template>
  <div id="devtools-modal" class="uk-modal-full" uk-modal>
    <div class="uk-modal-dialog" uk-overflow-auto uk-height-viewport>
        <button class="uk-modal-close-full uk-close-large" type="button" uk-close></button>
        <div class="uk-container uk-padding">
          <h3>DevTools</h3>
          <div class="uk-child-width-1-2 uk-child-width-1-4@s uk-grid-small uk-text-center" uk-grid="masonry: true">
            <div v-for="(tool, index) in tools" :key="index">
              <div class="uk-animation-toggle" tabindex="0">
                <a class="uk-link-heading" :href="tool.url" target="_blank">
                  <div class="uk-card uk-card-default uk-card-hover uk-card-body uk-animation-shake">
                      <img uk-img :src="tool.img" width="100px" :alt="tool.name">
                      <h3 class="uk-card-title">
                        {{ tool.name }}
                      </h3>
                      <p style="font-size: 10pt;">{{ tool.desc }}</p>
                  </div>
                </a>
              </div>
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
  name: 'DevToolsModal',
  data: function () {
    return {
      tools: [
        {
          name: 'Laravel',
          img: 'img/svg/devtoolslogo/laravel.svg',
          url: 'https://laravel.com/',
          desc: 'The PHP Framework for Web Artisans.'
        },
        {
          name: 'Vue.js',
          img: 'img/svg/devtoolslogo/vuejs.svg',
          url: 'https://vuejs.org/',
          desc: 'The Progressive JavaScript Framework.'
        },
        {
          name: 'UIkit',
          img: 'img/svg/devtoolslogo/uikit.svg',
          url: 'https://getuikit.com/',
          desc: 'A lightweight and modular front-end framework for developing fast and powerful web interfaces.'
        },
        {
          name: 'Bootstrap',
          img: 'img/svg/devtoolslogo/bootstrap.svg',
          url: 'https://getbootstrap.com/',
          desc: 'Bootstrap is an open source toolkit for developing with HTML, CSS, and JS.'
        },
        {
          name: 'Node.js',
          img: 'img/svg/devtoolslogo/nodejs.svg',
          url: 'https://nodejs.org/',
          desc: "Node.js is a Javascript runtime built on Chrome's V8 JavaScript engine."
        },
        {
          name: 'Git',
          img: 'img/svg/devtoolslogo/git.svg',
          url: 'https://git-scm.com/',
          desc: "Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency. "
        },
        {
          name: 'MySQL',
          img: 'img/svg/devtoolslogo/mysql.svg',
          url: 'https://www.mysql.com/',
          desc: "MySQL is an open-source relational database management system (RDBMS)."
        },
        {
          name: 'Bulma',
          img: 'img/svg/devtoolslogo/bulma.svg',
          url: 'https://bulma.io/',
          desc: 'Bulma is a free, open source CSS framework based on Flexbox.'
        },
      ]
    }
  },
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