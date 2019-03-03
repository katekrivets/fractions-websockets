<template>
	<div>
		<section class='fractions'>
			<h3 class='heading'>Fraction Calculator</h3>
			<ul class='fraction-description'>
				<li>calculates fractions considering operator priority</li>
				<li>you can calculate only numbers</li>
				<li>denominator can't be a zero</li>
			</ul>
			<h4 v-if='result.error' class='error-message'>{{result.error}}</h4>
			<Fraction 
				v-for='i in elements.length' 
				:key='i' 
				:last='i!==elements.length' 
				:id='i' 
				@getFraction='set' 
				@calculate='calculateFraction' 
			/>
			<div class='output'>
				<span>=</span> 
				<div class='result' v-if='result.numerator!==undefined'>
					<div class='num numerator'>{{`${result.numerator}`}}</div>
					<div class='num denominator'>{{`${result.denominator}`}}</div>
				</div>
				<div class='error' v-else>{{result.message}}</div>
			</div>
			<button @click='pushElem' class='button'>ADD FRACTION</button>
		</section>
	</div>
</template>

<script>
	import Fraction from '../components/Fraction';
	import { calculate } from '../calculate.js';
	
	export default {
		name: 'fractions',
		components: {
			Fraction
		},
		data() {
			return {
				result: '',
				elements: {
					length: 2,
					content: []
				}
			}
		},
		methods: {
			set(val) {
				const { id, numerator, denominator, symbol } = val;
				this.elements.content[id] = { numerator, denominator, symbol };
			},
			remove(val) {
				const id = val.id;
				this.elements.content.splice(id, 1)
			},
			pushElem() {
				this.elements.length++;
			},
			calculateFraction() {
				const fractions = [...this.elements.content].filter(el => el);
				let result = calculate(fractions);
				this.result = result
				return result
			}
		}
	}
</script>

<style lang='scss'>
@import '../assets/styles/variables.scss';
	.fractions {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		width: 80%;
		margin: 0 auto;
		padding: 35px 20px 45px;
		background: $white;
		box-shadow: $shadow; 
		position: relative;
		.fraction-description {
			flex-basis: 100%;
			text-align: left;
		}
		.error-message {
			color: $error;
			flex-basis: 100%;
			text-align: left;
			margin: 0 0 10px;
		}
		div {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
		}
		.heading {
			position: absolute;
			left: -10px;
			top: -10px;
			margin: 0;
			background-color: $fraction-heading;
			padding: 10px 15px;
			box-shadow: $shadow;
		}
		@include button($fraction-button,  180px, 40px)
        .button {
            position: absolute;
            bottom: 10px;
            right: 10px;
        }
		.output {
			height: 110px;
			span {
				font-size: 25px;
				font-weight: 600;
				margin: 0 10px;
			}
			.result {
				height: 75%;
				display: flex;
				flex-direction:column;
				justify-content: space-between;
				margin: 5px;
				.num {
					min-width: 35px;
					height: 40px;
					font-size: 25px;
					font-weight: 600;
					&.numerator {
						padding-bottom: 2px;
						border-bottom: 2px solid $text-color;
					}
				}
			}
			.error {
				font-size: 25px;
				font-weight: 600;
				color: $error;
			}
		}
	}
	@media (max-width: 768px) {
		.fractions {
			width: auto;
			margin: 15px;
			padding: 35px 10px 50px;
		}
	}
</style>