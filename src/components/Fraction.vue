<template>
    <div >
        <div class='fraction'>
            <NumInput :category='"numerator"' v-model='fraction.numerator'/>
            <NumInput :category='"denominator"' v-model='fraction.denominator'/>
        </div>
        <SymbolInput v-if='last' v-model='fraction.symbol'/>
    </div>
</template>

<script>
import NumInput from '../components/NumInput';
import SymbolInput from '../components/SymbolInput';

export default {
    name: 'fraction',
    props: ['last', 'id'],
    components: { NumInput, SymbolInput },
    data () {
        return {
            fraction: {
                numerator: 1,
                denominator: 1,
                symbol: ''
            }
        }
    },
    watch: {
        fraction: {
            handler (val) { 
                let id = this.id;
                let { numerator, denominator, symbol } = val;
                this.getFraction({ id, ...{ numerator, denominator, symbol } })
                this.$emit('calculate')
            },
            deep: true
        }
    },
    mounted() {
        let id = this.id;
        let { numerator, denominator, symbol } = this.fraction;
        this.getFraction({ id, ...{ numerator, denominator, symbol } });
    },
    methods: {
        getFraction (event) {
            this.$emit('getFraction', event)
        }
    }
}
</script>

<style lang='scss' scoped>
@import '../assets/styles/variables.scss';
    .fraction {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 110px;
        margin: 10px 5px;
        .num-input:nth-child(1) {
            border-bottom: 2px solid $text-color;
            padding-bottom: 20px;
        }
    }
</style>