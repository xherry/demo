<template>
  <div class="content">
    <div class="roundBoxs">
        <div class="waves">
        <canvas id="waves" width="460" height="460"></canvas>
      </div>
      <div class="canvass">
        <canvas id="canvasqiu"></canvas>
        <div class="nums">
          <p>2040</p>
          <p>执法办案查询总数</p>
        </div>
      </div>
      <div class="roundBoxContent">
        <div
          class="roundBox"
          :class="animate ? 'activeAnimation' : 'stopAnimate'"
        >
          <div class="round1">
            <div
              class="btns"
              @click="toPath('县法院')"
              :class="animate ? 'activeAnimation' : 'stopAnimate'"
              @mouseover="mouseOver"
              @mouseleave="mouseLeave"
              style="left: 480px; top: 240px"
            >
              <div class="btnsBox">
                <div class="icon"></div>
                <div class="iconText">
                  <div class="label">县法院</div>
                </div>
              </div>
            </div>
            <div
              class="btns"
              @click="toPath('县行政执法局')"
              :class="animate ? 'activeAnimation' : 'stopAnimate'"
              @mouseover="mouseOver"
              @mouseleave="mouseLeave"
              style="left: 335.161px; top: 460.328px"
            >
              <div class="btnsBox">
                <div class="icon"></div>
                <div class="iconText">
                  <div class="label">县行政执法局</div>
                </div>
              </div>
            </div>
            <div
              class="btns"
              @click="toPath('县市场监管局')"
              :class="animate ? 'activeAnimation' : 'stopAnimate'"
              @mouseover="mouseOver"
              @mouseleave="mouseLeave"
              style="left: 75.464px; top: 414.722px"
            >
              <div class="btnsBox">
                <div class="icon"></div>
                <div class="iconText">
                  <div class="label">县市场监管局</div>
                </div>
              </div>
            </div>
            <div
              class="btns"
              @click="toPath('县农业农村局')"
              :class="animate ? 'activeAnimation' : 'stopAnimate'"
              @mouseover="mouseOver"
              @mouseleave="mouseLeave"
              style="left: 14.3598px; top: 158.229px"
            >
              <div class="btnsBox">
                <div class="icon"></div>
                <div class="iconText">
                  <div class="label">县农业农村局</div>
                </div>
              </div>
            </div>
            <div
              class="btns"
              @click="toPath('县水利局')"
              :class="animate ? 'activeAnimation' : 'stopAnimate'"
              @mouseover="mouseOver"
              @mouseleave="mouseLeave"
              style="left: 225.601px; top: 0.432347px"
            >
              <div class="btnsBox">
                <div class="icon"></div>
                <div class="iconText">
                  <div class="label">县水利局</div>
                </div>
              </div>
            </div>
            <div
              class="btns"
              @click="toPath('台州生态环境局三门分局')"
              :class="animate ? 'activeAnimation' : 'stopAnimate'"
              @mouseover="mouseOver"
              @mouseleave="mouseLeave"
              style="left: 454.221px; top: 131.791px"
            >
              <div class="btnsBox">
                <div class="icon"></div>
                <div class="iconText">
                  <div class="label">台州生态环境局三门分局</div>
                </div>
              </div>
            </div>
            <div
              class="btns"
              :class="animate ? 'activeAnimation' : 'stopAnimate'"
              @mouseover="mouseOver"
              @mouseleave="mouseLeave"
              style="left: 424.279px; top: 393.757px"
              @click="toPath('县自然资源和规划局')"
            >
              <div class="btnsBox">
                <div class="icon"></div>
                <div class="iconText">
                  <div class="label">县自然资源和规划局</div>
                </div>
              </div>
            </div>
          </div>
          <div class="round2"></div>
          <div class="round3"></div>
          <div class="round4"></div>
          <div class="round5">
            <!-- <div
                class="line"
                v-for="item in 120"
                :key="item"
                :style="{
                left: Math.random() * 120 + 'px',
                top: Math.random() * 120 + 'px',
                }"
            ></div> -->
            <div class="line" style="left: 120px; top: 60px"></div>
            <div class="line" style="left: 94.5366px; top: 109.063px"></div>
            <div class="line" style="left: 39.7592px; top: 116.483px"></div>
            <div class="line" style="left: 2.1618px; top: 75.9606px"></div>
            <div class="line" style="left: 13.6564px; top: 21.8914px"></div>
            <div class="line" style="left: 64.4865px; top: 0.167975px"></div>
            <div class="line" style="left: 111.509px; top: 29.2288px"></div>
            <div class="line" style="left: 114.811px; top: 84.4077px"></div>
            <div class="line" style="left: 71.5911px; top: 118.87px"></div>
            <div class="line" style="left: 18.5327px; top: 103.364px"></div>
            <div class="line" style="left: 0.67096px; top: 51.0521px"></div>
            <div class="line" style="left: 33.1666px; top: 6.33468px"></div>
            <div class="line" style="left: 88.4379px; top: 7.16736px"></div>
            <div class="line" style="left: 119.572px; top: 52.8434px"></div>
            <div class="line" style="left: 100.142px; top: 104.594px"></div>
            <div class="line" style="left: 46.6408px; top: 118.494px"></div>
            <div class="line" style="left: 4.47845px; top: 82.7455px"></div>
            <div class="line" style="left: 9.44171px; top: 27.6912px"></div>
            <div class="line" style="left: 57.3179px; top: 0.0599784px"></div>
            <div class="line" style="left: 107.471px; top: 23.3047px"></div>
            <div class="line" style="left: 117.331px; top: 77.6957px"></div>
            <div class="line" style="left: 78.5302px; top: 117.067px"></div>
            <div class="line" style="left: 24.0011px; top: 108.001px"></div>
            <div class="line" style="left: 0.0272289px; top: 58.1926px"></div>
            <div class="line" style="left: 26.9571px; top: 9.91843px"></div>
            <div class="line" style="left: 81.9331px; top: 4.15253px"></div>
            <div class="line" style="left: 118.293px; top: 45.7889px"></div>
            <div class="line" style="left: 105.175px; top: 99.4874px"></div>
            <div class="line" style="left: 53.7132px; top: 119.67px"></div>
            <div class="line" style="left: 7.58784px; top: 89.2056px"></div>
            <div class="line" style="left: 5.94894px; top: 33.9523px"></div>
            <div class="line" style="left: 50.1875px; top: 0.80781px"></div>
            <div class="line" style="left: 102.755px; top: 17.9045px"></div>
            <div class="line" style="left: 119.033px; top: 70.731px"></div>
            <div class="line" style="left: 85.2047px; top: 114.449px"></div>
            <div class="line" style="left: 29.9835px; top: 111.952px"></div>
            <div class="line" style="left: 0.239794px; top: 65.3589px"></div>
            <div class="line" style="left: 21.2193px; top: 14.2172px"></div>
            <div class="line" style="left: 75.1152px; top: 1.93511px"></div>
            <div class="line" style="left: 116.182px; top: 38.9373px"></div>
            <div class="line" style="left: 109.562px; top: 93.8171px"></div>
            <div class="line" style="left: 60.8753px; top: 119.994px"></div>
            <div class="line" style="left: 11.4456px; top: 95.2487px"></div>
            <div class="line" style="left: 3.22791px; top: 40.5853px"></div>
            <div class="line" style="left: 43.1973px; top: 2.40079px"></div>
            <div class="line" style="left: 97.4285px; top: 13.1053px"></div>
            <div class="line" style="left: 119.891px; top: 63.6132px"></div>
            <div class="line" style="left: 91.5193px; top: 111.054px"></div>
            <div class="line" style="left: 36.3945px; top: 115.161px"></div>
            <div class="line" style="left: 1.30562px; top: 72.4487px"></div>
            <div class="line" style="left: 16.0354px; top: 19.1697px"></div>
            <div class="line" style="left: 68.0814px; top: 0.546737px"></div>
            <div class="line" style="left: 113.268px; top: 32.3865px"></div>
            <div class="line" style="left: 113.242px; top: 87.6641px"></div>
            <div class="line" style="left: 68.0249px; top: 119.461px"></div>
            <div class="line" style="left: 15.9966px; top: 100.788px"></div>
            <div class="line" style="left: 1.31747px; top: 47.4956px"></div>
            <div class="line" style="left: 36.447px; top: 4.81618px"></div>
            <div class="line" style="left: 91.5678px; top: 8.97575px"></div>
            <div class="line" style="left: 119.895px; top: 56.4437px"></div>
            <div class="line" style="left: 97.3839px; top: 106.93px"></div>
            <div class="line" style="left: 43.1426px; top: 117.583px"></div>
            <div class="line" style="left: 3.20949px; top: 79.3607px"></div>
            <div class="line" style="left: 11.4791px; top: 24.7052px"></div>
            <div class="line" style="left: 60.9323px; top: 0.00724367px"></div>
            <div class="line" style="left: 109.594px; top: 26.23px"></div>
            <div class="line" style="left: 116.161px; top: 81.116px"></div>
            <div class="line" style="left: 75.06px; top: 118.079px"></div>
            <div class="line" style="left: 21.1759px; top: 105.746px"></div>
            <div class="line" style="left: 0.244912px; top: 54.5843px"></div>
            <div class="line" style="left: 30.0329px; top: 8.01949px"></div>
            <div class="line" style="left: 85.2564px; top: 5.57469px"></div>
            <div class="line" style="left: 119.043px; top: 49.325px"></div>
            <div class="line" style="left: 102.715px; top: 102.136px"></div>
            <div class="line" style="left: 50.1313px; top: 119.183px"></div>
            <div class="line" style="left: 5.92422px; top: 85.9963px"></div>
            <div class="line" style="left: 7.61561px; top: 30.7446px"></div>
            <div class="line" style="left: 53.7699px; top: 0.324332px"></div>
            <div class="line" style="left: 105.212px; top: 20.5556px"></div>
            <div class="line" style="left: 118.279px; top: 74.2665px"></div>
            <div class="line" style="left: 81.88px; top: 115.868px"></div>
            <div class="line" style="left: 26.9095px; top: 110.05px"></div>
            <div class="line" style="left: 0.0255389px; top: 61.7504px"></div>
            <div class="line" style="left: 24.0467px; top: 11.965px"></div>
            <div class="line" style="left: 78.5844px; top: 2.95072px"></div>
            <div class="line" style="left: 117.348px; top: 42.3588px"></div>
            <div class="line" style="left: 107.436px; top: 96.7404px"></div>
            <div class="line" style="left: 57.2609px; top: 119.937px"></div>
            <div class="line" style="left: 9.41104px; top: 92.2608px"></div>
            <div class="line" style="left: 4.50008px; top: 37.2018px"></div>
            <div class="line" style="left: 46.6964px; top: 1.49347px"></div>
            <div class="line" style="left: 100.185px; top: 15.4444px"></div>
            <div class="line" style="left: 119.565px; top: 67.2132px"></div>
            <div class="line" style="left: 88.3877px; top: 112.86px"></div>
            <div class="line" style="left: 33.1156px; top: 113.64px"></div>
            <div class="line" style="left: 0.662486px; top: 68.8915px"></div>
            <div class="line" style="left: 18.5739px; top: 16.5963px"></div>
            <div class="line" style="left: 71.647px; top: 1.1413px"></div>
            <div class="line" style="left: 114.834px; top: 35.6444px"></div>
            <div class="line" style="left: 111.479px; top: 90.8201px"></div>
            <div class="line" style="left: 64.4297px; top: 119.836px"></div>
            <div class="line" style="left: 13.6202px; top: 98.0646px"></div>
            <div class="line" style="left: 2.17698px; top: 43.9844px"></div>
            <div class="line" style="left: 39.8128px; top: 3.49798px"></div>
            <div class="line" style="left: 94.5832px; top: 10.9694px"></div>
            <div class="line" style="left: 120px; top: 60.057px"></div>
            <div class="line" style="left: 94.49px; top: 109.096px"></div>
            <div class="line" style="left: 39.7055px; top: 116.464px"></div>
            <div class="line" style="left: 2.14666px; top: 75.9057px"></div>
            <div class="line" style="left: 13.6926px; top: 21.8474px"></div>
            <div class="line" style="left: 64.5433px; top: 0.172264px"></div>
            <div class="line" style="left: 111.538px; top: 29.2778px"></div>
            <div class="line" style="left: 114.788px; top: 84.4597px"></div>
            <div class="line" style="left: 71.5352px; top: 118.881px"></div>
            <div class="line" style="left: 18.4915px; top: 103.325px"></div>
            <div class="line" style="left: 0.679487px; top: 50.9957px"></div>
            <div class="line" style="left: 33.2175px; top: 6.30922px"></div>
            <div class="line" style="left: 88.488px; top: 7.19439px"></div>
            <div class="line" style="left: 119.578px; top: 52.8999px"></div>
            <div class="line" style="left: 100.1px; top: 104.632px"></div>
            <div class="line" style="left: 46.5852px; top: 118.481px"></div>
            <div class="line" style="left: 4.45687px; top: 82.6927px"></div>
            <div class="line" style="left: 9.47243px; top: 27.6432px"></div>
            <div class="line" style="left: 57.3748px; top: 0.0574575px"></div>
            <div class="line" style="left: 107.505px; top: 23.3498px"></div>
            <div class="line" style="left: 117.314px; top: 77.7501px"></div>
            <div class="line" style="left: 78.476px; top: 117.084px"></div>
            <div class="line" style="left: 23.9555px; top: 107.967px"></div>
            <div class="line" style="left: 0.0289729px; top: 58.1356px"></div>
            <div class="line" style="left: 27.0046px; top: 9.88706px"></div>
            <div class="line" style="left: 81.9861px; top: 4.1734px"></div>
            <div class="line" style="left: 118.306px; top: 45.8443px"></div>
            <div class="line" style="left: 105.137px; top: 99.5303px"></div>
            <div class="line" style="left: 53.6565px; top: 119.664px"></div>
            <div class="line" style="left: 7.56012px; top: 89.1558px"></div>
            <div class="line" style="left: 5.97371px; top: 33.901px"></div>
            <div class="line" style="left: 50.2438px; top: 0.798515px"></div>
            <div class="line" style="left: 102.795px; top: 17.9451px"></div>
            <div class="line" style="left: 119.022px; top: 70.7871px"></div>
            <div class="line" style="left: 85.1529px; top: 114.473px"></div>
            <div class="line" style="left: 29.9342px; top: 111.923px"></div>
            <div class="line" style="left: 0.23473px; top: 65.3021px"></div>
            <div class="line" style="left: 21.2629px; top: 14.1804px"></div>
            <div class="line" style="left: 75.1703px; top: 1.94949px"></div>
            <div class="line" style="left: 116.202px; top: 38.9907px"></div>
            <div class="line" style="left: 109.53px; top: 93.8642px"></div>
            <div class="line" style="left: 60.8183px; top: 119.994px"></div>
            <div class="line" style="left: 11.4121px; top: 95.2025px"></div>
            <div class="line" style="left: 3.24637px; top: 40.5314px"></div>
            <div class="line" style="left: 43.252px; top: 2.38486px"></div>
            <div class="line" style="left: 97.473px; top: 13.1409px"></div>
            <div class="line" style="left: 119.888px; top: 63.6701px"></div>
            <div class="line" style="left: 91.4708px; top: 111.084px"></div>
            <div class="line" style="left: 36.3421px; top: 115.139px"></div>
            <div class="line" style="left: 1.29382px; top: 72.3929px"></div>
            <div class="line" style="left: 16.0742px; top: 19.128px"></div>
            <div class="line" style="left: 68.1379px; top: 0.554441px"></div>
            <div class="line" style="left: 113.294px; top: 32.4371px"></div>
            <div class="line" style="left: 113.216px; top: 87.7146px"></div>
            <div class="line" style="left: 67.9685px; top: 119.469px"></div>
            <div class="line" style="left: 15.9579px; top: 100.747px"></div>
            <div class="line" style="left: 1.32938px; top: 47.4398px"></div>
            <div class="line" style="left: 36.4994px; top: 4.79383px"></div>
            <div class="line" style="left: 91.6163px; top: 9.00577px"></div>
            <div class="line" style="left: 119.898px; top: 56.5006px"></div>
            <div class="line" style="left: 97.3393px; top: 106.966px"></div>
            <div class="line" style="left: 43.0879px; top: 117.567px"></div>
            <div class="line" style="left: 3.19112px; top: 79.3068px"></div>
            <div class="line" style="left: 11.5126px; top: 24.6591px"></div>
            <div class="line" style="left: 60.9893px; top: 0.00815641px"></div>
            <div class="line" style="left: 109.626px; top: 26.2771px"></div>
            <div class="line" style="left: 116.141px; top: 81.1694px"></div>
            <div class="line" style="left: 75.0048px; top: 118.094px"></div>
            <div class="line" style="left: 21.1324px; top: 105.709px"></div>
            <div class="line" style="left: 0.250083px; top: 54.5276px"></div>
            <div class="line" style="left: 30.0823px; top: 7.99104px"></div>
            <div class="line" style="left: 85.3081px; top: 5.59871px"></div>
            <div class="line" style="left: 119.053px; top: 49.3811px"></div>
            <div class="line" style="left: 102.675px; top: 102.177px"></div>
            <div class="line" style="left: 50.0751px; top: 119.173px"></div>
            <div class="line" style="left: 5.89954px; top: 85.945px"></div>
            <div class="line" style="left: 7.64343px; top: 30.6949px"></div>
            <div class="line" style="left: 53.8266px; top: 0.31844px"></div>
            <div class="line" style="left: 105.25px; top: 20.5985px"></div>
            <div class="line" style="left: 118.266px; top: 74.3218px"></div>
            <div class="line" style="left: 81.8269px; top: 115.889px"></div>
            <div class="line" style="left: 26.862px; top: 110.019px"></div>
            <div class="line" style="left: 0.0239031px; top: 61.6935px"></div>
            <div class="line" style="left: 24.0924px; top: 11.9308px"></div>
            <div class="line" style="left: 78.6386px; top: 2.9684px"></div>
            <div class="line" style="left: 117.365px; top: 42.4133px"></div>
            <div class="line" style="left: 107.401px; top: 96.7854px"></div>
            <div class="line" style="left: 57.204px; top: 119.935px"></div>
            <div class="line" style="left: 9.38042px; top: 92.2127px"></div>
            <div class="line" style="left: 4.52176px; top: 37.1491px"></div>
            <div class="line" style="left: 46.752px; top: 1.48086px"></div>
            <div class="line" style="left: 100.227px; top: 15.4826px"></div>
            <div class="line" style="left: 119.558px; top: 67.2698px"></div>
            <div class="line" style="left: 88.3374px; top: 112.887px"></div>
            <div class="line" style="left: 33.0646px; top: 113.614px"></div>
            <div class="line" style="left: 0.654066px; top: 68.8352px"></div>
            <div class="line" style="left: 18.6152px; top: 16.557px"></div>
            <div class="line" style="left: 71.7029px; top: 1.15239px"></div>
            <div class="line" style="left: 114.857px; top: 35.6965px"></div>
            <div class="line" style="left: 111.45px; top: 90.869px"></div>
            <div class="line" style="left: 64.3728px; top: 119.84px"></div>
            <div class="line" style="left: 13.584px; top: 98.0205px"></div>
            <div class="line" style="left: 2.19222px; top: 43.9295px"></div>
            <div class="line" style="left: 39.8665px; top: 3.47882px"></div>
            <div class="line" style="left: 94.6297px; top: 11.0022px"></div>
            <div class="line" style="left: 120px; top: 60.114px"></div>
            <div class="line" style="left: 94.4433px; top: 109.129px"></div>
            <div class="line" style="left: 39.6519px; top: 116.444px"></div>
            <div class="line" style="left: 2.13158px; top: 75.8507px"></div>
            <div class="line" style="left: 13.7288px; top: 21.8034px"></div>
            <div class="line" style="left: 64.6002px; top: 0.176607px"></div>
            <div class="line" style="left: 111.567px; top: 29.3268px"></div>
            <div class="line" style="left: 114.765px; top: 84.5118px"></div>
            <div class="line" style="left: 71.4792px; top: 118.892px"></div>
            <div class="line" style="left: 18.4504px; top: 103.285px"></div>
            <div class="line" style="left: 0.688067px; top: 50.9394px"></div>
            <div class="line" style="left: 33.2686px; top: 6.2838px"></div>
            <div class="line" style="left: 88.5382px; top: 7.22148px"></div>
            <div class="line" style="left: 119.585px; top: 52.9565px"></div>
            <div class="line" style="left: 100.057px; top: 104.67px"></div>
            <div class="line" style="left: 46.5297px; top: 118.468px"></div>
            <div class="line" style="left: 4.43533px; top: 82.64px"></div>
            <div class="line" style="left: 9.50319px; top: 27.5952px"></div>
            <div class="line" style="left: 57.4318px; top: 0.0549907px"></div>
            <div class="line" style="left: 107.54px; top: 23.395px"></div>
            <div class="line" style="left: 117.297px; top: 77.8046px"></div>
            <div class="line" style="left: 78.4217px; top: 117.102px"></div>
            <div class="line" style="left: 23.91px; top: 107.932px"></div>
            <div class="line" style="left: 0.0307711px; top: 58.0786px"></div>
            <div class="line" style="left: 27.0523px; top: 9.85574px"></div>
            <div class="line" style="left: 82.0392px; top: 4.19431px"></div>
            <div class="line" style="left: 118.32px; top: 45.8997px"></div>
            <div class="line" style="left: 105.1px; top: 99.5731px"></div>
            <div class="line" style="left: 53.5998px; top: 119.658px"></div>
            <div class="line" style="left: 7.53245px; top: 89.1059px"></div>
            <div class="line" style="left: 5.99852px; top: 33.8497px"></div>
            <div class="line" style="left: 50.3px; top: 0.789273px"></div>
            <div class="line" style="left: 102.835px; top: 17.9858px"></div>
            <div class="line" style="left: 119.012px; top: 70.8432px"></div>
            <div class="line" style="left: 85.1012px; top: 114.497px"></div>
            <div class="line" style="left: 29.8849px; top: 111.895px"></div>
            <div class="line" style="left: 0.22972px; top: 65.2453px"></div>
            <div class="line" style="left: 21.3064px; top: 14.1436px"></div>
            <div class="line" style="left: 75.2255px; top: 1.96393px"></div>
            <div class="line" style="left: 116.221px; top: 39.0441px"></div>
            <div class="line" style="left: 109.498px; top: 93.9112px"></div>
            <div class="line" style="left: 60.7613px; top: 119.995px"></div>
            <div class="line" style="left: 11.3787px; top: 95.1564px"></div>
            <div class="line" style="left: 3.2649px; top: 40.4775px"></div>
            <div class="line" style="left: 43.3068px; top: 2.36897px"></div>
            <div class="line" style="left: 97.5175px; top: 13.1765px"></div>
            <div class="line" style="left: 119.884px; top: 63.727px"></div>
            <div class="line" style="left: 91.4223px; top: 111.114px"></div>
            <div class="line" style="left: 36.2898px; top: 115.116px"></div>
            <div class="line" style="left: 1.28207px; top: 72.3371px"></div>
            <div class="line" style="left: 16.113px; top: 19.0863px"></div>
            <div class="line" style="left: 68.1944px; top: 0.562199px"></div>
            <div class="line" style="left: 113.321px; top: 32.4878px"></div>
            <div class="line" style="left: 113.189px; top: 87.7652px"></div>
            <div class="line" style="left: 67.912px; top: 119.476px"></div>
            <div class="line" style="left: 15.9192px; top: 100.705px"></div>
            <div class="line" style="left: 1.34134px; top: 47.3841px"></div>
            <div class="line" style="left: 36.5518px; top: 4.77153px"></div>
            <div class="line" style="left: 91.6647px; top: 9.03582px"></div>
            <div class="line" style="left: 119.901px; top: 56.5575px"></div>
            <div class="line" style="left: 97.2947px; top: 107.001px"></div>
            <div class="line" style="left: 43.0332px; top: 117.551px"></div>
            <div class="line" style="left: 3.17281px; top: 79.2528px"></div>
            <div class="line" style="left: 11.5462px; top: 24.6131px"></div>
            <div class="line" style="left: 61.0463px; top: 0.00912329px"></div>
            <div class="line" style="left: 109.658px; top: 26.3242px"></div>
            <div class="line" style="left: 116.121px; top: 81.2227px"></div>
            <div class="line" style="left: 74.9496px; top: 118.108px"></div>
            <div class="line" style="left: 21.089px; top: 105.672px"></div>
            <div class="line" style="left: 0.255309px; top: 54.4708px"></div>
            <div class="line" style="left: 30.1317px; top: 7.96264px"></div>
            <div class="line" style="left: 85.3598px; top: 5.62278px"></div>
            <div class="line" style="left: 119.063px; top: 49.4372px"></div>
            <div class="line" style="left: 102.635px; top: 102.217px"></div>
            <div class="line" style="left: 50.0189px; top: 119.164px"></div>
            <div class="line" style="left: 5.87492px; top: 85.8935px"></div>
            <div class="line" style="left: 7.67129px; top: 30.6452px"></div>
            <div class="line" style="left: 53.8833px; top: 0.312602px"></div>
            <div class="line" style="left: 105.287px; top: 20.6415px"></div>
            <div class="line" style="left: 118.252px; top: 74.3772px"></div>
            <div class="line" style="left: 81.7738px; top: 115.91px"></div>
            <div class="line" style="left: 26.8145px; top: 109.987px"></div>
            <div class="line" style="left: 0.0223214px; top: 61.6365px"></div>
            <div class="line" style="left: 24.1381px; top: 11.8968px"></div>
            <div class="line" style="left: 78.6927px; top: 2.98613px"></div>
            <div class="line" style="left: 117.381px; top: 42.4678px"></div>
            <div class="line" style="left: 107.366px; top: 96.8304px"></div>
            <div class="line" style="left: 57.1471px; top: 119.932px"></div>
            <div class="line" style="left: 9.34984px; top: 92.1646px"></div>
            <div class="line" style="left: 4.5435px; top: 37.0964px"></div>
            <div class="line" style="left: 46.8076px; top: 1.4683px"></div>
            <div class="line" style="left: 100.269px; top: 15.5208px"></div>
            <div class="line" style="left: 119.551px; top: 67.3264px"></div>
            <div class="line" style="left: 88.2872px; top: 112.913px"></div>
            <div class="line" style="left: 33.0137px; top: 113.589px"></div>
            <div class="line" style="left: 0.6457px; top: 68.7788px"></div>
            <div class="line" style="left: 18.6565px; top: 16.5177px"></div>
            <div class="line" style="left: 71.7588px; top: 1.16353px"></div>
            <div class="line" style="left: 114.881px; top: 35.7486px"></div>
            <div class="line" style="left: 111.421px; top: 90.9178px"></div>
            <div class="line" style="left: 64.316px; top: 119.845px"></div>
            <div class="line" style="left: 13.5479px; top: 97.9764px"></div>
            <div class="line" style="left: 2.20752px; top: 43.8746px"></div>
            <div class="line" style="left: 39.9202px; top: 3.45972px"></div>
            <div class="line" style="left: 94.6763px; top: 11.0352px"></div>
            <div class="line" style="left: 120px; top: 60.171px"></div>
            <div class="line" style="left: 94.3966px; top: 109.162px"></div>
            <div class="line" style="left: 39.5983px; top: 116.425px"></div>
            <div class="line" style="left: 2.11654px; top: 75.7957px"></div>
            <div class="line" style="left: 13.7652px; top: 21.7595px"></div>
            <div class="line" style="left: 64.657px; top: 0.181004px"></div>
            <div class="line" style="left: 111.596px; top: 29.3758px"></div>
            <div class="line" style="left: 114.741px; top: 84.5638px"></div>
            <div class="line" style="left: 71.4233px; top: 118.903px"></div>
            <div class="line" style="left: 18.4093px; top: 103.246px"></div>
            <div class="line" style="left: 0.696702px; top: 50.883px"></div>
            <div class="line" style="left: 33.3196px; top: 6.25843px"></div>
            <div class="line" style="left: 88.5883px; top: 7.24862px"></div>
            <div class="line" style="left: 119.592px; top: 53.0132px"></div>
            <div class="line" style="left: 100.015px; top: 104.708px"></div>
            <div class="line" style="left: 46.4742px; top: 118.456px"></div>
            <div class="line" style="left: 4.41385px; top: 82.5872px"></div>
            <div class="line" style="left: 9.53399px; top: 27.5472px"></div>
            <div class="line" style="left: 57.4887px; top: 0.052578px"></div>
            <div class="line" style="left: 107.575px; top: 23.4401px"></div>
            <div class="line" style="left: 117.281px; top: 77.859px"></div>
            <div class="line" style="left: 78.3675px; top: 117.119px"></div>
            <div class="line" style="left: 23.8645px; top: 107.898px"></div>
            <div class="line" style="left: 0.0326234px; top: 58.0217px"></div>
            <div class="line" style="left: 27.0999px; top: 9.82446px"></div>
            <div class="line" style="left: 82.0922px; top: 4.21527px"></div>
            <div class="line" style="left: 118.333px; top: 45.9551px"></div>
            <div class="line" style="left: 105.062px; top: 99.6159px"></div>
            <div class="line" style="left: 53.5431px; top: 119.652px"></div>
            <div class="line" style="left: 7.50482px; top: 89.0561px"></div>
            <div class="line" style="left: 6.02339px; top: 33.7984px"></div>
            <div class="line" style="left: 50.3563px; top: 0.780085px"></div>
            <div class="line" style="left: 102.875px; top: 18.0265px"></div>
            <div class="line" style="left: 119.002px; top: 70.8992px"></div>
            <div class="line" style="left: 85.0494px; top: 114.521px"></div>
            <div class="line" style="left: 29.8356px; top: 111.866px"></div>
            <div class="line" style="left: 0.224764px; top: 65.1886px"></div>
            <div class="line" style="left: 21.35px; top: 14.1069px"></div>
            <div class="line" style="left: 75.2806px; top: 1.97842px"></div>
            <div class="line" style="left: 116.241px; top: 39.0975px"></div>
            <div class="line" style="left: 109.466px; top: 93.9583px"></div>
            <div class="line" style="left: 60.7043px; top: 119.996px"></div>
            <div class="line" style="left: 11.3453px; top: 95.1101px"></div>
            <div class="line" style="left: 3.28347px; top: 40.4236px"></div>
            <div class="line" style="left: 43.3615px; top: 2.35314px"></div>
            <div class="line" style="left: 97.562px; top: 13.2122px"></div>
            <div class="line" style="left: 119.881px; top: 63.7838px"></div>
            <div class="line" style="left: 91.3737px; top: 111.144px"></div>
            <div class="line" style="left: 36.2374px; top: 115.094px"></div>
            <div class="line" style="left: 1.27038px; top: 72.2814px"></div>
            <div class="line" style="left: 16.1519px; top: 19.0446px"></div>
            <div class="line" style="left: 68.2508px; top: 0.57001px"></div>
            <div class="line" style="left: 113.347px; top: 32.5384px"></div>
            <div class="line" style="left: 113.163px; top: 87.8157px"></div>
            <div class="line" style="left: 67.8555px; top: 119.484px"></div>
            <div class="line" style="left: 15.8805px; top: 100.663px"></div>
            <div class="line" style="left: 1.35335px; top: 47.3284px"></div>
            <div class="line" style="left: 36.6043px; top: 4.74928px"></div>
            <div class="line" style="left: 91.7131px; top: 9.06593px"></div>
            <div class="line" style="left: 119.904px; top: 56.6144px"></div>
            <div class="line" style="left: 97.25px; top: 107.037px"></div>
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
      type: 1,
      animate: true,
    };
  },
  mounted() {
    window.requestAnimFrame = (function (callback) {
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
          window.setTimeout(callback, 1000 / 60);
        }
      );
    })();
    this.setCanvas();
    this.setWave();
  },
  methods: {
    mouseOver() {
      this.animate = false;
    },
    mouseLeave() {
      this.animate = true;
    },
    toPath(path) {
      window.location.href =
        "https://sanmen-zz.zhijiasoft.com/front/PC/index.html#/real-time-analysis/analysis-law-enforcement-subject-department-detail?name=" +
        path;
    },
    setCanvas() {
      var canvas = document.getElementById("canvasqiu");
      var ctx = canvas.getContext("2d");
      var cw = (canvas.width = 500),
        cx = cw / 2;
      var ch = (canvas.height = 500),
        cy = ch / 2;
      var m = { x: 0, y: 0 };
      var target = { x: 0, y: 0 };
      var speed = 0.0005;
      var easing = 0.9;

      var frames = 0;

      var balls = [];
      var vp = { x: cx, y: cy }; //vanishing point
      var fl = 250; // focal length

      function Ball(R) {
        this.r = 3;
        this.R = R;

        // 3D position
        this.pos = spherePointPicking(this.R);

        // 2D position
        this.x = this.pos.x + cx;
        this.y = this.pos.y + cy;
        this.a = { x: 0, y: 0 };
        this.scale = { x: 1, y: 1 };

        this.rotateX = function (angle) {
          var cos = Math.cos(angle);
          var sin = Math.sin(angle);
          var y1 = this.pos.y * cos - this.pos.z * sin;
          var z1 = this.pos.z * cos + this.pos.y * sin;

          this.pos.y = y1;
          this.pos.z = z1;
        };

        this.rotateY = function (angle) {
          var cos = Math.cos(angle);
          var sin = Math.sin(angle);
          var x1 = this.pos.x * cos - this.pos.z * sin;
          var z1 = this.pos.z * cos + this.pos.x * sin;

          this.pos.x = x1;
          this.pos.z = z1;
        };

        this.draw3D = function () {
          if (this.pos.z > -fl) {
            var scale = fl / (fl - this.pos.z);
            this.scale = { x: scale, y: scale };
            this.x = vp.x + this.pos.x * scale;
            this.y = vp.y + this.pos.y * scale;
            this.visible = true;
          } else {
            this.visible = false;
          }
        };

        this.draw2D = function () {
          ctx.save();
          ctx.translate(this.x, this.y);
          ctx.scale(this.scale.x, this.scale.y);
          ctx.beginPath();
          ctx.arc(0, 0, this.r, 0, 2 * Math.PI);
          ctx.fillStyle = oGrd(this.r, 210);
          ctx.fill();
          ctx.restore();
        };
      }

      for (var i = 0; i < 1000; i++) {
        balls.push(new Ball(150));
        // balls.push(new Ball(75));
      }

      function Draw() {
        let requestId = window.requestAnimationFrame(Draw);
        ctx.clearRect(0, 0, cw, ch);

        frames += 0.1;
        let t = new Date().getTime() / 127;
        m.x = cx + Math.cos(t / 43 + Math.cos(t / 47 + frames)) * 50;
        m.y = cy + Math.sin(t / 31 + Math.cos(t / 37 + frames)) * 50;

        target.x = (m.y - vp.y) * speed;
        target.y = (m.x - vp.x) * speed;

        balls.map(function (b) {
          b.draw3D();
        });
        balls.sort(function (a, b) {
          return a.pos.z - b.pos.z;
        });

        target.x *= easing;
        target.y *= easing;

        balls.map(function (b) {
          b.rotateX(target.x);
          b.rotateY(target.y);
          if (b.visible) {
            b.draw2D();
          }
        });
      }
      Draw();

      function oGrd(r, h) {
        let grd = ctx.createRadialGradient(0, 0, 0, 0, 0, r);
        grd.addColorStop(0, "hsla(" + h + ",95%,95%, 1)");
        grd.addColorStop(0.4, "hsla(" + h + ",95%,45%,.5)");
        grd.addColorStop(1, "hsla(" + h + ", 95%, 45%, 0)");
        return grd;
      }

      function spherePointPicking(R) {
        //How to generate random points on a sphere:
        //https://math.stackexchange.com/questions/1585975/how-to-generate-random-points-on-a-sphere#1586185
        var u1 = Math.random();
        var u2 = Math.random();
        var s = Math.acos(2 * u1 - 1) - Math.PI / 2;
        var t = 2 * Math.PI * u2;

        return {
          x: R * Math.cos(s) * Math.cos(t),
          y: R * Math.cos(s) * Math.sin(t),
          z: R * Math.sin(s),
        };
      }
    },
    setWave() {
      // /canvas
      var ć;

      //context
      var $;

      //distance of hillset - how far out it runs
      var Ð = 460;

      //max x,y positions (width and height of canvas)
      var ღ_ҳ = 500;
      var ღ_y = 500;

      //view point (higher looks like your watching from above.)
      var ಠ_ಠ = 110;

      //half width
      var Φ = ღ_ҳ / 2;

      //half height
      var Θ = ღ_y / 2;

      //screen margin left
      var ŠĻ = 0;

      //screen margin top
      var Šτ = -15.0;

      //screen margin bottom
      var Šɓ = 0;

      //color update
      var ŭ = 0;

      function draw() {
        ć = document.getElementById("waves");
        $ = ć.getContext("2d");
        //make valleys, speed
        setInterval(Ѫ, 200);
      }
      //2d to 3d conversion  (x3d, y3d, z3d)
      function Ҫ(ҳщ, үщ, ȥщ) {
        //scale = dist / dist + z3d
        var Ϛ = Ð / (Ð + ȥщ);

        //x2d to x3d - half w * scale + half w
        var ҳЦ = (ҳщ - Φ) * Ϛ + Φ;

        //y2d to y3d - half w * scale + half w *.01
        var yЦ = (үщ - Θ) * Ϛ + Θ - ȥщ * 0.01;

        //return x2d, y2d vals
        return [ҳЦ, yЦ];
      }

      //noise function א
      function א(ҳ, y) {
        //control height and length of peaks here by changing any of the values, but specifically, the 2.55 val
        return (Math.sin(y * 0.172) + Math.sin((ҳ + y * 0.347) * 0.2)) * 2.55;
      }

      // make hills && valleys
      function Ѫ() {
        //the opacity of the canvas background color gives kind of a blending / shaded effect of the lines so they don't appear so sharp - more mystic-like - purely a matter of taste. looks fine with opacity of 1.
        $.fillStyle = "#000921";
        $.fillRect(0, 0, ღ_ҳ, ღ_y);

        //increase bottom margin
        Šɓ += 1;

        //increase top margin
        ŠĻ += 1;

        //increment color val
        ŭ -= 0.5;

        //line width: anything higher than 1 slows animation and looks pretty horrible!
        //I think the highest it should go is .8
        $.lineWidth = 0.22;

        //valley crevices counter
        //equals max x / view point
        var ႿҪ = ღ_ҳ / ಠ_ಠ;

        //shift left = margin left mod 1 * viewpoint
        var Լ = (ŠĻ % 1) * ಠ_ಠ;

        //shift bottom = margin bottom mod 1 * viewpoint
        var ɓ = (Šɓ % 1) * ಠ_ಠ;

        //2d starting points
        //point 2d array x,y
        var ҏЦ = [0, 0];

        //z axis crevice loop (the 3d effect)
        //for z crevices = 100; >=10; decrease them (forward movement effect)
        for (var Ⴟƶ = 100; Ⴟƶ >= 10; Ⴟƶ--) {
          $.beginPath();

          // Э = edge > remove / hide elements outside of this container.
          // eq. to z crevices * 1.25
          var Э = Ⴟƶ * 1;

          //z position = z crevices * viewpoint - bottom margin
          var ƶǷ = Ⴟƶ * ಠ_ಠ - ɓ;

          //crevice / line visibility set to false initially
          var Ɣ = false;

          //stroke > rotating hues
          $.strokeStyle = "#0aa1ed";//hsla(" + (ŭ % 360) + ",100%,50%,1)

          // moveTo the first point(ӻǷ).
          var ӻǷ = true;

          //Ⴟϫ = crevice x
          //for crevice x = edge; crevice x <= crevice counter + edge; increase crevice x
          for (var Ⴟϫ = -Э; Ⴟϫ <= ႿҪ + Э; Ⴟϫ++) {
            //ɦ = horizon > level and direction of noise
            //noise(א) is crevice x + margin left &&  margin bottom + crevice z.
            var ɦ = א(Ⴟϫ + ŠĻ, Šɓ + Ⴟƶ);

            //ϪǷ = x position; ɏǷ = y position
            //hiding and showing lines based on their x,y positions
            //x pos = crevice x * viewpoint - left shift
            var ϪǷ = Ⴟϫ * ಠ_ಠ - Լ;
            //y pos = horizon - margin top * viewpoint
            var ɏǷ = (ɦ - Šτ) * ಠ_ಠ;

            //point 2d = scale(xpos, ypos, zpos)
            ҏЦ = Ҫ(ϪǷ, ɏǷ, ƶǷ);

            //if point 2d[array pos 1] > max x
            if (ҏЦ[1] > ღ_ҳ) {
              //point 2d[array pos 1] = max y
              ҏЦ[1] = ღ_y;
            }
            //else if point 2d[array pos 1] < 0
            else if (ҏЦ[1] < 0) {
              //point 2d [array pos 1] = 0
              ҏЦ[1] = 0;
            } else {
              //else, crevice visibility is true (show more lines)
              Ɣ = true;
            }

            //if point location is at first position
            if (ӻǷ) {
              //shift array
              $.moveTo(ҏЦ[0], ҏЦ[1]);

              //first position is now false
              ӻǷ = false;
            } else {
              //else, create point 2d lines x=0, y=1
              $.lineTo(ҏЦ[0], ҏЦ[1]);
            }
          }
          //if line is within the visible (Ɣ) area, draw it.
          if (Ɣ) {
            $.stroke();
          }
        }
      }
      window.requestAnimFrame(draw);
    },
  },
};
</script>

<style lang="less" scoped>
.content {
  width: 100vw;
  height: 100vh;
  background: #000921;
  overflow: hidden;
}
.roundBoxs {
  position: relative;
  width: 500px;
  height: 500px;
  margin-left: 500px;
  margin-top: 200px;
}
.waves {
  width: 500px;
  height: 500px;
  position: absolute;
  bottom: -10px;
  left: 0;
  canvas {
    width: 100%;
    height: 100%;
  }
}
.canvass {
  width: 300px;
  height: 300px;
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  //   background: chocolate;
  canvas {
    width: 100%;
    height: 100%;
  }
  .nums {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    left: 0;
    top: 0;
    padding-bottom: 50px;
    p {
      color: #fff;
      font-size: 24px;
    }
  }
}
.round5 {
  height: 0;
  border-radius: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  width: 20%;
  padding-bottom: 20%;
  border: 0;
  box-shadow: none;
  background: #0c83d7;
  transform: translate(-50%, -50%) translateZ(30px);
  transform-style: preserve-3d;
  perspective: 50px;
  .line {
    height: 250px;
    transform-origin: 50% 0;
    transform: rotateX(90deg);
    width: 1px;
    position: absolute;
    left: 0;
    top: 0;
    background: linear-gradient(0deg, transparent 84%, rgba(12, 145, 203, 0.5));
  }
}
.round4 {
  height: 0;
  border-radius: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  background: linear-gradient(
    0deg,
    #094284,
    #0467b6,
    #3685c5,
    #0467b6,
    #094284
  );
  border: 1px solid #0989ef;
  box-shadow: 0 0 50px #000, inset 0 0 50px #094284;
  transform-style: preserve-3d;
  width: 40%;
  padding-bottom: 40%;
  transform: translate(-50%, -50%) translateZ(30px) rotate(135deg);
}
.round3 {
  height: 0;
  border-radius: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  background: linear-gradient(
    0deg,
    #094284,
    #0467b6,
    #3685c5,
    #0467b6,
    #094284
  );
  border: 1px solid #0989ef;
  box-shadow: 0 0 50px #000, inset 0 0 50px #094284;
  transform-style: preserve-3d;
  width: 40%;
  padding-bottom: 40%;
  transform: translate(-50%, -50%) translateZ(20px) rotate(90deg);
}
.round2 {
  transform-style: preserve-3d;
  width: 60%;
  padding-bottom: 60%;
  transform: translate(-50%, -50%) translateZ(10px) rotate(45deg);
  height: 0;
  border-radius: 100%;
  background-color: #3a85ff;
  position: absolute;
  left: 50%;
  top: 50%;
  background: linear-gradient(
    0deg,
    #094284,
    #0467b6,
    #3685c5,
    #0467b6,
    #094284
  );
  border: 1px solid #0989ef;
  box-shadow: 0 0 50px #000, inset 0 0 50px #094284;
}

.label::before {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -100px;
  transform: translateX(-50%);
  height: 100px;
  width: 2px;
  border-radius: 2px;
  background: linear-gradient(180deg, #27f0fb, transparent);
}
.label {
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  width: 100px;
  font-size: 16px;
  font-weight: 700;
  color: #27f3fc;
  line-height: 28px;
  font-size: 16px;
}
.iconText {
  position: relative;
  width: 100%;
  background-color: #67c23a;
  margin-top: 10px;
}
.icon {
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: 2px dashed #25e7f6;
  box-shadow: inset 0 0 25px #004d82;
}
.btnsBox {
  position: absolute;
  left: 0;
  top: 0;
  -webkit-transform: translate(-50%, -50%) rotateX(180deg);
  transform: translate(-50%, -30%) rotateX(180deg);
  text-align: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  cursor: pointer;
}
.btns {
  height: 250px;
  transform-origin: 50% 0;
  transform: rotateX(90deg);
  position: absolute;
  left: 0;
  top: 0;
  background: linear-gradient(0deg, transparent 84%, rgba(12, 145, 203, 0.5));
  transform: rotateX(90deg) translateY(70px) translateZ(-20px);
  width: 1px;
  animation: btnsRotate-data 20s linear infinite;
}

.btns:hover {
  .btnsBox {
    .icon {
      border: 2px dashed #ffdb33;
      -webkit-box-shadow: inset 0 0 25px #ffdb33;
      box-shadow: inset 0 0 25px #ffdb33;
    }
    .iconText {
      background: #ffdb33;
      .label {
        color: #ffdb33;
      }
      .label::before {
        background: linear-gradient(180deg, #ffdb33, transparent);
      }
    }
  }
}

@keyframes btnsRotate-data {
  0% {
    transform: rotateX(90deg) translateY(70px) rotateY(1turn) translateZ(-20px);
  }
  100% {
    transform: rotateX(90deg) translateY(70px) rotateY(0deg) translateZ(-20px);
  }
}
.round1 {
  transform-style: preserve-3d;
  height: 0;
  padding-bottom: 80%;
  border-radius: 100%;
  background-color: #3a85ff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) translateZ(0) rotate(0deg);
  background: linear-gradient(
    0deg,
    #094284,
    #0467b6,
    #3685c5,
    #0467b6,
    #094284
  );
  border: 1px solid #0989ef;
  box-shadow: 0 0 50px #000, inset 0 0 50px #094284;
  width: 80%;
}
.roundBoxContent {
  position: relative;
  width: 100%;
  height: 100%;
  transform: rotateX(75deg) translateY(70%);
  perspective: 10000px;
  transform-style: preserve-3d;
}
.roundBox {
  position: relative;
  left: 50%;
  top: 50%;
  width: 600px;
  height: 600px;
  transform-style: preserve-3d;
  transform: translate(-50%, -50%);
  transform-origin: 50% 50%;
  animation: rotate-data 20s linear infinite;
}
.activeAnimation {
  animation-play-state: running;
}
.stopAnimate {
  animation-play-state: paused;
}
@keyframes rotate-data {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(1turn);
  }
}
</style>