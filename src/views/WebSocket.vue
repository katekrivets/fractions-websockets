<template>
	<div class='web-socket'>
		<h3 class='error' v-if='error'>{{error}}</h3>
		<button @click='connect' v-if='!connected' class='button connect'>connect</button>
		<button @click='disconnect' v-else class='button disconnect'>disconnect</button>
	
		<div class='comments' v-if='connected'>
		<Comment 
			v-for='comment in comments' 
			:key='comment.id' 
			:data='comment' 
			:deleteComm='deleteComment' />
		</div>
		<div v-else class='loader'>
			<div></div>
		</div>
	
	</div>
</template>

<script>
	import Comment from '../components/Comment';
	export default {
		name: 'web-socket',
		components: {
			Comment
		},
		data() {
			return {
				comments: [{
						message: 'Тестовый коммент 1',
						id: 0
					},
					{
						message: 'Это шедевр',
						id: 1
					},
					{
						message: 'Это прекрасно',
						id: 2
					},
					{
						message: 'Лучшее, что я видел',
						id: 3
					},
					{
						message: 'Два чая этому автору',
						id: 4
					},
					{
						message: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
						id: 5
					},
					{
						message: 'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.',
						id: 6
					},
					{
						message: 'At solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles.',
						id: 7
					},
					{
						message: 'What`s happened to me?',
						id: 8
					},
					{
						message: 'Два чая этому автору',
						id: 9
					}
				],
				logs: [],
				connected: false,
				error: ''
			}
		},
		methods: {
			connect() {
				// creating connection to websocket
				this.socket = new WebSocket("wss://echo.websocket.org");
				// declaring callback on open
				this.socket.onopen = () => {
					this.connected = true;
					this.logs.push({
						event: "Connected to",
						data: 'wss://echo.websocket.org'
					})

				};
				// callback on recieving data
				this.socket.onmessage = ({ data }) => {
					this.comments = this.comments.filter(el => el.id != data)
					this.error = false

				};
				// error handler
				this.socket.onerror = ({ error }) => {
					this.error = error
				};
	
			},
			disconnect() {
				this.socket.close();
				this.connected = false;
				this.logs = [];
			},
			deleteComment(id) {
				this.socket.send(id);
			}
		},
		created() {
			this.connect();
		},
		beforeDestroy() {
			this.disconnect()
		},
	}
</script>

<style lang='scss' scoped>
	@import '../assets/styles/variables.scss';

	.web-socket {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		width: 80%;
		margin: 0 auto;
		padding: 20px;

		.comments {
			width: 100%;
		}

		@include loader;
		@include button($button-connect, 200px, 40px);

		.button {
			margin-bottom: 20px;
			&.disconnect {
				background: $button-disconnect
			}
		}
		
		.error {
			color: $error;
		}
	}
</style>
