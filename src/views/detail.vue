<template>
  <div class="detail">
    <div class="top">
      <van-icon name="arrow-left" @click="goBack" class="detail-leftIcon" />
      <van-notice-bar
        text="我想去旅行邀您体验，更好的享受，祝您住店愉快"
        left-icon="volume-o"
        background="#F5DEB3"
        color="#FF8C00"
      />
    </div>
    <!-- 弹出层 -->
    <van-popup v-model="show" overlay closeable position="bottom" :style="{ height: '60%' }">
      <div class="titel">
        <p>酒店信息</p>
      </div>
      <div class="content">
        <div class="intro">
          <p>酒店简介</p>
          <span>硬件是直观看到的酒店位置，酒店设计，酒店房间设施，酒店配套（比如健身房，SPA，什么样的餐厅有几个，儿童俱乐部等）</span>
        </div>
        <div class="facility">
          <p>酒店设施</p>
          <span>软件就是酒店服务，从接机开始到行李员，前台服务，客房服务，餐厅人员的态度和你遇到问题时他们的应对态度和处理方式甚至后续跟进等。</span>
        </div>
        <div class="hint">
          <p>特别提示</p>
          <span>环境优美，地理位置好，交通方便，房间舒适卫生，服务人员很热情，乐于提供各种帮助，早餐丰富。设施很人性化，网络高速信号好，窗外风景好。有特别的开床服务，房间小摆件的设计也很有特色。性价比不错</span>
        </div>
        <div class="phone">
          <p>联系方式</p>
          <span>0755-908-99008</span>
        </div>
      </div>
    </van-popup>
    <!-- 轮播图 -->
    <div class="swipper">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <div class="hotelInfo">
      <div class="special">
        <span class="tese">酒店名称：维也纳国际酒店</span>
        <span @click="toMap">
          地图
          <van-icon name="arrow" class="rightarrow" />
        </span>
      </div>

      <div class="special">
        <span class="tese">酒店特色：2222222222222222222222222222222222222222</span>
        <span @click="showDetail">
          详情
          <van-icon name="arrow" class="rightarrow" />
        </span>
      </div>
    </div>
    <demo />
    <!-- 折叠面板 -->
    <van-collapse v-model="activeName" accordion>
      <van-collapse-item
        icon="http://img2.imgtn.bdimg.com/it/u=106114937,2313334905&fm=26&gp=0.jpg"
        title="高级双床房"
        value="日均 ￥536  起"
        v-for="(item, index) in 8"
        :key="index"
        size="large"
        :name="index"
      >
        <div class="content" v-for="(item, index) in 3" :key="index">
          <!-- <img src="http://img2.imgtn.bdimg.com/it/u=1165461476,304980642&fm=15&gp=0.jpg" alt=""> -->
          <div class="left">
            <p>不含早 双床</p>
            <p>无预定条款</p>
            <p>不可取消</p>
            <p class="check">待查</p>
          </div>
          <div class="right">
            <p>
              日均
              <span>￥536</span>
            </p>
            <p>总价￥536</p>
            <van-button type="primary" size="mini" @click="reserve">预定</van-button>
          </div>
        </div>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>
import demo from "../components/demo";
export default {
  components: {
    demo
  },
  data() {
    return {
      images: [
        "https://f10.baidu.com/it/u=1208544201,1064095414&fm=72",
        "http://img0.imgtn.bdimg.com/it/u=1692231286,3926982492&fm=26&gp=0.jpg",
        "http://img3.imgtn.bdimg.com/it/u=2920944932,3026420003&fm=26&gp=0.jpg"
      ],
      show: false,
      activeName: "1"
    };
  },
  methods: {
    toMap() {
      this.$router.push("./map");
    },
    //点击返回到上一页面
    goBack() {
      this.$router.back();
    },
    showDetail() {
      this.show = !this.show;
    },
    reserve() {
      // console.log('预定成功')
      this.$router.push("./reservation");
    }
  }
};
</script>

<style lang="less">
@appSize: 1/37.52rem;
.detail {
  background-color: #fff;
}

.top {
  width: 100%;
  height: 40 * @appSize;
  background-color: #f5deb3;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;

  .detail-leftIcon {
    font-size: 22 * @appSize;
    color: #fff;
    float: left;
    line-height: 40 * @appSize;
    margin: 0 10 * @appSize;
  }
  .van-notice-bar {
    .van-notice-bar__left-icon,
    .van-notice-bar__right-icon {
      min-width: 30 * @appSize;
    }
  }
}
.swipper {
  margin-top: 40 * @appSize;
  padding: 10 * @appSize;
  box-sizing: border-box;
}
.van-swipe {
  width: 100%;
  height: 220 * @appSize;
  border-radius: 10 * @appSize;

  img {
    width: 100%;
    height: 100%;
  }
}
.hotelInfo {
  color: #989898;
  div {
    width: 100%;
    height: 40 * @appSize;
    font-size: 16 * @appSize;
    text-indent: 10 * @appSize;
    line-height: 40 * @appSize;
    border-bottom: 1 * @appSize solid #ccc;
  }
  .special {
    display: flex;
    justify-content: space-between;
    .tese {
      width: 290 * @appSize;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .special,
  .name {
    span {
      .rightarrow {
        right: 18px;
        top: 3px;
      }
    }
  }
}
.van-collapse {
  background-color:#fff;
  padding: 2 * @appSize;
  box-sizing: border-box;
  // van-cell van-cell--clickable van-cell--large

  .van-collapse-item {
    margin-bottom: 10 * @appSize;
    .van-cell {
      display: flex;
      align-items: center;
    }
    .van-cell--large {
      height: 64 * @appSize;
    }
    .van-collapse-item__title {
      padding: 0 6 * @appSize;
      box-sizing: border-box;

      .van-icon__image {
        width: 110 * @appSize;
        height: 60 * @appSize;

        .van-image__img{
          margin-top: -18 * @appSize;
        }
      }
    }
    .van-collapse-item__wrapper {
      .van-collapse-item__content {
        background-color: #ddd;
        padding: 0;
      }
    }
    .content {
      display: flex;
      border-bottom: 1px solid #ccc;
      margin-bottom: 5 * @appSize;

      // img{
      //   width: 90 * @appSize;
      //   height: 70 * @appSize;
      //   margin: 8 * @appSize 20 * @appSize 0 8 * @appSize;
      // }
      .left {
        display: flex;
        flex: 1;
        flex-direction: column;
        margin-bottom: 0;
        margin-left: 10 * @appSize;

        .check {
          color: orange;
        }
      }
      .right {
        p {
          font-size: 10 * @appSize;
          margin-bottom: 4 * @appSize;
          span {
            color: red;
          }
        }
      }
    }
  }
}
.titel {
  width: 100%;
  height: 40 * @appSize;
  background-color: orange;
  p {
    text-align: center;
    line-height: 40 * @appSize;
    color: #fff;
    font-size: 14 * @appSize;
  }
}
.content {
  padding: 10 * @appSize;
  box-sizing: border-box;
  div {
    margin-bottom: 20 * @appSize;
    p {
      font-size: 14 * @appSize;
      font-weight: bold;
    }
    span {
      font-size: 12 * @appSize;
      color: #666;
    }
  }
}
</style>
