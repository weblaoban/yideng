<template>
    <div id="tip" v-text="tipMessage"></div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
    name: 'tip',
    computed:{
        ...mapGetters(['tipMessage'])
    },
}
</script>
<style lang="scss" scoped>
#tip{
    position: absolute;
    padding: 20px;
    max-width: 400px;
    text-align: center;
    font-size: 24px;
    color:#fff;
    background:rgba(0,0,0,0.5);
    border-radius: 15px;
    z-index: 1001;
    left:0;
    right:0;
    top: 210px;
    margin: auto;
}
</style>