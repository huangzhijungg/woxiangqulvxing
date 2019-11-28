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

      <!-- <van-cell-group class="col-sm-2 m-b-xs">
        <van-field
          class="form-control"
          id="cityName"
          type="text"
          placeholder="请输入城市"
          value=""
        >
          <input type="hidden" name="city" id="cityId" value="" />
          <input
            class="form-control"
            id="cityName"
            type="text"
            placeholder="请输入城市"
            value=""
          />
          <div id="suggest" class="ac_results"></div>
        </van-field>
      </van-cell-group>-->

      <!-- 城市输入框 -->
      <van-cell-group>
        <van-field v-model="cityName" placeholder="城市名称" left-icon="hotel-o" @focus="showCityList" />
      </van-cell-group>
      <van-popup v-model="showCity" position="bottom" :style="{ height: '60%' }">
        <van-area
          :area-list="areaList"
          :columns-num="2"
          @cancel="hideCityList"
          @confirm="complete"
        />
      </van-popup>

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
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <van-cell v-for="(item, index) in hotelList.hotels" :key="index" @click="toDetail">
          <img
            :src="item.hotelImg ? item.hotelImg : `http://hbimg.b0.upaiyun.com/bdaca9a07e1a8947c00c2f826ebf848750927aa24963-cATwbg_fw658`"
            alt
          />
          <div class="left">
            <div class="bold">{{item.nameChn}}</div>
            <div class="address">{{item.cityName}}&nbsp;&nbsp;{{item.adress}}</div>
            <div class="address">{{item.levelName}}</div>
          </div>
          <div class="right">
            <span>{{item.existFlag == 0 ? `已满房` : `￥`+ item.lowestPrice + `元起`}}</span>
          </div>
        </van-cell>
      </van-list>
    </div>
  </div>
</template>

<script>
import demo from "../components/demo";
import vantCity from "../assets/js/vantCity";
import myRequest from "../utils/request";

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
      showCity: false,
      loading: false,
      finished: false,
      areaList: vantCity,
      // 城市数据列表
      hotelList: [],
      // 分页数据
      // detailInfo:[]
      addHotel:[]
    };
  },
  // 页面加载发送请求获取数据
  created() {
    this.$axios({
      method: "post",
      url:
        "http://192.168.1.124:8080/mobile/amanager/info/hotel/ajaxHotelList.htm"
    }).then(data => {
      // this.loading = true,
      console.log(data);
      // 将获取到的数据保存到hotelList
      this.hotelList = data.data;
      
    });
  },
  methods: {
    onLoad() {
      // 异步更新数据;
      setTimeout(() => {
        this.$axios({
          method: "post",
          params: {
            page: this.hotelList.page.nextPage,
            limit: 10
          },
          url:
            "http://192.168.1.124:8080/mobile/amanager/info/hotel/ajaxHotelList.htm"
        }).then(res => {
          console.log(111);
          console.log(res);
          // 将获取到的数据保存到hotelList
          this.addHotel.push(res.data.hotels);
        });

        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        // if (this.hotelList.length >= this.hotelList.page.totalCount) {
        //   this.finished = true;
        // }
      }, 500);
    },

    complete(value) {
      // 将获取到的城市赋值给输入框
      this.cityName = value[1].name;
      this.showCity = false;
    },
    showCityList() {
      this.showCity = true;
    },
    hideCityList() {
      this.showCity = false;
    },
    // 点击跳转到酒店详情页面
    toDetail() {
      sessionStorage.setItem("hotelName", this.hotelList);
      // sessionStorage.setItem("hotelAdr", );
      this.$router.push("./detail");
    },
    // 点击搜索按钮去到搜索页面并发送请求获取数据
    searchInfo() {
      // 点击搜索获取城市名称和酒店名称发送请求

      this.$router.push("./search");
    }
  }
};
</script>

<style lang="less" scoped>
// 定义变量,方便适配
@appSize: 1/37.52rem;
ul {
  border: 1px solid red;
}
li {
  height: 40 * @appSize;
  line-height: 40 * @appSize;
  border-bottom: 1px solid #ddd;
}
.bindingbtn input {
  border: 1px solid #333;
  height: 44 * @appSize;
  line-height: 44 * @appSize;
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
  z-index: 999;
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
.home-cityName {
  position: relative;

  .cityIcon {
    position: absolute;
    top: 10 * @appSize;
    left: 10 * @appSize;
    font-size: 16 * @appSize;
    z-index: 10;
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
    line-height: 34 * @appSize;
  }
}
.van-button {
  display: block;
  margin: 0 auto;
  width: 70%;
  height: 40 * @appSize;
  border-radius: 6 * @appSize;
  line-height: 40 * @appSize;
  margin-top: 10 * @appSize;
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
      margin-top: 30 * @appSize;
      span {
        color: red;
        font-size: 18 * @appSize;
        font-weight: bold;
      }
    }
  }
}
</style>
