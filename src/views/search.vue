<template>
  <div class="search">
    <!-- 搜索组件 -->
    <SearchBar />

    <van-tabs
      v-model="activeName"
      color="#000"
      title-active-color="#000"
      title-inactive-color="#000"
      class="topClassify"
    >
      <van-tab>
        <div class="tab-title" slot="title">城市</div>
      </van-tab>
      <van-tab>
        <div class="tab-title" slot="title" @click="starLevel">星级价格</div>
      </van-tab>
      <van-tab>
        <div class="tab-title" slot="title">位置区域</div>
      </van-tab>
    </van-tabs>

    <van-popup
      v-model="showStart"
      position="bottom"
      :style="{ height: '20%' }"
      close-icon="success"
      closeable
    >
      <van-radio-group v-model="radio" class="chooseRoom" checked-color="#ff6633">
        <van-radio name="1" checked-color="#07c160">经济型</van-radio>
        <van-radio name="2" checked-color="#07c160">舒适型</van-radio>
        <van-radio name="3" checked-color="#07c160">高档型</van-radio>
        <van-radio name="4" checked-color="#07c160">豪华型</van-radio>
        <van-radio name="5" checked-color="#07c160">不限</van-radio>
      </van-radio-group>
    </van-popup>

    <!-- 酒店列表 -->
    <van-list>
      <van-cell v-for="(item, index) in 10" :key="index" @click="toDetail" class="search-list">
        <div class="hotelList">
          <div class="leftImg">
            <img src="http://img4.imgtn.bdimg.com/it/u=3421948802,47894846&fm=26&gp=0.jpg" alt />
          </div>
          <div class="rightText">
            <p class="hotelName">深圳南山鸿丰酒店</p>
            <p class="hotelXing">经济型</p>
            <p class="hotelHao">南山区东滨路4096号</p>
            <p class="hotelAdr">南头地区</p>
          </div>
        </div>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
import SearchBar from "../components/searchBar";
export default {
  components: {
    SearchBar
  },
  data() {
    return {
      // list: [],
      // loading: false,
      // finished: false
      value1: "",
      value2: "",
      activeName: "a",
      showStart: false,
      radio: "5"
    };
  },
  methods: {
    starLevel() {
      this.showStart = true;
    },

    toDetail() {
      this.$router.push("./Detail");
    }
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

<style lang="less" scoped>
@appSize: 1/37.52rem;
// .special {
//   width: 100%;
//   height: 50px;
//   position: fixed;
//   top: 128 * @appSize;
//   right: 0;
//   left: 0;
//   z-index: 999;
//   background-color: #fff;
//   margin-top: -1 * @appSize;
// }
.topClassify {
  position: fixed;
  top: 130 * @appSize;
  right: 0;
  left: 0;
  z-index: 999;
}
.van-popup__close-icon--top-right {
  color: orange;
  font-size: 30px;
}
.chooseRoom {
  display: flex;
  justify-content: space-around;
  margin-top: 80 * @appSize;
}
.van-list {
  margin-top: 170px;
}
.hotelList {
  width: 100%;
  height: 100 * @appSize;
  display: flex;

  .leftImg {
    display: flex;
    margin-right: 10 * @appSize;
    img {
      width: 110 * @appSize;
      height: 100%;
    }
  }
  .rightText {
    font-size: 14 * @appSize;
    .hotelName {
      color: #000;
    }
    .hotelXing {
      color: orange;
    }
    .hotelHao {
      color: #ccc;
    }
    .hotelAdr {
      color: skyblue;
    }
  }
}
</style>
