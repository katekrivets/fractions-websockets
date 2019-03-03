<template>
	<div id="app">
		<div id="nav">
			<router-link to="/fractions">Fractions</router-link> |
			<router-link to="/websocket">WebSocket</router-link>
		</div>
		<router-view/>
	</div>
</template>

<style lang="scss">
	@import './assets/styles/variables.scss';
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: $text-color;
		background: $lightgray;
		min-height: 100vh;
		height: 100%;
	}
	
	#nav {
		padding: 30px;
		a {
			font-weight: bold;
			font-size: 1.2em;
			color: $text-color;
			text-decoration: none;
			margin: 0 10px;
			text-shadow: 2px 2px #cfcfcfb7;
			&.router-link-exact-active {
				color: darken($fraction-heading, 25%);
				
			}
		}
	}
</style>
