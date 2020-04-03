<template>
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <input type="file" multiple><br>
                <button>Submit</button>
            </div>
      </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    data() {
       return {
        
       }
    },
    methods: {
 
    },
    async created(){
      const self = this;
      // await this.$http(`https://graph.facebook.com/v6.0/${this.$route.params.id}/picture?access_token=${this.getToken}&debug=all&format=json&method=get&pretty=0&redirect=false&suppress_http_code=1&transport=cors`).then(res => {
      //   self.url = res.data.data.url
      // })
    },
    computed: {
            ...mapGetters(['getUser', 'getToken', 'getUserName', 'albums'])
        }

}
</script>

<style>

</style>