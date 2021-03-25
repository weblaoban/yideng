<template>
    <div class="list-box">
        <div class="container">
            <div class="title">我的货运信息</div>
            <div class="query-box clear">
                <input placeholder="输入空运分单号或空运主单号或作业编号进行查询" class="query-input"/>
                <div class="query-button">查询</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'List',
}
</script>

<style lang="scss" scoped>
.list-box{
    background: #fff;
    .title{
        font-size: 28px;
        color: #787878;
        margin-bottom: 26px;
    }
    .query-input{
        width: 800px;
        height: 50px;
        border: 1px solid #000000;
        border-radius: 5px;
        float: left;
        margin-right: 24px;
    }
    .query-button{
        width: 108px;
        height: 52px;
        background: #e67016;
        line-height: 52px;
        border-radius: 4px;
        float: left;
        color: #fff;
    }
}

@media screen and (max-width: 750px) {
}
</style>