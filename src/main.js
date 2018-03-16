// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 把VueVideoPlayer导入并挂在到vue上 edit by zwbai-20180316
import VideoPlayer from 'vue-video-player'
Vue.use(VideoPlayer);
// 第一个是videoJs的样式，后一个是vue-video-player的样式，因为考虑到我其他业务组件可能也会用到视频播放，所以就放在了main.js内
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
//增加hls支持
require('videojs-contrib-hls/dist/videojs-contrib-hls');
// font awesome 5 configeration start edit by zwbai-20180310
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
import regular from '@fortawesome/fontawesome-free-regular'
import brands from '@fortawesome/fontawesome-free-brands'
fontawesome.library.add(solid)
fontawesome.library.add(regular)
fontawesome.library.add(brands)
Vue.component('font-awesome-icon', FontAwesomeIcon)
// font awesome 5 configeration end edit by zwbai-20180310
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
