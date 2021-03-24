<template>
    <div class="login">
        <div class="mask">
            <div class="maskContent"></div>
        </div>
        </div>
</template>
<script>
export default {
    name:'login'
}
</script>
<style lang="scss" scoped>
.mask{
    position:absolute;
    top:0;
    width:100%;
    min-height: 100vh;
    background: rgba(0,0,0,0.5);
    .maskContent{
        width: 1063px;
        height: 695px;
        background: rgba(255,255,255,0.8);
        border-radius: 10px;
        margin: 50px auto 0;
    }
}

</style>