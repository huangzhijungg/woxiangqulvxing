<template>
  <div class="pay">
    <div class="topNav">
      <van-icon name="arrow-left" class="iconBack" @click="goBack" />

      <span class="text-pay">订单支付</span>
    </div>
    <p class="pay-title">订单信息</p>
    <div class="pay-orderInfo">
      <!-- <p class="pay-title">订单信息</p> -->
      <div class="pay-info">
        <p>香港君怡酒店</p>
        <p>入离：11月20日-11月21日</p>
        <p>标准客房 | 不含早</p>
        <p>补充说明：</p>
        <van-divider :style="{ color: '#1989fa', borderColor: 'orange', padding: '0 1px' }"></van-divider>
        <p>
          住店联系人
          <span>我想去</span>
        </p>
        <van-divider :style="{ color: '#1989fa', borderColor: 'orange', padding: '0 1px' }"></van-divider>
        <p>
          联系手机号
          <span>18900998877</span>
        </p>
        <van-divider :style="{ color: '#1989fa', borderColor: 'orange', padding: '0 1px' }"></van-divider>
        <div class="pay-price">
          <p>
            应付总额
            <span>￥568.00</span>
          </p>
        </div>
      </div>
    </div>
    <p class="pay-title">支付方式</p>
    <div class="pay-orderInfo">
      <!-- <p class="pay-title">支付方式</p> -->
      <div class="pay-bgc">由于价格变动频繁，请在10分钟内完成支付</div>
      <div class="pay-logBox">
        <div class="pay-log-text">
          <img src="../assets/images/log1.png" alt />
          <p>微信支付</p>
        </div>
        <van-icon name="success" color="green" size="20px" class="pay-iconRight" />
      </div>
    </div>
    <div class="pay-btn">
        <van-button round type="info" size="large" color="orange" @click="goPayment">确认支付</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    goPayment(){
        console.log('支付成功');
        
    }
  }
};
</script>

<style lang="less" scoped>
@appSize: 1/37.52rem;
// .pay {
//     // height: 1111 * @appSize;
//   background-color: #ccc;
// }
.topNav {
  height: 40 * @appSize;
  background-color: orange;
  display: flex;
  align-items: center;
  color: #fff;

  .iconBack {
    font-size: 18 * @appSize;
    margin-left: 10 * @appSize;
    margin-right: 20 * @appSize;
  }
  .text-pay {
    font-size: 14 * @appSize;
  }
}
.pay-title {
  height: 30 * @appSize;
  background-color: #ccc;
  color: #666;
  line-height: 30 * @appSize;
  text-indent: 10 * @appSize;
  color: #666;
}
.pay-orderInfo {
  // padding: 10 * @appSize;
  // box-sizing: border-box;
  background-color: #fff;
}
.pay-info {
  padding: 10 * @appSize;
  box-sizing: border-box;

  p {
    margin-bottom: 6 * @appSize;
    color: #555;
    span {
      margin-left: 20 * @appSize;
      color: #000;
      display: inline-block;
      width: 100 * @appSize;
    }
  }
  p:first-child {
    font-weight: bold;
    color: #000;
    font-size: 14 * @appSize;
  }
}
.pay-price {
  p {
    span {
      color: orange;
    }
  }
}
.pay-bgc {
  height: 20 * @appSize;
  background-color: #ffbb77;
  color: #fff;
  line-height: 20 * @appSize;
  text-align: center;
}
.pay-logBox {
  height: 50 * @appSize;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10 * @appSize;
  .pay-log-text {
    margin-left: 10 * @appSize;
    width: 200 * @appSize;
    display: flex;
    align-items: center;
    img {
      height: 100%;
      width: 60 * @appSize;
    }
  }
  .pay-iconRight {
    margin-right: 10 * @appSize;
  }
}
.pay-btn{
    padding: 30 * @appSize;
    box-sizing: border-box;
}
</style>