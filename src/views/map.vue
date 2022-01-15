<template>
  <div>
    <h1 style="text-align: center">高德地图</h1>
    <div id="container"></div>
    <div class="input-card">
      <h4>选择省份</h4>
      <select
        name="code-list"
        id="adcode-list"
        style="height: 28px; margin-right: 10px"
        v-model="adcode"
        @change="changeAdcode"
      >
        <option v-if="adcodes.length == 0" value="-1">选择省份</option>
        <option
          v-else
          v-for="(item, index) in adcodes"
          :selected="item.adcode == adcode"
          :key="index"
          :value="item.adcode"
        >
          {{ item.adcode == 100000 ? "选择省份" : item.name }}
        </option>
      </select>
      <h4>选择层级</h4>
      <select
        name="code-list"
        style="height: 28px; margin-right: 10px"
        v-model="depth"
        @change="changeDepth"
      >
        <option value="0">0 - 显示省级</option>
        <option value="1">1 - 显示市级</option>
        <option :selected="depth == 2" value="2">2 - 显示区/县级</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      map: null,
      adcodes: [],
      adcode: "330000",
      depth: 2,
    };
  },
  created() {},
  mounted() {
    // 构造下拉框
    this.setProVice();
    // 创建省份图层
    this.iniMap();
  },
  methods: {
    // 颜色辅助方法
    getColorByAdcode(adcode) {
      var colors = {};
      if (!colors[adcode]) {
        var gb = Math.random() * 155 + 50;
        colors[adcode] = "rgb(20h0,150," + gb + " )";
      }
      return colors[adcode];
    },
    iniMap() {
      this.map = new AMap.Map("container", {
        zoom: 8,
        center: [120.082787, 30.297742],
        pitch: 0,
        viewMode: "3D",
      });
      this.initPro(this.adcode, this.depth);
    },
    initPro(code, dep) {
      let that = this;
      console.log(code, dep);
      var disProvince;
      dep = typeof dep == "undefined" ? 2 : dep;
      disProvince && disProvince.setMap(null);

      disProvince = new AMap.DistrictLayer.Province({
        zIndex: 12,
        adcode: [code],
        depth: dep,
        styles: {
          fill: function (properties) {
            // properties为可用于做样式映射的字段，包含
            // NAME_CHN:中文名称
            // adcode_pro
            // adcode_cit
            // adcode
            var adcode = properties.adcode;
            return that.getColorByAdcode(adcode);
          },
          "province-stroke": "cornflowerblue",
          "city-stroke": "white", // 中国地级市边界
          "county-stroke": "rgba(255,255,255,0.5)", // 中国区县边界
        },
      });

      disProvince.setMap(this.map);
    },
    changeAdcode() {
      console.log(this.adcode);
      if (this.adcode != 100000) {
        this.initPro(this.adcode, this.depth);
      }
    },
    changeDepth() {
      console.log(this.depth);
      this.initPro(this.adcode, this.depth);
    },
    setProVice() {
      this.adcodes = adcodes;
    },
  },
};
</script>

<style >
.map {
  width: 100%;
  height: 1000px;
}
#container {
  width: 100%;
  height: 800px;
  margin: 0;
}
.input-card {
  position: fixed;
  bottom: 100px;
  z-index: 999;
  right: 30px;
  background: #fff;
  padding: 10px;
}
</style>