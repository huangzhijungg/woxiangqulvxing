<template>
  <div class="hotel">
    <!-- 固定轮播图 -->
    <div class="swipper">
      <van-swipe :autoplay="3000" indicator-color="white" :duration="1000">
        <van-swipe-item v-for="(item, index) in imgList" :key="index">
          <img v-lazy="item" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 中部选择框 -->
    <div class="check">
      <van-cell-group>
        <van-field v-model="hotelName" placeholder="酒店名称" left-icon="hotel-o" />
      </van-cell-group>

      <van-cell-group>
        <van-field v-model="cityName" placeholder="请输入城市名" left-icon="location-o" />
      </van-cell-group>

      <van-cell-group>
        <van-field
          placeholder="选择入住时间"
          right-icon="notes-o"
          @click="show = true"
          :value="valueTime"
        />
        <!-- <van-overlay :show="show" @click="show = false">
          <van-datetime-picker type="date" :item-height="100" />
        </van-overlay>-->
        <van-popup v-model="show" round position="bottom" :style="{ height: '60%' }">
          <van-datetime-picker type="date" />
        </van-popup>
      </van-cell-group>

      <van-cell-group>
        <van-field
          placeholder="选择离店时间"
          right-icon="notes-o"
          @click="show = true"
          :value="valueTime"
        />
        <!-- <van-overlay :show="show" @click="show = false">
          <van-datetime-picker type="date" :item-height="100" />
        </van-overlay>-->
        <van-popup v-model="show" round position="bottom" :style="{ height: '60%' }">
          <van-datetime-picker type="date" />
        </van-popup>
      </van-cell-group>

      <van-button icon="search" color="linear-gradient(to right, #4bb0ff, #6149f6)" size="large">搜索</van-button>
    </div>
    <!-- 数据列表 -->
    <div class="list">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了">
        <van-cell v-for="(item, index) in 8" :key="index" @click="toDetail">
          <img
            src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1546595911,624006547&fm=26&gp=0.jpg"
            alt
          />
          <div class="bold">龙浦大酒店</div>
          <div class="address">杭州 &nbsp;&nbsp;富阳区&nbsp;&nbsp;龙浦街道196号</div>
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
export default {
  data() {
    return {
      imgList: [
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1042650240,4209338409&fm=26&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1616050083,3744682081&fm=26&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2681834925,3412885945&fm=26&gp=0.jpg"
      ],
      hotelName: "",
      cityName: "",
      // list: [],
      loading: false,
      finished: false,
      // isShow:false
      show: false,
      valueTime: ""
    };
  },

  methods: {
    // 点击跳转到酒店详情页面
    toDetail(){
      this.$router.push('./detail.vue')
    }
    // confirm(){
    //   this.valueTime = new Date('2019-10-10')
    // }
    // checkInTime() {
    //   this.isShow = true;
    // }
    // onLoad() {
    //   // 异步更新数据
    //   setTimeout(() => {
    //     for (let i = 0; i < 10; i++) {
    //       this.list.push(this.list.length + 1);
    //     }
    //     // 加载状态结束
    //     this.loading = false;
    //     // 数据全部加载完成
    //     if (this.list.length >= 40) {
    //       this.finished = true;
    //     }
    //   }, 500);
    // }
  }
};
</script>

<style lang="less">
.swipper {
  width: 100%;
  height: 220px;
  // padding: 10px;
  box-sizing: border-box;
  position: fixed;
  z-index: 1;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  .van-swipe {
    width: 100%;
    height: 100%;
    border-radius: 6px;

    img {
      width: 100%;
      height: 100%;
    }
  }
}
.check {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 220px;
  margin-bottom: 10px;

  .van-cell {
    border: 1px solid #ccc;
    border-radius: 6px;
    padding: 0;
    text-indent: 5px;
    margin-bottom: 10px;
  }
}
.van-button {
  display: block;
  margin: 0 auto;
  width: 70%;
  height: 40px;
  border-radius: 6px;
}
.list {
  .van-cell {
    width: 100%;
    height: 280px;
    box-shadow: 0px 15px 10px -10px #ccc;
    margin-bottom: 10px;

    img {
      width: 100%;
      height: 180px;
      border-radius: 10px;
    }
    .bold {
      font-weight: bold;
      font-size: 18px;
      color: #000;
    }
    .address {
      margin-bottom: 5px;
      color: #666;
      font-size: 14px;
    }
  }
}
</style>