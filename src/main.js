import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import VueSocialauth from 'vue-social-auth';
import axios from 'axios'
Vue.prototype.$http = axios;
Vue.use(VueSocialauth, {
  providers: {
    vkontakte: {
      clientId: '7382804',
      redirectUri: '/auth/vkontakte/callback'
    }
  }
})
Vue.config.productionTip = false

new Vue({
  router,
  methods: {
        async initFacebook() {
            window.fbAsyncInit = function() {
              window.FB.init({
                appId: "233156417738643", //You will need to change this
                cookie: true, // This is important, it's not enabled by default
                version: "v6.0"
              });
            };
    },
        async loadFacebookSDK(d, s, id) {
            var js,
              fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
              return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
            },
        },
        async created() {
        await this.loadFacebookSDK(document, "script", "facebook-jssdk");
        await this.initFacebook();
    },
  render: h => h(App)
}).$mount('#app')
