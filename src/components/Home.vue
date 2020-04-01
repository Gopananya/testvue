<template>
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                  <button @click="AuthProvider('vkontakte')">auth Vkontakte</button>
                  <!--  <facebook-login class="button"
                    appId="233156417738643"
                    @login="getUserData"
                    @logout="onLogout"
                    @get-initial-status="getUserData">
                  </facebook-login> -->
                    <button @click="logInWithFacebook">auth facebook</button>
                    <button @click="get">get</button>
                    <router-link :to="'/test'">test</router-link>
              </div>
          </div>

      </div>
  </div>
</template>

<script>

export default {
    name: 'Home',
    data() {
        return {
            userID: ''
        }
    },
    methods: {
       AuthProvider(provider) {
              this.$auth.authenticate(provider).then(response =>{
                console.log(response)


                }).catch(err => {
                    console.log({err:err})
                })

            },
            async logInWithFacebook(){

              const self = this 
                  window.FB.login(function(response) {
                    if (response.authResponse) {
                self.userID= response.authResponse.userID
                      console.log(response)
                    } else {
                      alert("User cancelled login or did not fully authorize.");
                    }
                  });
              return false;
            },
            get(){
                
              const self = this 

              window.FB.api(
                `/${self.userID}/`,
                function (response) {
                  
                    console.log(response)
                  
                }
            );
            }
    
 
    },
    components: {

    }
}
</script>

<style>

</style>