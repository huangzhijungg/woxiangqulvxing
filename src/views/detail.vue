<template>
  <div class="detail">
    <div class="top">
      <van-icon name="arrow-left" @click="goBack" />
      <van-notice-bar
        text="我想去旅行邀您体验，更好的享受，祝您住店愉快"
        left-icon="volume-o"
        background="#ecf9ff"
        color="#1989fa"
      />
    </div>
    <!-- 弹出层 -->
    <van-popup
      v-model="show"
      overlay
      closeable
      position="bottom"
      :style="{ height: '60%' }"
    >
      <div class="titel">
        <p>酒店信息</p>
      </div>
      <div class="content">
        <div class="intro">
          <p>酒店简介</p>
          <span
            >硬件是直观看到的酒店位置，酒店设计，酒店房间设施，酒店配套（比如健身房，SPA，什么样的餐厅有几个，儿童俱乐部等）</span
          >
        </div>
        <div class="facility">
          <p>酒店设施</p>
          <span
            >软件就是酒店服务，从接机开始到行李员，前台服务，客房服务，餐厅人员的态度和你遇到问题时他们的应对态度和处理方式甚至后续跟进等。</span
          >
        </div>
        <div class="hint ">
          <p>特别提示</p>
          <span
            >环境优美，地理位置好，交通方便，房间舒适卫生，服务人员很热情，乐于提供各种帮助，早餐丰富。设施很人性化，网络高速信号好，窗外风景好。有特别的开床服务，房间小摆件的设计也很有特色。性价比不错</span
          >
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
        <span class="tese">酒店名称：济州肯辛顿酒店</span>
        <span>
          地图
          <van-icon name="arrow" class="rightarrow" />
        </span>
      </div>

      <div class="special">
        <span class="tese"
          >酒店特色：2222222222222222222222222222222222222222</span
        >
        <span @click="showDetail">
          详情
          <van-icon name="arrow" class="rightarrow" />
        </span>
      </div>
    </div>
    <!-- 折叠面板 -->
    <van-collapse v-model="activeName" accordion>
      <van-collapse-item
        title="高级双床房"
        value="日均 ￥536  起"
        v-for="(item, index) in 10"
        :key="index"
        :name="index"
      >
        <div class="content" v-for="(item, index) in 3" :key="index">
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
            <van-button type="primary" size="mini" @click="reserve"
              >预定</van-button
            >
          </div>
        </div>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        'https://f10.baidu.com/it/u=1208544201,1064095414&fm=72',
        'http://img0.imgtn.bdimg.com/it/u=1692231286,3926982492&fm=26&gp=0.jpg',
        'http://img3.imgtn.bdimg.com/it/u=2920944932,3026420003&fm=26&gp=0.jpg'
      ],
      show: false,
      activeName: '1'
    }
  },
  methods: {
    //点击返回到上一页面
    goBack() {
      this.$router.back()
    },
    showDetail() {
      this.show = !this.show
      // console.log(111);
      //       this.$dialog.alert({
      //         title: "酒店信息", //加上标题
      //         message: `客房:有221间空调客房提供冰箱和免费迷你吧物品；您定能在旅途中找到家的舒适。客房设有私人阳台。带有数码节目的LED 电视可满足您的娱乐需求；同时提供免费无线上网帮助您与朋友保持联系。配备独立的浴缸和淋浴的浴室提供浸泡浴缸和大花洒淋浴喷头.设施:您可到 SPA 慰劳一下自己，这里提供按摩、身体护理和面部护理。一定要去体验 2 个室内和2 个室外游泳池以及健身俱乐部等度假设施。此酒店的其他特色包括免费无线上网、礼宾服务和礼品店/报摊。餐饮:
      // 酒店设有 4 间餐厅，您可以选择到Dolmirong简单吃一点，也可以待在房间里，享受 24 小时送餐服务。此外2 间咖啡馆还供应美味点心。这里有 2 间酒吧/酒廊和 2 间池畔酒吧供您选择，让您可以小酌一番，轻松一下。每天 07:00 至 10:00 提供收费的自助式早餐早餐。`
      //       });
    },
    reserve() {
      // console.log('预定成功')
      this.$router.push('./reservation')
    }
  }
}
</script>

<style lang="less">
@appSize: 1/37.52rem;
.detail {
  background-color: #fff;
}

.top {
  width: 100%;
  height: 40 * @appSize;

  .van-icon {
    font-size: 22 * @appSize;
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
  background-color: #ddd;
  padding: 4 * @appSize;
  box-sizing: border-box;

  .van-collapse-item {
    margin-bottom: 5 * @appSize;

    .van-collapse-item__wrapper {
      .van-collapse-item__content {
        background-color: #ddd;
      }
    }
    .content {
      display: flex;
      border-bottom: 1px solid #ccc;
      margin-bottom: 5 * @appSize;
      .left {
        display: flex;
        flex: 1;
        flex-direction: column;

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
