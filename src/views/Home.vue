<template>
  <div class="hotel">
    <div class="topBar">
      我想去旅行
    </div>

    <!-- 轮播图 -->
    <div class="swipper">
      <van-swipe :autoplay="4000" indicator-color="white" :duration="1000">
        <van-swipe-item v-for="(item, index) in imgList" :key="index">
          <img v-lazy="item" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 中部选择框 -->
    <div class="check">
      <van-cell-group>
        <van-field
          v-model="hotelName"
          placeholder="酒店名称"
          left-icon="hotel-o"
        />
      </van-cell-group>

      <van-cell-group>
        <van-field
          v-model="cityName"
          placeholder="请输入城市名"
          left-icon="location-o"
        />
      </van-cell-group>

      <van-cell-group>
        <van-field
          ref="one"
          placeholder="选择入住时间"
          right-icon="notes-o"
          @click="showPopupIn"
          :value="valueTimeLiveIn"
        />
        <van-popup
          v-model="showIn"
          round
          position="bottom"
          :style="{ height: '60%' }"
        >
          <van-datetime-picker
            type="date"
            @confirm="confirmLiveIn"
            @cancel="cancelLiveIn"
            :min-date="startTime"
          />
        </van-popup>
      </van-cell-group>
      <van-cell-group>
        <van-field
          ref="two"
          placeholder="选择离店时间"
          right-icon="notes-o"
          @click="showPopupOut"
          :value="valueTimeLiveOut"
        />
        <van-popup
          v-model="showOut"
          round
          position="bottom"
          :style="{ height: '60%' }"
        >
          <van-datetime-picker
            type="date"
            @confirm="confirmLiveOut"
            @cancel="cancelLiveIn"
            :min-date="startTime"
          />
        </van-popup>
      </van-cell-group>

      <van-button
        icon="search"
        color="linear-gradient(to right, #4bb0ff, #6149f6)"
        size="large"
        @click="searchInfo"
        >搜索</van-button
      >
    </div>
    <!-- 数据列表 -->
    <div class="list">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
      >
        <van-cell v-for="(item, index) in 8" :key="index" @click="toDetail">
          <img
            src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1546595911,624006547&fm=26&gp=0.jpg"
            alt
          />
          <div class="bold">龙浦大酒店</div>
          <div class="address">
            杭州 &nbsp;&nbsp;富阳区&nbsp;&nbsp;龙浦街道196号
          </div>
          <div class="address">二星级及以下/经济</div>
        </van-cell>
      </van-list>
    </div>

    <!-- <div class="list">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      </van-list>
    </div>-->
  </div>
</template>

<script>
var moment = require('moment')
export default {
  data() {
    return {
      imgList: [
        'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1042650240,4209338409&fm=26&gp=0.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1616050083,3744682081&fm=26&gp=0.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2681834925,3412885945&fm=26&gp=0.jpg'
      ],
      hotelName: '',
      cityName: '',
      loading: false,
      finished: false,
      showIn: false,
      showOut: false,
      valueTimeLiveOut: '',
      valueTimeLiveIn: '',
      // currentTime: new Date(), // 开始时间不能超过当前时间
      startTime: new Date() // 开始时间
    }
  },

  methods: {
    // 点击跳转到酒店详情页面
    toDetail() {
      this.$router.push('./detail')
    },
    // 点击输入框事件
    showPopupIn() {
      this.showIn = true
    },
    showPopupOut() {
      this.showOut = true
    },
    // 点击确认事件
    confirmLiveIn(value) {
      // console.log(1)
      this.valueTimeLiveIn = moment(value).format('YYYY-MM-DD')
      this.showIn = false
    },
    confirmLiveOut(value) {
      // console.log(2)
      this.valueTimeLiveOut = moment(value).format('YYYY-MM-DD')
      this.showOut = false
    },
    cancelLiveIn() {
      this.showIn = false
      this.showOut = false
    },
    // 点击搜索按钮发送请求获取对应数据
    searchInfo(){
      console.log(111);
      
    }
  },
  // onLoad() {
  //   // 异步更新数据
  //   setTimeout(() => {
  //     for (let i = 0; i < 10; i++) {
  //       this.list.push(this.list.length + 1)
  //     }
  //     // 加载状态结束
  //     this.loading = false
  //     // 数据全部加载完成
  //     if (this.list.length >= 40) {
  //       this.finished = true
  //     }
  //   }, 500)
  // }
}
</script>

<style lang="less" scoped>
// 定义变量,方便适配
@appSize: 1/37.52rem;
.topBar {
  width: 100%;
  height: 60 * @appSize;
  border-bottom: 2 * @appSize solid #ccc;
  text-align: center;
  line-height: 60 * @appSize;
  font-size: 20 * @appSize;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1;
  background-color: #fff;
  padding: 10 * @appSize;
  box-sizing: border-box;
  border-radius: 8 * @appSize;
}

.swipper {
  width: 100%;
  height: 220 * @appSize;
  padding: 10 * @appSize;
  box-sizing: border-box;
  margin-top: 60 * @appSize;

  .van-swipe {
    width: 100%;
    height: 100%;
    border-radius: 6 * @appSize;

    img {
      width: 100%;
      height: 100%;
    }
  }
}
.check {
  width: 100%;
  padding: 10 * @appSize;
  box-sizing: border-box;
  border-top: 1 * @appSize solid #ccc;
  border-radius: 5 * @appSize;
  margin-bottom: 10 * @appSize;

  .van-cell {
    border: 1 * @appSize solid #ccc;
    border-radius: 6 * @appSize;
    padding: 0;
    text-indent: 5 * @appSize;
    margin-bottom: 10 * @appSize;
  }
}
.van-button {
  display: block;
  margin: 0 auto;
  width: 70%;
  height: 40 * @appSize;
  border-radius: 6 * @appSize;
}
.list {
  .van-cell {
    width: 100%;
    height: 280 * @appSize;
    box-shadow: 0 * @appSize 15 * @appSize 10 * @appSize -10 * @appSize #ccc;
    margin-bottom: 10 * @appSize;

    img {
      width: 100%;
      height: 180 * @appSize;
      border-radius: 10 * @appSize;
    }
    .bold {
      font-weight: bold;
      font-size: 18 * @appSize;
      color: #000;
    }
    .address {
      margin-bottom: 5 * @appSize;
      color: #666;
      font-size: 14 * @appSize;
    }
  }
}
</style>
