<template>
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    test
              </div>
          </div>

      </div>
  </div>
</template>

<script>

export default {
    data() {
       return {

       }
    },
    methods: {
   
    
 
    },
    created(){
      window.FB.api(
                `/me/albums`,
                function (response) {
                  
                    console.log(response)
                  
                }
            );
    }

}
</script>

<style>

</style>