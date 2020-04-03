<template>
	<div id="app">
		<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
			<ul class="navbar-nav pt-5"></ul>
		</nav>
		<div class="container-fluid" v-if="getUser">
	        <div class="row justify-content-center">
	            <div class="col-md-8">

	                <ul class="nav nav-tabs mt-1 mb-3">
	                	<li class="nav-item"><router-link href="" to="/home" class="nav-link "><i class="fa fa-bookmark"></i></router-link></li>
	                	<li class="nav-item"><router-link href="" to="/upload" class="nav-link"><i class="fa fa-cloud-upload"></i></router-link></li>
	                	
	                </ul>
	            </div>
	      	</div>
		</div>
    <router-view/>
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
	computed: {
		...mapGetters(['getUser'])
	}
}

</script>

</script>
<style>

</style>
