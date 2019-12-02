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
    <!-- 酒店名称输入框 -->
    <div class="check">
      <van-cell-group>
        <van-field v-model="hotelName" placeholder="酒店名称" left-icon="hotel-o" />
      </van-cell-group>

      <!-- 城市输入框 -->
      <van-cell-group>
        <van-field v-model="cityName" placeholder="城市名称" left-icon="hotel-o" @focus="showCityList" />
      </van-cell-group>
      <van-popup v-model="showCity" position="bottom" :style="{ height: '60%' }">
        <!-- <van-area :area-list="citysList[1]" :columns-num="1" @cancel="hideCityList" @confirm="complete"/> -->
        <!-- <div v-for="(item, index) in citysListItem" :key="index">{{item}}</div> -->
        <van-grid>
          <van-grid-item
            v-for="(item, index) in citysListItem"
            :key="index"
            :text="item"
            @click="clickItem(item)"
          />
        </van-grid>
      </van-popup>

      <!-- 日期选择器 -->
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
        <van-cell v-for="(item, index) in hotelList" :key="index" @click="toDetail(item)">
          <img
            :src="
              item.hotelImg
                ? item.hotelImg
                : `http://hbimg.b0.upaiyun.com/bdaca9a07e1a8947c00c2f826ebf848750927aa24963-cATwbg_fw658`
            "
            alt
          />
          <div class="left">
            <div class="bold">{{ item.nameChn }}</div>
            <div class="address">{{ item.adress }}</div>
            <div class="address">{{ item.levelName }}</div>
          </div>
          <div class="right">
            <span>
              {{
              item.existFlag == 0 ? `已满房` : `￥` + item.lowestPrice + `元起`
              }}
            </span>
          </div>
        </van-cell>
      </van-list>
    </div>
  </div>
</template>

<script>
import demo from "../components/demo";
// import vantCity from "../assets/js/vantCity";
import myRequest from "../utils/request";
import citys from "../assets/js/allCity";
import { log } from "util";

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
      // areaList: vantCity,
      citysList: [],
      citysListItem: [],
      // 城市数据列表
      hotelList: [],
      // 默认加载第一页
      page: 1,
      city:''
    };
  },
  // 页面加载发送请求获取数据
  created() {
    this.getHomeList();
    this.getAllCitys();
  },

  methods: {
    // 点击宫格的事件
    clickItem(item) {
      this.cityName = item;
      this.showCity = false;
    },
    // 循环遍历城市数据
    getAllCitys() {
      for (let i = 0; i < citys.length; i++) {
        this.citysList = citys[i];
        this.citysListItem.push(this.citysList[1]);
        // console.log(this.citysListItem);
      }
    },
    getHomeList() {
      this.$axios({
        method: "post",
        url:
          "http://woxiangqu-tour.cn/mobile/amanager/info/hotel/ajaxHotelList.htm"
      }).then(item => {
        // 将获取到的数据保存到hotelList
        this.hotelList = item.data.hotels;
        this.loading = false;
      });
    },

    // 当触底时发送请求获取下一页的数据并追加到原数组里面
    onLoad() {
      // 异步更新数据;
      setTimeout(() => {
        this.$axios({
          method: "post",
          params: {
            page: this.page++,
            limit: 10
          },
          url:
            "http://woxiangqu-tour.cn/mobile/amanager/info/hotel/ajaxHotelList.htm"
        }).then(item => {
          if (item.status == 200) {
            console.log(item);
            // 将获取到的数据保存到hotelList
            this.hotelList = [...this.hotelList, ...item.data.hotels];
            // 加载状态结束
            this.loading = false;
            // 数据全部加载完成
            if (this.hotelList.length >= item.data.page.totalCount) {
              this.finished = true;
            }
          }
        });
      }, 1000);
    },
    showCityList() {
      this.showCity = true;
    },
    hideCityList() {
      this.showCity = false;
    },
    // 点击跳转到酒店详情页面
    toDetail(item) {
      // 点击酒店列表将信息保存到本地并跳转到详情页
      sessionStorage.setItem("hotelName", item.nameChn);
      sessionStorage.setItem("hotelAdr", item.adress);
      sessionStorage.setItem("hotelPhone", item.phone);
      sessionStorage.setItem("hotelDetail", item.summary || "");
      sessionStorage.setItem("hotelCity", item.city);
      sessionStorage.setItem("hotelId", item.hotelId);
      this.$router.push("./detail");
    },
    // 点击搜索按钮去到搜索页面并发送请求获取数据
    searchInfo() {
      // 点击搜索将城市名称和酒店名称以及时间保存到本地
      localStorage.setItem("searchHotelName", this.hotelName);
      localStorage.setItem("searchCityName", this.cityName);
      // localStorage.setItem("selectTime", this.cityName);
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
    height: 360 * @appSize;
    box-shadow: 0 * @appSize 15 * @appSize 10 * @appSize -10 * @appSize #ccc;
    margin-bottom: 10 * @appSize;

    img {
      width: 100%;
      height: 240 * @appSize;
      border-radius: 10 * @appSize;
    }
    .left {
      float: left;
      width: 240 * @appSize;
      .bold {
        font-weight: bold;
        font-size: 14 * @appSize;
        color: #000;
      }
      .address {
        color: #666;
        font-size: 12 * @appSize;
      }
    }
    .right {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 30 * @appSize;
      span {
        color: orange;
        font-size: 18 * @appSize;
        font-weight: bold;
      }
    }
  }
}
</style>
