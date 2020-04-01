export default {
		login(ctx, data) {
			localStorage.setItem('user', data.userID);
			localStorage.setItem('token', data.accessToken);
			ctx.commit('SET_USER', data.userID);
			ctx.commit('SET_TOKEN', data.accessToken);
		},
		setUser(ctx, data) {
			localStorage.setItem('userName', data.name);
			ctx.commit('SET_USER_NAME', data.name);
		},
		// logout(ctx) {
			// authService.logout();
			// router.go('/');
		// }
}
