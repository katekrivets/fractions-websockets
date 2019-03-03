import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
//lazy loading for diff pages diff js
function loadView(view) {
	return () => import(`@/views/${view}.vue`)
}
export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{ 
			path: '/', 
			redirect: '/fractions' 
		},
		{
			path: '/fractions',
			name: 'fractions',
			component: loadView('Fractions')
		},
		{
			path: '/websocket',
			name: 'websocket',
			component: loadView('WebSocket')
		}
	]
})
