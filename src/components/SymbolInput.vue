<template>
    <div class='symbol-input'>
        <select v-model='inputVal' class='select'> 
            <option 
            v-for='operator in oprerators' 
            :key='operator' 
            :value='operator'>
                {{operator}}
            </option>
        </select>
    </div>
</template>

<script>
export default {
    name: 'symbol-input',
    data () {
        return {
            oprerators: ['+', '-', 'x', '/'],
            inputVal: ''
        }
    },
    watch: {
        inputVal(val) {
            this.$emit('input', val);
        }
    },
    mounted() {
        this.inputVal = '+';
    }
}
</script>

<style lang='scss' scoped>
$lightgray: #efefef;
.symbol-input {
    line-height: 100px;
    .select {
        width: 28px;
        height: 28px;
        margin: 5px;
        font-size: 20px;
        line-height: 20px;
        appearance: none;
        text-align: center;
        text-align-last: center;
        text-align: -webkit-center;
        border: none;
        border-radius: 3px;
        background-color: $lightgray;
        transition: background-color 300ms linear;
        &:focus {
            outline: none;
        }
        &:hover {
            background: darken($lightgray, 5%)
        }
    }
    
}
</style>