<template>
  <div class="main">
    <div class="topNav" v-if="type == 1">
      <div @click="img = 12" class="p1 absolute"></div>
      <div @click="img = 11" class="p2 absolute"></div>
      <div @click="img = 13" class="p3 absolute"></div>
      <div @click="img = 10" class="p4 absolute"></div>
      <!-- 环境质量 -->
      <div class="home" v-show="img == 12">
        <img ref="imgs" id="imgs" :src="bg01" v-if="!showLoading" alt="" />
        <div @click="switchType(7)" class="p5 absolute"></div>
        <div @click="switchType(5)" class="p6 absolute"></div>
        <!-- <div @click="switchType(5)" class="p7 absolute"></div> -->
        <div @click="switchType(9)" class="p8 absolute"></div>
        <div @click="switchType(6)" class="p9 absolute"></div>
        <div @click="visityLog = !visityLog" class="p11 absolute"></div>
        <!-- <div @click="switchType()" class="p10 absolute"></div> -->
        <img
          v-if="visityLog"
          class="visityLog"
          src="../../assets/hz/citylog.png"
          alt=""
        />
      </div>
      <!-- 城市弹框 -->
      <!-- 督察督办 -->
      <img
        v-if="img == 10 && dtype == 1"
        src="../../assets/hz/d01.png"
        alt=""
      />
      <div class="dstatusShow" v-if="img == 10 && dtype == 1 && dstatus">
        <img src="../../assets/hz/d04.png" alt="" />
        <img
          class="dele"
          @click="dstatus = false"
          src="../../assets/hz/delete.png"
          alt=""
        />
        <video src="../../assets/hz/dmp4.mp4" controls></video>
        <!-- <div class="box">
          <img
            class="dele"
            @click="dstatus = false"
            src="../../assets/hz/delete.png"
            alt=""
          />
          <video src="../../assets/hz/dmp4.mp4" controls></video>
        </div> -->
      </div>
      <!--  -->
      <img v-if="img == 10 && dtype == 2" src="../../assets/hz/3.png" alt="" />
      <!--  -->
      <img v-if="img == 10 && dtype == 3" src="../../assets/hz/5.png" alt="" />
      <!--  -->
      <img v-if="img == 10 && dtype == 4" src="../../assets/hz/4.png" alt="" />
      <img
        v-if="img == 10 && dtype == 5"
        src="../../assets/hz/d06.png"
        alt=""
      />
      <!--  -->
      <!-- <img
        v-if="img == 10 && dtype == 6"
        src="../../assets/hz/d07.png"
        alt=""
      /> -->
      <!-- 切换督查督办状态 -->
      <div
        class="dstatus"
        @click="dstatus = true"
        v-if="img == 10 && dtype == 1"
      ></div>
      <div class="dcdb" v-if="img == 10">
        <div class="d01" @click="dtype = 1"></div>
        <div class="d02" @click="dtype = 2"></div>
        <div class="d03" @click="dtype = 3"></div>
        <div class="d04" @click="dtype = 4"></div>
        <div class="d05" @click="dtype = 5"></div>
        <!-- <div class="d06" @click="dtype = 6"></div> -->
      </div>
      <!-- 弹框 -->

      <!-- 预警评价 -->
      <!-- 预警 -->
      <img
        v-if="img == 13 && yType == 1 && warnType == 1"
        src="../../assets/hz/013.png"
        alt=""
      />
      <img
        v-if="img == 13 && yType == 1 && warnType == 2"
        src="../../assets/hz/0131.png"
        alt=""
      />
      <img
        v-if="img == 13 && yType == 1 && warnType == 3"
        src="../../assets/hz/0132.png"
        alt=""
      />
      <!-- 评价-->
      <img
        v-if="img == 13 && yType == 2"
        src="../../assets/hz/y02.png"
        alt=""
      />
      <div class="yjpg" v-if="img == 13">
        <div @click="yType = 1"></div>
        <div @click="yType = 2"></div>
      </div>
      <!-- 预警 切换 -->
      <div class="yjSwitch" v-if="img == 13 && yType == 1">
        <div @click="warnType = 1"></div>
        <div @click="warnType = 2"></div>
        <div @click="warnType = 3"></div>
      </div>
      <!-- 评价导出-->
      <div class="yjpg2" @click="exported" v-if="img == 13 && yType == 2"></div>

      <!-- 工作推进 -->
      <img v-if="img == 11" class="workTj" src="../../assets/hz/6.png" alt="" />
      <div v-if="img == 11" class="workBody">
        <div class="imgBody" :class="moveType == 1 ? 'moveRight' : 'moveLeft'">
          <img src="../../assets/hz/61.png" alt="" />
          <div class="work" v-if="img == 11" @click="workType = true"></div>
        </div>
        <!-- v-show="moveType == 1"  -->
        <img
          @click="imgMove(2)"
          src="../../assets/hz/right.png"
          class="right"
          alt=""
        />
        <!-- v-show="moveType == 2" -->
        <img
          @click="imgMove(1)"
          class="left"
          src="../../assets/hz/left.png"
          alt=""
        />
      </div>

      <div class="workDiolog" v-if="workType">
        <img
          class="dele dele1"
          @click="workType = false"
          src="../../assets/hz/delete.png"
          alt=""
        />
        <img src="../../assets/hz/worklog1.png" alt="" />
      </div>
      <div class="timess">{{ nowDay }}</div>
    </div>
    <div v-if="type == 2" class="bottomNav">
      <div @click="(img = 12), (type = 1)" class="p1 absolute"></div>
      <div @click="(img = 11), (type = 1)" class="p2 absolute"></div>
      <div @click="(img = 13), (type = 1)" class="p3 absolute"></div>
      <div @click="(img = 10), (type = 1)" class="p4 absolute"></div>
      <!-- <div @click="(type = 1), (img = 12)" class="p11 absolute"></div> -->
      <!-- 土固 -->
      <img v-if="img == 5" src="../../assets/hz/005.png" alt="" />
      <!-- 炭 -->
      <img v-if="img == 6" src="../../assets/hz/006.png" alt="" />
      <!-- 水环境 -->
      <img v-if="img == 7" src="../../assets/hz/007.png" alt="" />
      <div class="waterBtn" @click="waterStatus = true" v-if="img == 7"></div>
      <div class="waterLog" v-if="waterStatus">
        <img
          class="dele"
          @click="waterStatus = false"
          src="../../assets/hz/delete.png"
          alt=""
        />
        <img class="imgLog" src="../../assets/hz/waterLog.png" alt="" />
      </div>
      <!-- 生态 -->
      <img v-if="img == 8" src="../../assets/hz/008.jpg" alt="" />
      <!-- 气环境 -->
      <img v-if="img == 9" class="qiImg" src="../../assets/hz/009.png" alt="" />
      <!-- :class="img == 9 ? 'timesImg' : ''" -->
      <div class="times">
        <div class="titem t1" @click="(img = 12), (type = 1)"></div>
        <div class="titem t2" @click="(img = 7), (type = 2)"></div>
        <div class="titem t3" @click="(img = 9), (type = 2)"></div>
        <div class="titem t4" @click="(img = 5), (type = 2)"></div>
        <div class="titem t5" @click="(img = 6), (type = 2)"></div>
      </div>
    </div>
    <!--  -->
    <pdf-show
      v-if="pdfUrl"
      :pdfUrl="pdfUrl"
      @clearPdfUrl="clearPdfUrl"
    ></pdf-show>
  </div>
</template>

<script>
import pdfShow from "./pdfShow.vue";
// clearPdfUrl
export default {
  components: {
    pdfShow,
  },
  data() {
    return {
      type: 1,
      img: 12,
      nowDay: "",
      t: null,
      bg01: require("../../assets/hz/012.png"),
      showLoading: true,
      dtype: 1, //督查督办状态
      dstatus: false, //督察督办二级弹窗
      yType: 1,
      pdfUrl: "",
      workType: false,
      yjlogStatus: false, //预警评价
      waterStatus: false,
      warnType: 1,
      moveType: 1,
      visityLog: false,
    };
  },
  watch: {
    dstatus(val) {
      console.log(val);
      console.log(this.img);
      console.log(this.type);
    },
  },
  beforeDestroy() {
    clearInterval(this.t);
    this.t = null;
  },
  mounted() {},
  destroyed() {},
  created() {
    const loading = this.$loading({
      lock: true,
      text: "Loading",
      spinner: "el-icon-loading",
      background: "rgba(0, 0, 0, 0.7)",
    });
    let bgImg = new Image();
    bgImg.src = this.bg01; // 获取背景图片的url
    bgImg.onerror = () => {
      console.log("img onerror");
    };
    bgImg.onload = () => {
      // 等背景图片加载成功后 去除loading
      this.showLoading = false;
      loading.close();
    };
    function weekFilter(val) {
      let week = "";
      switch (val) {
        case 1:
          week = "星期一";
          break;
        case 2:
          week = "星期二";
          break;
        case 3:
          week = "星期三";
          break;
        case 4:
          week = "星期四";
          break;
        case 5:
          week = "星期五";
          break;
        case 6:
          week = "星期六";
          break;
        case 0:
          week = "星期日";
          break;
      }
      return week;
    }
    function add0(val) {
      if (val < 10) return "0" + val;
      return val;
    }
    this.t = setInterval(() => {
      let date = new Date();
      let year = date.getFullYear(),
        month = date.getMonth() + 1,
        day = date.getDate(),
        week = weekFilter(date.getDay()),
        hour = date.getHours(),
        minutes = date.getMinutes();
      this.nowDay =
        year +
        "." +
        add0(month) +
        "." +
        add0(day) +
        " " +
        week +
        " " +
        add0(hour) +
        ":" +
        add0(minutes);
    }, 1000);
  },
  methods: {
    imgMove(type) {
      this.moveType = type;
    },

    clearPdfUrl() {
      this.pdfUrl = "";
    },
    exported() {
      this.pdfUrl =
        "https://zjsrd.sys-npc.cn:82/ms-files/ueditor/2021年杭州市生态环境评价报告.pdf";
    },
    switchType(img) {
      this.img = img;
      this.type = 2;
    },
    noThing() {
      //   this.$message({
      //     message: "正在开发中...",
      //     // type: "warning",
      //   });
    },
  },
};
</script>

<style lang="less" scoped>
//
.waterLog {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 99999;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  .imgLog {
    width: 477px;
    height: 514px;
    position: absolute;
    left: 50%;
    top: 200px;
    transform: translateX(-50%);
  }
  img {
  }
  .dele {
    position: absolute;
    width: 30px;
    height: 30px;
    top: 205px;
    right: 730px;
    z-index: 9;
  }
}
.qiImg {
  // width: 1920px !important;
  // height: 1474px !important;
}
.waterBtn {
  width: 575px;
  height: 150px;
  position: absolute;
  left: 620px;
  bottom: 380px;
  // background: #ff000040;
}
.dcdb {
  position: absolute;
  width: 430px;
  // height: 400px;
  // background: #ff000070;
  top: 115px;
  left: 38px;
  div {
    width: 100%;
    height: 120px;
    // background: #ff000070;
    margin-bottom: 6px;
  }
}
.work {
  width: 435px;
  height: 110px;
  position: absolute;
  top: 187px;
  left: 10px;
  // background: #ff000070;
}
.workTj {
  width: 1920px !important;
  height: 1080px !important;
}
.workBody {
  width: 100%;
  height: 900px;
  // overflow: ;
  position: absolute;
  top: 115px;
  .imgBody {
    // height: 100%;
    width: 2230px !important;
    img {
      width: 100%;
      height: 893px;
    }
    position: absolute;
    left: 50px;
    top: 0;
    transition: all 0.2s linear;
  }
  .moveLeft {
    left: -350px;
  }
  .moveRight {
    left: 40px;
  }
  .left,
  .right {
    position: absolute;
    width: 43px;
    height: 43px;
    z-index: 10;
  }
  .left {
    left: 0;
    top: 400px;
  }
  .right {
    right: 40px;
    top: 400px;
  }
}
.workDiolog {
  width: 100%;
  top: 0;
  left: 0;
  z-index: 99999;
  position: fixed;
  img {
    width: 100%;
  }
  .dele {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 260px;
    right: 710px;
  }
}
.yjlog {
  width: 100%;
  top: 0;
  left: 0;
  z-index: 99999;
  position: fixed;
  img {
    width: 100%;
  }
  .dele {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 370px;
    right: 705px;
  }
}
.yjSwitch {
  display: flex;
  align-items: center;
  position: absolute;
  left: 36px;
  top: 575px;
  // background: #ff000070;
  div {
    width: 135px;
    height: 35px;
    margin-right: 10px;
  }
  div:last-child {
    width: 160px;
  }
}
.yjpg {
  position: absolute;
  left: 35px;
  top: 60px;
  display: flex;
  align-items: center;
  // background: #ff000040;
  div {
    width: 112px;
    height: 50px;
    // background: #ff000070;
    margin-right: 5px;
  }
}
.yjpg1 {
  position: absolute;
  width: 900px;
  height: 60px;
  // background: #ff000070;
  right: 50px;
  top: 210px;
}
.yjpg2 {
  position: absolute;
  width: 173px;
  height: 50px;
  // background: #ff000070;
  right: 550px;
  bottom: 95px;
}
.dstatusShow {
  width: 100%;
  top: 0;
  left: 0;
  z-index: 99999;
  position: fixed;
  // .box {
  //   width: 790px;
  //   height: 490px;
  //   position: absolute;
  //   left: 565px;
  //   top: 295px;
  //   background: #ff000070;
  //   z-index: 99;
  //   video {
  //     width: 320px;
  //     height: 150px;
  //     position: absolute;
  //     right: 35px;
  //     top: 165px;
  //   }
  //   .dele {
  //     position: absolute;
  //     top: 7px;
  //     right: 14px;
  //     width: 40px;
  //     height: 40px;
  //   }
  // }
  img {
    width: 100%;
  }
  video {
    width: 320px;
    height: 150px;
    position: absolute;
    right: 600px;
    top: 460px;
  }
  .dele {
    position: absolute;
    top: 310px;
    right: 580px;
    width: 40px;
    height: 40px;
  }
}
.dstatus {
  position: absolute;
  width: 250px;
  height: 250px;
  right: 175px;
  top: 225px;
  // background: #ff000070;
  z-index: 9999;
}
.main {
  cursor: pointer;
  .topNav {
    width: 100%;
    position: relative;
  }
  .timess {
    position: absolute;
    bottom: 0px;
    left: 0%;
    width: 100%;
    height: 58px;
    display: flex;
    z-index: 9999;
    align-items: center;
    justify-content: center;
    color: #0ae9e1;
    font-size: 18px;
  }
  .times {
    position: fixed;
    bottom: 0px;
    left: 0%;
    width: 100%;
    height: 58px;
    display: flex;
    z-index: 9999;
    align-items: center;
    justify-content: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    color: #0ae9e1;
    font-size: 18px;
    .titem {
      position: absolute;
      width: 80px;
      height: 50px;
    }
    .t1 {
      left: 720px;
      bottom: 5px;
    }
    .t2 {
      left: 820px;
      bottom: 5px;
    }
    .t3 {
      left: 915px;
      bottom: 5px;
    }
    .t4 {
      left: 1020px;
      bottom: 5px;
    }
    .t5 {
      left: 1120px;
      bottom: 5px;
    }
  }
  .timesImg {
    background-image: url(../../assets/hz/bottom.png);
  }
  .bottomNav {
    width: 100%;
    position: relative;
  }
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background: #000000;
  position: relative;
  img {
    width: 100%;
  }
  .p11 {
    left: 46px;
    top: 80px;
    height: 60px;
  }
  .absolute {
    width: 100px;
    height: 40px;
    position: absolute;
    z-index: 999;
    // background: #ff000070;
  }
  .p1 {
    top: 20px;
    left: 280px;
  }
  .p2 {
    top: 20px;
    left: 380px;
  }
  .p3 {
    top: 20px;
    right: 390px;
  }
  .p4 {
    top: 20px;
    right: 280px;
  }
  .home {
    width: 100%;
    height: 100%;
    position: relative;
    .visityLog {
      // width: 20px;
      width: 127px;
      height: 449px;
      position: absolute;
      top: 185px;
      left: 530px;
    }

    .p5 {
      top: 125px;
      left: 30px;
      width: 400px;
    }
    .p6 {
      top: 425px;
      left: 30px;
      width: 400px;
    }
    .p7 {
      top: 725px;
      left: 30px;
      width: 400px;
    }
    .p8 {
      top: 125px;
      right: 70px;
      width: 400px;
    }
    .p9 {
      top: 425px;
      right: 70px;
      width: 400px;
    }
    .p10 {
      top: 725px;
      right: 70px;
      width: 400px;
    }
    .p11 {
      top: 145px;
      left: 525px;
      width: 140px;
    }
  }
}
</style>