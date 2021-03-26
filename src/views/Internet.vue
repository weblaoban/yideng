<template>
  <div id="internet">
    <div class="banner">
      <img src="../assets/image/banner2.png" alt />
      <h2>服务产品</h2>
    </div>
    <div class="container">
      <div class="internet">
        <div class="title">
          <div class="circle"></div>
          <p>关于伊登</p>
          <div class="line"></div>
        </div>
        <div class="content clear">
          <div class="img">
            <!-- <img src="../assets/image/net.png" alt /> -->
          </div>
          <p>
            <span>空运：</span>服务覆盖全球, 满足几乎所有进出口贸易的空运需求。
          </p>
          <p>
            <span>海运：</span>已于COSCO, MAERSK, MSC, EVERGREEN, YANGMING, WANHAI等多家船公司保持了长久稳定的合作关系, 通行亚、欧、非、南美、北美各航线。
          </p>
          <p>
            <span>铁路运输：</span>通行中国-欧洲各国、中国-亚洲各国、中国-蒙古等路线。
            <br />与西安、郑州、成都、重庆、沈阳、武汉、汉堡、华沙、马拉、杜伊斯堡、乌兰巴托、中亚等数十个站点保持长期往来。
          </p>
          <p>
            <span>合同物流:</span>自有及合同车辆千余部，门到门运输服务覆盖全国1,000多个城市。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "internet"
};
</script>
<style lang="scss" scoped>
#internet {
  background: #fff;
  padding-bottom: 1px;
  min-width: 1200px;
  .banner {
    position: relative;
    margin-bottom: 120px;
    img {
      display: block;
      width: 100%;
      min-width: 1200px;
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

  .internet {
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
    .content {
      .img {
        width: 100%;
        height: 747px;
        overflow: hidden;
        background: url(../assets/image/net.png);
        background-position: center center;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        margin-bottom: 66px;
        &:hover {
          background-size: 110% 110%;
        }
        // img {
        //   height: 747px;
        //   display: block;
        //   margin: 0 auto;
        //   margin-bottom: 66px;
        // }
      }

      p {
        font-size: 25px;
        color: #000;
        margin-bottom: 25px;
        line-height: 43px;
        text-align: left;
        font-weight: 400;
        span {
          font-size: 25px;
          font-weight: 600;
        }
      }
    }
  }
}

@media screen and (max-width: 750px) {
  #internet {
  min-width: auto;
    .banner {
      img {
        min-width: auto;
      }
    }
  }
}
</style>