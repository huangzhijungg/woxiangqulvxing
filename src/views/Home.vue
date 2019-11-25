<template>
  <div class="hotel">
    <div class="topBar">我想去旅行</div>

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
        <van-field v-model="hotelName" placeholder="酒店名称" left-icon="hotel-o" />
      </van-cell-group>

      <!-- 城市输入框 -->
      <van-cell-group>
        <van-field
          v-model="cityName"
          placeholder="请输入城市名"
          left-icon="location-o"
          @click="showPicker = true"
        />
      </van-cell-group>

      <!-- 城市弹出层 -->
      <van-popup v-model="showPicker" position="bottom">
        <van-picker
          show-toolbar
          :columns="columns"
          @cancel="showPicker = false"
          @confirm="onConfirm"
          :default-index="0"
        />
      </van-popup>
      <!-- <smart-input v-bind="provinceList" @collect="collectProvince"></smart-input> -->

      <demo />

      <van-button
        icon="search"
        color="linear-gradient(to right, #4bb0ff, #6149f6)"
        size="large"
        @click="searchInfo"
      >搜索</van-button>
    </div>
    <!-- 数据列表 -->
    <div class="list">
      <!-- <van-list v-model="loading" :finished="finished" finished-text="没有更多了"> -->
      <van-cell v-for="(item, index) in 8" :key="index" @click="toDetail">
        <img
          src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1546595911,624006547&fm=26&gp=0.jpg"
          alt
        />
        <div class="left">
          <div class="bold">龙浦大酒店</div>
          <div class="address">杭州 &nbsp;&nbsp;富阳区&nbsp;&nbsp;龙浦街道196号</div>
          <div class="address">二星级及以下/经济</div>
        </div>
        <div class="right">
          <span>￥ 560起</span>
        </div>
      </van-cell>
      <!-- </van-list> -->
    </div>
  </div>
</template>

<script>
import demo from "../components/demo";
// import Vue from 'vue'

export default {
  components: {
    demo
  },
  data() {
    return {
      imgList: [
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1042650240,4209338409&fm=26&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1616050083,3744682081&fm=26&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2681834925,3412885945&fm=26&gp=0.jpg"
      ],
      hotelName: "",
      cityName: "",
      // loading: false,
      // finished: false,
      showPicker: false,
      columns: ["北京", "上海", "广州", "深圳"],
    };
  },
  methods: {
    onConfirm(value) {
      this.cityName = value;
      this.showPicker = false;
    },
    // 点击跳转到酒店详情页面
    toDetail() {
      this.$router.push("./detail");
    },
    // 点击搜索按钮去到搜索页面并发送请求获取数据
    searchInfo() {
      
      this.$router.push("./search");
    }
  }
  // onLoad() {
  //   // 异步更新数据
  //   setTimeout(() => {
  //     // for (let i = 0; i < 10; i++) {
  //     //   this.list.push(this.list.length + 1)
  //     // }
  //     // 加载状态结束
  //     this.loading = false
  //     // 数据全部加载完成
  //     if (this.list.length >= 列表的总长度) {
  //       this.finished = true
  //     }
  //   }, 500)
  // }
};
</script>

<style lang="less" scoped>
// 定义变量,方便适配
@appSize: 1/37.52rem;
ul {
  border: 1px solid red;
}
li {
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #ddd;
}
.bindingbtn input {
  border: 1px solid #333;
  height: 44px;
  line-height: 44px;
}
.topBar {
  width: 100%;
  height: 40 * @appSize;
  background-color: orange;
  color: #fff;
  border-bottom: 1 * @appSize solid #ccc;
  text-align: center;
  line-height: 40 * @appSize;
  font-size: 20 * @appSize;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1;
}

.swipper {
  width: 100%;
  height: 220 * @appSize;
  padding: 10 * @appSize;
  box-sizing: border-box;
  margin-top: 40 * @appSize;

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
  line-height: 40 * @appSize;
}
.list {
  .van-cell {
    width: 100%;
    height: 300 * @appSize;
    box-shadow: 0 * @appSize 15 * @appSize 10 * @appSize -10 * @appSize #ccc;
    margin-bottom: 10 * @appSize;

    img {
      width: 100%;
      height: 180 * @appSize;
      border-radius: 10 * @appSize;
    }
    .left {
      // flex: 1;
      float: left;
      width: 250 * @appSize;
      .bold {
        font-weight: bold;
        font-size: 16 * @appSize;
        color: #000;
      }
      .address {
        color: #666;
        font-size: 14 * @appSize;
      }
    }
    .right {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 30px;
      span {
        color: red;
        font-size: 18 * @appSize;
        font-weight: bold;
      }
    }
  }
}
</style>
