<template>
  <div class="search">
    <!-- 搜索组件 -->
    <SearchBar />
    <!-- 酒店列表 -->
    
    <van-list>
      <van-cell
        v-for="(item, index) in 10"
        :key="index"
        @click="toDetail"
        class="search-list"
      >
        <div class="hotelList">
          <div class="leftImg">
            <img
              src="http://img4.imgtn.bdimg.com/it/u=3421948802,47894846&fm=26&gp=0.jpg"
              alt
            />
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
import SearchBar from '../components/searchBar'
export default {
  components: {
    SearchBar
  },
  data() {
    return {
      // list: [],
      // loading: false,
      // finished: false
      value1: '',
      value2: ''
    }
  },
  methods: {
    toDetail() {
      this.$router.push('./Detail')
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
}
</script>

<style lang="less" scoped>
@appSize: 1/37.52rem;
.van-list {
  margin-top: 130 * @appSize;
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
