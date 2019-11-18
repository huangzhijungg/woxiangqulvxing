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
    <van-popup
      v-model="show"
      overlay
      closeable
      position="bottom"
      :style="{ height: '60%' }"
    />
    <div class="swipper">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <div class="hotelInfo">
      <div class="name">
        酒店名称：济州肯辛顿酒店
        <span>
          地图
          <van-icon name="arrow" class="rightarrow" />
        </span>
      </div>

      <div class="special">
        酒店特色：222222
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
      console.log('预定成功')
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
  }
  .van-notice-bar {
    .van-notice-bar__left-icon,
    .van-notice-bar__right-icon {
      min-width: 30px;
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
  .special,
  .name {
    span {
      float: right;

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
</style>
