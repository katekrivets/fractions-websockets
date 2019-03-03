<template>
	<div class='comment'>
		<h4 class='comment-text'>{{data.message}}</h4>
        <button @click='deleteComm(data.id)' class='button'>DELETE</button>
	</div>
</template>

<script>
	export default {
		name: 'comment',
        props: ['data', 'deleteComm']
	}
</script>

<style lang="scss" scoped> 
	@import '../assets/styles/variables.scss';
    .comment {
		box-sizing: border-box;
		background: $white;
		width: 100%;
		padding: 10px;
		margin: 15px 0;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		position:relative;
		box-shadow: $shadow;
		
		.button {
			position: relative;
			bottom: -12px;
			flex-basis: 20%;
		}
		@include button($comment-button, 130px, 35px)
		.comment-text {
			padding: 0 20px;
			margin: 15px 0;
			flex-basis: 70%;
			text-align: left;
		}
		@media (max-width: 768px) {
			.button {
				bottom: 0;
				align-self: flex-end;
				flex-basis: 30%;
			}
			@media (max-width: 550px) {
				flex-direction: column;
			}
		}
	}
</style>