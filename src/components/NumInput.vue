<template>
    <div class='num-input'>
        <input 
            type='number' 
            :category='category'
            v-model='inputVal'
            :defaultValue='0'
            :style='{ width: `${width}px`, boxShadow: `${highlight}` }'/>
    </div>
</template>

<script>
export default {
    name: 'num-input',
    props: [ 'category', 'value' ],
    data () {
        return {
            inputVal: this.value,
            width: '30',
            error: false
        }
    },
    watch: {
        inputVal(val) {
            if(this.category == 'denominator' && val == 0) {
                this.error = true;
                this.$emit('input', '');
            } else if (val !== '') {
                this.error = false;
                this.width = val.length > 5?60:((val.length + 1)*10)
                this.$emit('input', parseInt(val));
            } else if (val == '') {
                this.error = true;
                this.$emit('input', '');
            }
        }
    }, 
    computed: {
        highlight() {
            return this.error?'0 0 2px 3px #ce201a':'none'
        }
    }
}

</script>

<style lang='scss' scoped>
@import '../assets/styles/variables.scss';
    .num-input {
        input {
            text-align: center;
            height: 30px;
            min-width: 30px;
            font-size: 18px;
            appearance: none;
            -moz-appearance: textfield;
            border: 1px solid darken($lightgray, 15%);
            border-radius: 3px;
            &::-webkit-outer-spin-button, 
            &::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
            }
        }
    }
</style>