// import * as productService from '../../../services/productService'
// import {router} from '../../../router'
export default {

	setAlbums(ctx, data) {
		localStorage.setItem('albums', JSON.stringify(data));
		ctx.commit('SET_ALBUMS', JSON.stringify(data));
	},


}
