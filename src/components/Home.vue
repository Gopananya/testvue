<template>
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-md-8">
                    <h3>Welcome, {{getUserName}}</h3>
                    <!-- <router-link to="/upload">upload</router-link> -->
                    <div>
                      <div v-for='album in albumList' :key='album.id'>
                        <div class="row mt-5">
                          <div class="col-md-2">
                            <img :src="`${album.img}`" width="150px">
                          </div>
                          <div class="col-md-3">
                            <router-link :to="`album/${album.id}`">
                              <h3>{{album.name}}</h3>
                            </router-link>
                              <p>files {{album.length}}</p>
                            
                          </div>

                        </div>
                        <hr>
                      </div>
                    </div>
          </div>

      </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    data() {
       return {
        albumList: []
       }
    },
    methods: {
   
    
 
    },
    async created(){
      // console.log(this.albums)
      const self = this;
      await this.$http(`https://graph.facebook.com/v6.0/${this.getUser}/albums?access_token=${this.getToken}&method=get&pretty=0&sdk=joey&suppress_http_code=1`).then(res=> {
        self.$store.dispatch('setAlbums', res.data);
      })
      await this.$http(`https://graph.facebook.com/v6.0/${this.getUser}?access_token=${this.getToken}&method=get&pretty=0&sdk=joey&suppress_http_code=1`).then(res=> {
        self.$store.dispatch('setUser', res.data);
      })
      for(let el of JSON.parse(this.albums).data) {
        await self.$http(`https://graph.facebook.com/v6.0/${el.id}/photos?access_token=${this.getToken}&method=get&pretty=0&sdk=joey&suppress_http_code=1`).then(async res=> {
            el['length'] = res.data.data.length;
          await self.$http(`https://graph.facebook.com/v6.0/${res.data.data[0].id}/picture?access_token=${this.getToken}&debug=all&format=json&method=get&pretty=0&redirect=false&suppress_http_code=1&transport=cors`).then(res=> {
              el['img'] = res.data.data.url;
              self.albumList.push(el);
          })
        })
      }
    },
    computed: {
            ...mapGetters(['getUser', 'getToken', 'getUserName', 'albums'])
        }

}
</script>

<style>

</style>