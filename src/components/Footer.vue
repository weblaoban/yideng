<template>
    <div id="footer">
        <div class="container">
            <h4>联系信息</h4>
            <img src="../assets/image/line.png" alt="">
            <div class="infoContent">
<ul>
    <li>
        <p class="title"></p>
        <p class="desc"></p>
    </li>
    <li>
        <p class="title"></p>
    </li>
    <li>
        <p class="title"></p>
    </li>
</ul>
            </div>
            <img src="../assets/image/line.png" alt="">
            <p class="copyRight">Copyright © 2020. Shanghai Eastern Network Logistics Co.,Ltd All rights reserved.</p>
        </div>
    </div>
</template>
<script>
export default {
    name:'footer'
}
</script>
<style lang="scss" scoped>
#footer{
    background: url(../assets/image/footer-bg.png);
    background-size: 100% 100%;
    background-position: center center;
    background-repeat: no-repeat;
    width: 100%;
    .container{
        width: 1200px;
        padding: 63px 0 53px 0;
        img{
            display: block;
            margin-bottom: 24px;
        }
        h4{
            font-size: 28px;
            color: #fff;
            text-align: left;
            line-height: 47px;
            font-weight: 600;
        }
        .copyRight{
            font-size: 15px;
            color: #CECECE;
            text-align: center;
        }
        .infoContent{
            ul{
                width: 33%;
                padding-left: 20px;
                &:last-child{
                    padding:0;
                }
                li{
                    p.title{
                        font-size: 28px;
                        color: #fff;
                        margin-bottom: 20px;
                    }
                }
            }
        }
    }
}
</style>