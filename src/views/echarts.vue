<template>
  <div class="contents">
    <!-- 头部 -->
    <div class="tops">
      <div class="leftRight" style="opacity: 0">
        <span>{{ nowDate }}</span>
      </div>
      <div class="middles"><span>省高院数据看板</span></div>
      <div class="leftRight">
        <span>{{ nowDate }}</span>
      </div>
    </div>
    <div class="mainbody">
      <!-- 两侧 -->
      <div class="leftSides"></div>
      <div class="rightSides"></div>
      <!-- 中间 -->
      <div class="middleItem">
        <!-- 中间上部分 -->
        <div class="topItem itemborder">
          <div class="topPaddItem">
            <div class="top-item">
              <div style="width: 100%; height: 100%" id="cu-echarts1"></div>
            </div>
            <div class="top-item">
              <div style="width: 100%; height: 100%" id="cu-echarts2"></div>
            </div>
            <div class="top-item">
              <div style="width: 100%; height: 100%" id="cu-echarts3"></div>
            </div>
          </div>
        </div>
        <!-- 中间下部分  -->
        <div class="bottomItem">
          <div class="bottom-item itemborder">
            <div class="setEcharts">
              <div class="setEcharts" id="cu-echarts4"></div>
            </div>
          </div>
          <div class="bottom-item itemborder">
            <div class="setEcharts" id="myChart1"></div>
          </div>
          <div class="bottom-item itemborder suqian">
            <div class="setEcharts">
              <p class="suqianTit"><span>诉前化解情况</span></p>
              <p class="suqianUnit"><span>(万件)</span></p>
              <div class="suqianItems">
                <div
                  class="suqian-item"
                  v-for="(item, index) in litigation"
                  :key="item.num"
                >
                  <span class="sitext sit1">{{ 2016 + index }}</span>
                  <div class="circleItem" v-for="p in item.type" :key="p + 's'">
                    <img src="../assets/circle.png" alt="" />
                  </div>
                  <div
                    class="circleItem"
                    v-for="p in 9 - item.type"
                    :key="p + 'i'"
                  >
                    <img
                      src="../assets/circle.png"
                      style="opacity: 0.3"
                      alt=""
                    />
                  </div>
                  <span class="sitext sit2">{{ item.num }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="bottom-item itemborder">
            <div class="setEcharts" id="myChart3"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      litigation: [
        { num: 5.5, type: 2 },
        { num: 11.7, type: 5 },
        { num: 16.2, type: 6 },
        { num: 18.4, type: 7 },
        { num: 24.5, type: 9 },
      ],
      nowDate: "2021-05-15 09:29:47",
      timer: null,
    };
  },
  created() {
    this.timer = setInterval(() => {
      this.getNowDate();
    }, 1000);
  },
  mounted() {
    this.setEchartsType1();
    this.setEchartsType2();
    this.setEchartsType3();
    this.setEchartsType4();
    this.setEcharts1();
    this.setEcharts3();
  },
  destroyed() {
    clearInterval(this.timer);
    this.timer = null;
  },
  methods: {
    getNowDate() {
      let date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      let hour = date.getHours();
      let minute = date.getMinutes();
      let second = date.getSeconds();
      this.nowDate =
        year +
        "-" +
        this.dateFilters(month) +
        "-" +
        this.dateFilters(day) +
        " " +
        this.dateFilters(hour) +
        ":" +
        this.dateFilters(minute) +
        ":" +
        this.dateFilters(second);
    },
    dateFilters(val) {
      if (val < 10) {
        return "0" + val;
      }
      return val;
    },
    setEchartsType1() {
      let that = this;
      let Value = [149, 171, 176.8, 168.6, 156.5];
      let xValue = ["2016", "2017", "2018", "2019", "2020"];
      let yValue = Value.map((element) => element / 7);
      let myChart = that.$echarts.init(document.getElementById("cu-echarts1"));
      let option = {
        tooltip: {
          trigger: "axis",
          showDelay: 0, // 显示延迟，添加显示延迟可以避免频繁切换，单位ms
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        title: {
          text: "收案情况",
          textStyle: {
            color: "#fff",
          },
          bottom: 0,
          left: "center",
        },
        //   grid: {
        //   top: 80,
        //   height: "65%",
        //   width: "85%",
        // },
        color: ["#60E3A5"],
        legend: {
          top: 10,
          left: "right",
          //   show: true,
          data: [
            {
              name: "收案（万件）",
              itemStyle: {
                color: "#60E3A5",
              },
            },
          ],
          textStyle: {
            color: "#60E3A5",
          },
        },
        grid: {
          top: "15%",
          //   right: "10%",
          left: "10%",
          bottom: "20%",
        },
        xAxis: [
          {
            type: "category",
            color: "#59588D",
            data: xValue,
            axisLabel: {
              margin: 20,
              color: "#fff",
              textStyle: {
                fontSize: 10,
              },
              rotate: -20,
            },
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255)",
              },
            },
            axisTick: {
              show: true,
            },
          },
        ],
        yAxis: [
          {
            axisLabel: {
              formatter: "{value}",
              color: "#ffffff",
              textStyle: {
                fontSize: 10,
              },
            },
            axisLine: {
              lineStyle: {
                color: "rgba(107,107,107,0.37)",
              },
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              //   lineStyle: {
              //     color: "rgba(131,101,101,0.2)",
              //     type: "solid",
              //   },
              show: false,
            },
          },
        ],
        series: [
          {
            type: "bar",
            name: "收案（万件）",
            data: Value,
            barWidth: 40, //柱图宽度
            itemStyle: {
              normal: {
                color: function (params) {
                  //展示正值的柱子，负数设为透明
                  let colorArr =
                    params.value > 0
                      ? ["#0BCFCB", "#90EE90"]
                      : ["rgba(0,0,0,0)", "rgba(0,0,0,0)"];
                  return new that.$echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                      {
                        offset: 0,
                        color: colorArr[0], // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: colorArr[1], // 100% 处的颜色
                      },
                    ],
                    false
                  );
                },
                barBorderRadius: [10, 10, 10, 10],
              },
            },
            label: {
              normal: {
                show: false,
                fontSize: 10,
                fontWeight: "bold",
                color: "#FFCD42",
                position: "top",
              },
            },
          },
          {
            data: [11.9, 14.8, 3.4, -4.6, -7.2],
            type: "line",
            name: "增幅变化",
            lineStyle: {
              type: "solid",
              color: "#83BFF6",
              width: 4,
              shadowColor: "rgba(0, 0, 0, 0.3)", //设置折线阴影
              shadowBlur: 15,
              shadowOffsetY: 0,
              smooth: true, //曲线平滑
            },
          },
        ],
      };
      myChart.setOption(option);
    },
    setEchartsType2() {
      let that = this;
      let Value = [145.4, 166.8, 179.3, 172.3, 160.5];
      let xValue = ["2016", "2017", "2018", "2019", "2020"];
      let yValue = Value.map((element) => element / 7);
      let myChart = that.$echarts.init(document.getElementById("cu-echarts2"));
      let option = {
        tooltip: {
          trigger: "axis",
          showDelay: 0, // 显示延迟，添加显示延迟可以避免频繁切换，单位ms
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        title: {
          text: "结案情况",
          textStyle: {
            color: "#fff",
          },
          bottom: 0,
          left: "center",
        },
        //   grid: {
        //   top: 80,
        //   height: "65%",
        //   width: "85%",
        // },
        color: ["#81C3FA"],
        legend: {
          top: 10,
          left: "right",
          //   show: true,
          data: [
            {
              name: "结案（万件）",
              itemStyle: {
                color: "#81C3FA",
              },
            },
          ],
          textStyle: {
            color: "#81C3FA",
          },
        },
        grid: {
          top: "15%",
          //   right: "10%",
          left: "10%",
          bottom: "20%",
        },
        xAxis: [
          {
            type: "category",
            color: "#59588D",
            data: xValue,
            splitLine: {
              show: true,
              lineStyle: {
                color: "#333",
              },
            },
            axisLabel: {
              margin: 20,
              color: "#81C3FA",
              textStyle: {
                fontSize: 10,
              },
              //   rotate: -20,
            },
            axisLine: {
              lineStyle: {
                color: "#81C3FA",
              },
            },
            axisTick: {
              show: true,
            },
          },
        ],
        yAxis: [
          {
            axisLabel: {
              formatter: "{value}",
              color: "#81C3FA",
              textStyle: {
                fontSize: 10,
              },
            },
            axisLine: {
              lineStyle: {
                color: "#81C3FA",
              },
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: "rgba(131,101,101,0.2)",
                type: "solid",
              },
            },
          },
        ],
        series: [
          {
            type: "bar",
            name: "结案（万件）",
            data: Value,
            barWidth: 40, //柱图宽度
            itemStyle: {
              normal: {
                color: function (params) {
                  //展示正值的柱子，负数设为透明
                  let colorArr =
                    params.value > 0
                      ? ["#82ACFA", "#84DCFB"]
                      : ["rgba(0,0,0,0)", "rgba(0,0,0,0)"];
                  return new that.$echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                      {
                        offset: 0,
                        color: colorArr[0], // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: colorArr[1], // 100% 处的颜色
                      },
                    ],
                    false
                  );
                },
                barBorderRadius: [10, 10, 10, 10],
              },
            },
            label: {
              normal: {
                show: false,
                fontSize: 10,
                fontWeight: "bold",
                color: "#FFCD42",
                position: "top",
              },
            },
          },
        ],
      };
      myChart.setOption(option);
    },
    setEchartsType3() {
      let xValue = ["2016", "2017", "2018", "2019", "2020"];
      let yValue1 = [274.6, 322.8, 337.3, 327.5, 296.1];
      let yValue2 = [260.3, 314.9, 345.8, 336, 303.8];
      let myChart = this.$echarts.init(document.getElementById("cu-echarts3"));
      var option = {
        title: {
          text: "法官人均收结案对比情况",
          textStyle: {
            color: "#fff",
          },
          bottom: 0,
          left: "center",
        },
        color: ["#216BC0", "#90FFC2"],
        legend: {
          top: 10,
          left: "right",
          //   show: true,
          data: [
            {
              name: "收案（件/人）",
              itemStyle: {
                color: "#216BC0",
              },
              textStyle: {
                color: "#216BC0",
              },
            },
            {
              name: "结案（件/人）",
              itemStyle: {
                color: "#90FFC2",
              },
              textStyle: {
                color: "#90FFC2",
              },
            },
          ],
        },
        grid: {
          left: "5%",
          right: "5%",
          bottom: "5%",
          top: "10%",
          containLabel: true,
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "none",
          },
          formatter: function (params) {
            return (
              params[0].name +
              "<br/>" +
              "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:rgba(36,207,233,0.9)'></span>" +
              params[0].seriesName +
              " : " +
              Number(params[0].value).toLocaleString() +
              " 件<br/>"
            );
          },
        },
        xAxis: {
          show: false,
          type: "value",
        },
        yAxis: [
          {
            type: "category",
            inverse: true,
            axisLabel: {
              show: true,
              textStyle: {
                color: "#fff",
              },
            },
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            data: xValue,
          },
          {
            type: "category",
            inverse: true,
            axisTick: "none",
            axisLine: "none",
            show: true,
            axisLabel: {
              textStyle: {
                color: "#ffffff",
                fontSize: "12",
              },
              formatter: function (value) {
                return value.toLocaleString();
              },
            },
            // data: yValue1,
          },
        ],
        series: [
          {
            name: "收案（件/人）",
            type: "bar",
            zlevel: 1,
            itemStyle: {
              normal: {
                barBorderRadius: 30,
                color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: "#2C5DBE",
                  },
                  {
                    offset: 1,
                    color: "#1C6FC3",
                  },
                ]),
              },
            },
            barWidth: 10,
            data: yValue1,
            label: {
              show: true,
              position: "right",
              color: "#fff",
            },
          },
          {
            name: "结案（件/人）",
            type: "bar",
            barWidth: 10,
            barGap: "50%",
            data: yValue2,
            label: {
              show: true,
              position: "right",
              color: "#fff",
            },
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: "#8BF2A4",
                  },
                  {
                    offset: 1,
                    color: "#81FACF",
                  },
                ]),
                barBorderRadius: 30,
              },
            },
          },
        ],
      };
      myChart.setOption(option);
    },
    setEchartsType4() {
      let that = this;
      let Value = [3138, 11808, 6889, 3267, 385];
      let xValue = ["2016", "2017", "2018", "2019", "2020"];
      let yValue = Value.map((element) => element);
      let myChart = that.$echarts.init(document.getElementById("cu-echarts4"));
      let option = {
        title: {
          text: "超12个月未结案变化情况",
          textStyle: {
            color: "#fff",
          },
          top: 0,
          //   left: "center",
        },
        tooltip: {
          trigger: "axis",
          showDelay: 0, // 显示延迟，添加显示延迟可以避免频繁切换，单位ms
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        //   grid: {
        //   top: 80,
        //   height: "65%",
        //   width: "85%",
        // },
        color: ["#81B9FA"],
        legend: {
          top: 10,
          left: "right",
          //   show: true,
          data: [
            {
              name: "结案（件）",
              itemStyle: {
                color: "#81B9FA",
              },
            },
          ],
          textStyle: {
            color: "#81B9FA",
          },
        },
        grid: {
          top: "15%",
          //   right: "10%",
          left: "10%",
          bottom: "20%",
        },
        xAxis: [
          {
            type: "category",
            color: "#81B9FA",
            data: xValue,
            axisLabel: {
              margin: 20,
              color: "#81B9FA",
              textStyle: {
                fontSize: 10,
              },
              //   rotate: -20,
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: "#333",
              },
            },
            axisLine: {
              lineStyle: {
                color: "#81B9FA",
              },
            },
            axisTick: {
              show: true,
            },
          },
        ],
        yAxis: [
          {
            axisLabel: {
              formatter: "{value}",
              color: "#81B9FA",
              textStyle: {
                fontSize: 10,
              },
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: "#333",
              },
            },
            axisLine: {
              lineStyle: {
                color: "#81B9FA",
              },
            },
            axisTick: {
              show: false,
            },
          },
        ],
        series: [
          {
            type: "bar",
            name: "结案（件）",
            data: Value,
            barWidth: 30, //柱图宽度
            itemStyle: {
              normal: {
                color: function (params) {
                  //展示正值的柱子，负数设为透明
                  let colorArr =
                    params.value > 0
                      ? ["#81AFF9", "#83D9FB"]
                      : ["rgba(0,0,0,0)", "rgba(0,0,0,0)"];
                  return new that.$echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                      {
                        offset: 0,
                        color: colorArr[0], // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: colorArr[1], // 100% 处的颜色
                      },
                    ],
                    false
                  );
                },
                barBorderRadius: [20, 20, 20, 20],
              },
            },
            label: {
              normal: {
                show: false,
                fontSize: 10,
                fontWeight: "bold",
                color: "#FFCD42",
                position: "top",
              },
            },
          },
          {
            data: yValue,
            type: "line",
            name: "结案",
            lineStyle: {
              type: "solid",
              color: "#574BA5",
              width: 4,
              shadowColor: "rgba(0, 0, 0, 0.3)", //设置折线阴影
              shadowBlur: 15,
              shadowOffsetY: 0,
              smooth: true, //曲线平滑
            },
          },
        ],
      };
      myChart.setOption(option);
    },
    setEcharts1() {
      let myChart = this.$echarts.init(document.getElementById("myChart1"));
      // 绘制图表
      myChart.setOption({
        title: {
          text: "未结案变化情况",
          textStyle: {
            color: "#fff",
          },
        },
        legend: {
          top: 30,
          left: "right",
          data: [
            {
              name: "未结案（万件）",
            },
          ],
          textStyle: {
            color: "#3668ad",
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,

          data: ["2016", "2017", "2018", "2019", "2020"],
          axisLabel: {
            color: "#fff",
          },
          axisLine: {
            lineStyle: {
              color: "#fff",
            },
          },
        },
        yAxis: {
          type: "value",
          axisLine: {
            lineStyle: {
              color: "#fff",
            },
          },
          axisLabel: {
            color: "#fff",
          },
          splitLine: {
            show: false,
          },
        },
        series: [
          {
            data: [23.8, 27.9, 25.4, 21.8, 17.8],
            type: "line",
            areaStyle: {},
            smooth: true, //曲线平滑
            name: "未结案（万件）",
            label: {
              normal: {
                show: true,
                fontSize: 10,
                // fontWeight: "bold",
                color: "#fff",
                position: "top",
              },
            },
            itemStyle: {
              normal: {
                // color:'rgba(0,146,246,.3)',
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1, //变化度
                  //三种由深及浅的颜色
                  [
                    {
                      offset: 0,
                      color: "#2A77A3",
                    },
                    {
                      offset: 1,
                      color: "#433D81",
                    },
                  ]
                ),
                lineStyle: {
                  color: "#23B7E5",
                  width: 4,
                },
              },
            },
          },
        ],
      });
    },
    setEcharts3() {
      let that = this;
      let myChart = this.$echarts.init(document.getElementById("myChart3"));
      myChart.setOption({
        title: {
          text: "各类案件收案情况",
          textStyle: {
            color: "#fff",
          },
        },
        tooltip: {
          trigger: "axis",
          showDelay: 0, // 显示延迟，添加显示延迟可以避免频繁切换，单位ms
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        color: ["#82B8FA", "#54E1AA", "#901EBD", "#83DBFA"],
        legend: {
          data: [
            {
              name: "刑事",
              itemStyle: {
                color: "#82B8FA",
              },
            },
            {
              name: "民商事",
              itemStyle: {
                color: "#54E1AA",
              },
            },
            {
              name: "行政",
              itemStyle: {
                color: "#901EBD",
              },
            },
            { name: "执行", itemStyle: { color: "#83DBFA" } },
          ],
          textStyle: {
            color: "#fff",
          },
          top: 40,
          left: "right",
          right: 20,
        },
        grid: {
          top: 80,
          height: "65%",
          width: "85%",
        },
        xAxis: [
          {
            type: "category",
            data: ["2016", "2017", "2018", "2019", "2020"],
            axisLabel: {
              textStyle: {
                color: "#81C3FA",
              },
            },
            axisLine: {
              lineStyle: {
                color: "#81C3FA",
              },
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: "#333",
              },
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            axisLine: {
              lineStyle: {
                color: "#81C3FA",
              },
            },
            axisLabel: {
              textStyle: {
                color: "#81C3FA",
              },
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: "#333",
              },
            },
          },
        ],
        series: [
          {
            name: "刑事",
            type: "bar",
            stack: "总量",
            barWidth: 20, //柱图宽度
            /*itemStyle : { normal: {label : {show: true, position: 'insideTop',textStyle:{color:'#000'}}}},*/
            data: [8.6, 7.5, 7.1, 7.2, 5.9],
            itemStyle: {
              normal: {
                color: function (params) {
                  //展示正值的柱子，负数设为透明
                  let colorArr =
                    params.value > 0
                      ? ["#82B8F8", "#83D7FB"]
                      : ["rgba(0,0,0,0)", "rgba(0,0,0,0)"];
                  return new that.$echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                      {
                        offset: 0,
                        color: colorArr[0], // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: colorArr[1], // 100% 处的颜色
                      },
                    ],
                    false
                  );
                },
                barBorderRadius: [50, 50, 50, 50],
              },
            },
          },
          {
            name: "民商事",
            type: "bar",
            stack: "总量",
            /*itemStyle : { normal: {label : {show: true, position: 'insideTop',textStyle:{color:'#000'}}}},*/
            data: [70.9, 79, 81, 72, 64],
            barWidth: 20, //柱图宽度
            itemStyle: {
              normal: {
                color: function (params) {
                  //展示正值的柱子，负数设为透明
                  let colorArr =
                    params.value > 0
                      ? ["#17D3C7", "#88ED94"]
                      : ["rgba(0,0,0,0)", "rgba(0,0,0,0)"];
                  return new that.$echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                      {
                        offset: 0,
                        color: colorArr[0], // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: colorArr[1], // 100% 处的颜色
                      },
                    ],
                    false
                  );
                },
                barBorderRadius: [50, 50, 50, 50],
              },
            },
          },
          {
            name: "行政",
            type: "bar",
            stack: "总量",
            barWidth: 20, //柱图宽度
            /*itemStyle : { normal: {label : {show: true, position: 'insideTop',textStyle:{color:'#000'}}}},*/
            data: [11228, 13110, 15158, 19341, 15423],
            itemStyle: {
              normal: {
                color: function (params) {
                  //展示正值的柱子，负数设为透明
                  let colorArr =
                    params.value > 0
                      ? ["#8B279D", "#aa54b9"]
                      : ["rgba(0,0,0,0)", "rgba(0,0,0,0)"];
                  return new that.$echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                      {
                        offset: 0,
                        color: colorArr[0], // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: colorArr[1], // 100% 处的颜色
                      },
                    ],
                    false
                  );
                },
                barBorderRadius: [50, 50, 50, 50],
              },
            },
          },
          {
            name: "执行",
            type: "bar",
            stack: "总量",
            barWidth: 20, //柱图宽度
            /*itemStyle : { normal: {label : {show: true, position: 'insideTop',textStyle:{color:'#000'}}}},*/
            data: [49.36, 62.8, 65, 62.4, 57.9],
            itemStyle: {
              normal: {
                color: function (params) {
                  //展示正值的柱子，负数设为透明
                  let colorArr =
                    params.value > 0
                      ? ["#C5F5FE", "#84DCFB"]
                      : ["rgba(0,0,0,0)", "rgba(0,0,0,0)"];
                  return new that.$echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                      {
                        offset: 0,
                        color: colorArr[0], // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: colorArr[1], // 100% 处的颜色
                      },
                    ],
                    false
                  );
                },
                barBorderRadius: [50, 50, 50, 50],
              },
            },
          },
        ],
      });
    },
  },
};
</script>

<style>
.circleItem {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #25477560;
  text-align: center;
  line-height: 35px;
  margin-right: 10px;
}
.circleItem > img {
  width: 15px;
  height: 15px;
  margin-top: 5px;
}
.sit2 {
  font-size: 20px;
  color: aquamarine;
}
.sit1 {
  font-size: 18px;
  color: #fff;
  padding-right: 5px;
}
.sitext {
}
.suqian-item {
  width: 100%;
  padding: 0 10px;
  color: #fff;
  display: flex;
  align-items: center;
  margin-top: 20px;
}
.suqianItems {
  width: 100%;
}
.suqianUnit {
  color: aquamarine;
  font-size: 20px;
  font-weight: 600;
  width: 100%;
  text-align: right;
  padding-right: 10px;
}
.suqianTit {
  color: #fff;
  font-size: 22px;
  font-weight: 600;
  width: 100%;
  padding-left: 5px;
}
.setEcharts {
  background: #25477560;
  width: 100%;
  height: 100%;
  padding-top: 10px;
}
.middleItem {
  position: relative;
  z-index: 9;
  width: 95%;
  margin: 0 auto;
}
.bottom-item,
.top-item {
  height: 100%;
}
.bottom-item {
  width: 24.5%;
  padding: 5px;
}
.top-item {
  flex: 1;
}
.topPaddItem {
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 100%;
  background: #25477560;
}
.topItem {
  padding: 10px;
}
.topItem,
.bottomItem {
  width: 100%;
  height: 345px;
  /* background: #f00; */
}
.bottomItem {
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.itemborder {
  border: 2px solid #254775;
}
.leftSides {
  left: 0;
  background: url("../assets/left.png") no-repeat;
  background-size: 100% 100%;
}
.rightSides {
  right: 0;
  background: url("../assets/right.png") no-repeat;
  background-size: 100% 100%;
}
.leftSides,
.rightSides {
  width: 200px;
  height: 700px;
  position: absolute;
  top: 0;
}
.mainbody {
  position: relative;
  width: 100%;
  margin: 30px auto 0;
  height: 700px;
  /* background: rgb(143, 141, 141); */
  /* padding: 0 200px; */
}
.leftRight,
.middles {
  text-align: center;
  color: #fff;
  height: 100px;
  line-height: 100px;
}
.middles {
  width: 60%;
  font-size: 40px;
}
.leftRight {
  width: 20%;
  font-size: 20px;
  line-height: 80px;
}
.contents {
  width: 100%;
  height: 100%;
  background: #0a182c;
}
.tops {
  background: url("../assets/top.png") no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100px;
  display: flex;
  align-content: center;
  justify-content: space-between;
}
</style>