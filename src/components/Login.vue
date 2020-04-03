<template>
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <button @click="logInWithFacebook">auth facebook</button>
              </div>
          </div>

      </div>
  </div>
</template>

<script>

export default {
    name: 'Login',
    data() {
        return {
        }
    },
    methods: {
        async logInWithFacebook(){
              const self = this;
                  window.FB.login(function(response) {
                    if (response.authResponse) {
                      self.$store.dispatch('login', response.authResponse);
                      self.$router.push('/home')
                    } else {
                      alert("User cancelled login or did not fully authorize.");
                    }
                  },{scope: 'user_photos'});
              return false;
            }  
    }
}
</script>

<style>

</style>