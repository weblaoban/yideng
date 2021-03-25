<template>
  <div id="contract">
    <div class="banner">
      <img src="../assets/image/banner2.png" alt />
      <h2>联系伊登</h2>
    </div>
    <div class="container">
      <div class="contract">
        <div class="title">
          <div class="circle"></div>
          <p>关于伊登</p>
          <div class="line"></div>
        </div>
        <div class="map"></div>
        <div class="info clear">
          <ul>
            <h4>上海CBD总部</h4>
            <li>上海市黄浦区西藏中路18号港陆广场1906</li>
            <li>+86-21-53080219</li>
            <li>+86-21-53089827</li>
            <li>contact@eastern-sha.com</li>
          </ul>
          <ul>
            <h4>浦东机场分公司</h4>
            <li>上海市浦东新区航城七路785号峭迪智慧园3幢</li>
            <li>+86+21-53080005</li>
          </ul>
          <ul>
            <h4>监管仓库</h4>
            <li>上海市浦东机场海关监管第二仓储区706甲</li>
            <li>+86+21-68351198</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//坐标  港陆广场：121.485297,31.235345    智慧：121.77183,31.150607   仓储：121.773815,31.17121
export default {
  name: "contract"
};
</script>
<style lang="scss" scoped>
#contract {
  background: #fff;
  padding-bottom: 1px;
  .banner {
    position: relative;
    margin-bottom: 120px;
    img {
      display: block;
      width: 100%;
    }
    h2 {
      font-size: 62px;
      color: #fff;
      text-align: center;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      font-weight: 500;
      height: 60px;
    }
  }

  .contract {
    margin-bottom: 120px;
    .title {
      height: 132px;
      margin: 0 auto;
      margin-bottom: 40px;
      .circle {
        width: 50px;
        height: 50px;
        border-radius: 25px;
        background: #e67016;
        margin: 0 auto;
      }
      p {
        font-size: 37px;
        color: #000;
        text-align: center;
        line-height: 82px;
      }
      .line {
        width: 187px;
        border-bottom: 4px solid #e67016;
        margin: 0 auto;
      }
    }

    .info {
      ul {
        float: left;
        height: 247px;
        &:first-child {
          width: 385px;
          border-right: 1px dashed #000;
          padding-right: 48px;
        }
        &:nth-child(2) {
          width: 457px;
          border-right: 1px dashed #000;
          padding-left: 93px;
          padding-right: 45px;
        }
        &:nth-child(3) {
          width: 353px;
          padding-left: 56px;
          padding-right: 11px;
        }
        h4 {
          font-size: 28px;
          color: #000;
          font-weight: 500;
          text-align: left;
          margin-bottom: 20px;
        }
        li {
          padding-left: 30px;
          font-size: 22px;
          font-weight: 400;
          text-align: left;
          margin-bottom: 10px;
          &:nth-child(2) {
            background: url(../assets/image/contract/icon1.png);
            background-position: left top;
            background-repeat: no-repeat;
            background-size: 18px 27px;
          }
          &:nth-child(3) {
            background: url(../assets/image/contract/icon2.png);
            background-position: left 3px;
            background-repeat: no-repeat;
            background-size: 24px 23px;
          }
          &:nth-child(4) {
            background: url(../assets/image/contract/icon3.png);
            background-position: left 2px;
            background-repeat: no-repeat;
            background-size: 24px 25px;
          }
          &:nth-child(5) {
            background: url(../assets/image/contract/icon4.png);
            background-position: left 5px;
            background-repeat: no-repeat;
            background-size: 26px 19px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 750px) {
  #contract {
  }
}
</style>