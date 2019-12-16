<template>
  <!-- Full Modal -->
  <div id="profile-modal" class="uk-modal-full" uk-modal>
      <div class="uk-modal-dialog" uk-height-viewport>
          <button class="uk-modal-close-full uk-close-large" type="button" uk-close></button>
          <div class="uk-grid-collapse uk-child-width-1-2@s uk-flex-middle" uk-grid>
              <div class="uk-padding-large">
                <img uk-img class="uk-border-circle" src="img/ME.jpg" alt="No Picture Available">
              </div>
              <div class="uk-padding">
                  <h3>Hi, Let's Start!</h3>
                  <div uk-overflow-auto class="overflow-height">
                    <ul class="uk-list uk-list-striped">
                        <li class="question">What is your name?</li>
                        <li class="answer">My name is I Ketut Aditya Herdinata Putra, you can call me <i>Herdi</i>.</li>
                        <hr>
                        <li class="question">When were you born?</li>
                        <li class="answer">I was born in Denpasar, June 8, 1997.</li>
                        <hr>
                        <li class="question">Where do I can find you?</li>
                        <li class="answer">I am currently living in Center of Jakarta. But if you need my administrative address, you can find me at Jl. Wibisana Utara Gang Mekar 10A, Pemecutan Kaja, Denpasar, Bali 80118.</li>
                        <hr>
                        <li class="question">Do you have a religion?</li>
                        <li class="answer">Yes I do. I'm originally Balinese and most of Balinese are Hinduism, so am I and I'm proud with that.</li>
                        <hr>
                        <li class="question">If you have a free time, what are you doing?</li>
                        <li class="answer">Traveling, Listening music, singing (with my bad voice), playing guitar (when I was in Bali, because I left my guitar there 😅), sometimes doing some code or learn something new about programming, playing games, sleeping, and the most important for me is just doing nothing and calm down my feeling then make myself filled by peace 😁.</li>
                        <hr>
                    </ul>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <!-- /Full Modal -->
</template>

<script>
import UIkit from 'uikit'
import Event from './../../helpers/event'

export default {
  name: 'ProfileModal',
  created() {
    Event.$on('show:ProfileModal', () => {
      UIkit.modal('#profile-modal').show()
    })
  }
}
</script>

<style scoped lang="less">
.overflow-height {
  min-height: 65vh !important;
}
.question {
  font-style: italic;
}
.answer {
  font-weight: bold;
}
</style>