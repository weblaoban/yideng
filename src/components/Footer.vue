<template>
  <div id="foot">
    <div v-show="showFootContent" class="container">
      <h4>联系信息</h4>
      <img src="../assets/image/line.png" alt />
      <div class="infoContent">
        <ul class="clear">
          <li>
            <p class="title">上海CBD总部</p>
            <p class="desc">地址：上海市黄浦区西藏中路18号港陆广场1906</p>
            <p class="desc">电话：+86-21-53080219</p>
            <p class="desc">传真：+86-21-53089827</p>
            <p class="desc">邮箱: contact@eastern-sha.com</p>
          </li>
          <li>
            <p class="title">浦东机场分公司</p>
            <p class="desc">地址：上海市浦东新区航城七路785号峭迪智慧园3幢</p>
            <p class="desc">电话：+86+21-53080005</p>
          </li>
          <li>
            <p class="title">监管仓库</p>
            <p class="desc">地址：上海市浦东机场海关监管第二仓储区706甲</p>
            <p class="desc">电话：+86+21-68351198</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="container">
      <img src="../assets/image/line.png" alt />
      <p
        class="copyRight"
      >Copyright © 2020. Shanghai Eastern Network Logistics Co.,Ltd All rights reserved.</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "foot",
  props: {
    showFootContent: Boolean
  }
};
</script>
<style lang="scss" scoped>
#foot {
  background: url(../assets/image/footer-bg.png);
  background-size: 100% 100%;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  min-width: 1200px;
  padding: 63px 0 53px 0;
  .container {
    width: 1200px;
    img {
      display: block;
      margin-bottom: 24px;
      width: 100%;
    }
    h4 {
      font-size: 28px;
      color: #fff;
      text-align: left;
      line-height: 47px;
      font-weight: 600;
    }
    .copyRight {
      font-size: 15px;
      color: #cecece;
      text-align: center;
    }
    .infoContent {
      ul {
        width: 100%;
        &:last-child {
          padding: 0;
        }
        li {
          float: left;
          width: 33%;
          padding-right: 20px;
          p.title {
            font-size: 28px;
            color: #fff;
            margin-bottom: 20px;
            text-align: left;
          }
          p.desc {
            font-size: 22px;
            color: #fff;
            text-align: left;
            line-height: 44px;
            font-weight: 400;
            &:last-child {
              margin-bottom: 18px;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 750px) {
  #foot {
    min-width: auto;
    padding-top: 70px;
    padding-bottom: 92px;
    .container {
      width: 100%;
      padding: 0 30px;
      .infoContent {
        ul {
          width: 100%;
          &:last-child {
            padding: 0;
          }
          li {
            float: none;
            width: 100%;
            padding-right: 0;
            margin-bottom: 49px;
            &:last-child {
              margin-bottom: 26px;
            }
            p.title {
              margin-bottom: 0.1rem;
            }
          }
        }
      }
      .copyRight {
        font-size: 13px;
      }
    }
  }
}
</style>