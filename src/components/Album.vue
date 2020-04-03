<template>
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-md-8">
               <router-link to="/home"><i class="fa fa-caret-left"></i> {{album}}</router-link><hr>
              <div class="row">
                  <div v-for='photo in photos' class="col-md-2" :key='photo.id'>
                    <router-link :to="`/picture/${photo.id}`">
                      <img :src="`${photo.url}`" width="200px">
                    </router-link>
                  </div>
              </div>
              <div>
                   <div class="align-self-center">
                      <div class="text-center">
                          <div class="col-11">
                            <button class="btn btn-primary mt-5" @click='loadPhotos(from)'>More</button>
                            
                          </div>
                      </div>
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
        limit: 2,
        from: 0,
        photos: [],
        albumItems: [],
        album: ''
       }
    },
    methods: {
   
      async loadPhotos(from = 0){
        // console.log(this.albumItems)
        this.from += this.limit;
        const self = this;
        
        for(let el of this.albumItems.slice(from, from + this.limit)){
          await self.$http(`https://graph.facebook.com/v6.0/${el.id}/picture?access_token=${this.getToken}&debug=all&format=json&method=get&pretty=0&redirect=false&suppress_http_code=1&transport=cors`).then(res=> {
              let obj = {}
              obj.id = el.id;
              obj.url = res.data.data.url;

              self.photos.push(obj)
            
          })
        }

      }
 
    },
    async created(){
      JSON.parse(this.albums).data.map(el=> {
        if(el.id == this.$route.params.id){
          this.album = el.name
        }
      })
      const self = this;
      await this.$http(`https://graph.facebook.com/v6.0/${this.$route.params.id}/photos?access_token=${this.getToken}&method=get&pretty=0&sdk=joey&suppress_http_code=1`).then(res=> {
        self.albumItems = res.data.data;
      })
      
    this.loadPhotos();
    },
    computed: {
            ...mapGetters(['getUser', 'getToken', 'getUserName', 'albums'])
        }

}
</script>

<style>

</style>
// (#4) Application request limit reached