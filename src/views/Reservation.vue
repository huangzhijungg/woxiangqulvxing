<template>
  <div class="reservation">
    <div class="topB">
      <van-icon name="arrow-left" class="iconLeft" @click="onClickLeft" />
      <span class="text">订单填写</span>
    </div>
    <div class="orderInfo">
      <P class="hotelName">维也纳国际酒店</P>
      <P class="liveTime">时间</P>
      <P class="info">高级双床房 | 不含早</P>
      <van-divider :style="{ color: '#1989fa', borderColor: 'orange', padding: '0 16px' }"></van-divider>
      <van-notice-bar text="即定即保，订单一经确定，不可取消·更改" left-icon="label-o" />
    </div>
    <div class="userInfo">
      <van-cell-group>
        <van-field v-model="value" label="房间1" placeholder="姓名" />
      </van-cell-group>
      <van-cell-group>
        <van-field v-model="mobile" label="手机号" placeholder="请输入手机" />
      </van-cell-group>
    </div>
    <div class="comment">
      <van-cell-group>
        <van-field
          v-model="message"
          rows="2"
          autosize
          label="住房备注"
          type="textarea"
          maxlength="50"
          placeholder="请输入留言"
          show-word-limit
        />
      </van-cell-group>
      <van-divider :style="{ color: '#1989fa', borderColor: 'orange', padding: '0 16px' }"></van-divider>
      <van-notice-bar text="您的需求我们会及时通知酒店并尽量协助安排，但要视酒店情况，不能确保满足" left-icon="label-o" />
    </div>
    <div class="txt">
      <div class="ss">
        <p class="cacel">取消条款</p>
        <span class="color">此房即定即保，订单一经确定，不可取消或更改，</span>
      </div>
      <div class="ss">
        <p class="cacel">入住离店时间</p>
        <p class="color">酒店入住时间最早为14：00，退房时间最晚为次日12：00</p>
      </div>
    </div>
    <div class="money">
      <span>订单总额 ： ￥ 248</span>
      <button>下一步</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      mobile: "",
      message: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    }
  }
};
</script>

<style lang="less" scoped>
@appSize: 1/37.52rem;

.reservation {
  background-color: rgb(239, 239, 241);
}

.topB {
  height: 40 * @appSize;
  background-color: orange;
  display: flex;
  align-items: center;
  color: #fff;
  margin-bottom: 10 * @appSize;

  .iconLeft {
    font-size: 18 * @appSize;
    margin-left: 10 * @appSize;
    margin-right: 20 * @appSize;
  }
  .text {
    text-align: center;
    font-size: 14 * @appSize;
  }
}
.orderInfo {
  background-color: #fff;
  padding: 10 * @appSize;
  box-sizing: border-box;
  margin-bottom: 10 * @appSize;

  p {
    margin-bottom: 5 * @appSize;
  }
  .hotelName {
    font-weight: bold;
    color: #000;
  }
}
.userInfo {
  margin-bottom: 10 * @appSize;
}
.txt {
  padding: 10 * @appSize;
  box-sizing: border-box;
  background-color: #ccc;

  .ss {
    margin-bottom: 5 * @appSize;

    .cacel {
      color: #000;
      font-weight: bold;
      margin-bottom: 8 * @appSize;
    }
    .color {
      color: #666;
      margin-bottom: 8 * @appSize;
    }
  }
}
.money {
  display: flex;
  justify-content: space-between;
  padding: 10 * @appSize;
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;

  span{
      color: orange;
      font-size: 16 * @appSize;
  }
  button{
      border: none;
      background-color: orange;
      color: #fff
  }
}
</style>