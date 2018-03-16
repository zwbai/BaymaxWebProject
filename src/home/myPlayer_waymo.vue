<template>
<div class="video-container">
    <section class="hero is-info">
        <div class="hero-body">
            <div class="container">
            <h2 class="title">
                Google Waymo无人驾驶汽车
            </h2>
            <h2 class="subtitle">
                See more <a href="https://weibo.com/3899676694/profile?rightmod=1&wvr=6&mod=personinfo&is_all=1" 
                target="_blank">@Waymo</a> 
            </h2>
            </div>
        </div>
    </section>
    <div class="item">
    <div class="player">
        <video-player  class="video-player vjs-custom-skin"
                        ref="videoPlayer"
                        :options="playerOptions"
                        :playsinline="true"
                        @play="onPlayerPlay($event)"
                        @pause="onPlayerPause($event)"
                        @ended="onPlayerEnded($event)"
                        @loadeddata="onPlayerLoadeddata($event)"
                        @waiting="onPlayerWaiting($event)"
                        @playing="onPlayerPlaying($event)"
                        @timeupdate="onPlayerTimeupdate($event)"
                        @canplay="onPlayerCanplay($event)"
                        @canplaythrough="onPlayerCanplaythrough($event)"
                        @ready="playerReadied"
                        @statechanged="playerStateChanged($event)">
        </video-player>
    </div>
    </div>
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container">
        <h1 class="title">
            原理介绍
        </h1>
        <h2 class="subtitle">
            Neural Network
        </h2>
        </div>
      </div>
      </section>
      <!-- <hr/> -->
</div>
</template>

<script>
  // custom skin css
  // import videoPlayer from 'vue-video-player';
  // import 'vue-video-player/src/custom-theme.css'

  export default {
    data() {
      return {
        // videojs options
        playerOptions: {
          height: '480',
          autoplay: true,
          muted: true,
          language: 'en',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            // mp4
            // src: "http://vjs.zencdn.net/v/oceans.mp4",
            src: "http://www.baymaxbai.cn/media/videos/Waymo_selfdriving.mp4",
            // src: "../assets/videos/Deep_Learning_Cars.mp4",
            // webm
            // src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
          }],
          // poster: "https://surmon-china.github.io/vue-quill-editor/static/images/surmon-1.jpg",
        }
      }
    },
    mounted() {
      // console.log('this is current player instance object', this.player)
      setTimeout(() => {
        console.log('dynamic change options', this.player)
        // change src
        // this.playerOptions.sources[0].src = 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm';
        // change item
        // this.$set(this.playerOptions.sources, 0, {
        //   type: "video/mp4",
        //   src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm',
        // })
        // change array
        // this.playerOptions.sources = [{
        //   type: "video/mp4",
        //   src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm',
        // }]
        this.player.muted(false)
      }, 5000)
    },
    computed: {
      player() {
        return this.$refs.videoPlayer.player
      }
    },
    methods: {
      // listen event
      onPlayerPlay(player) {
        // console.log('player play!', player)
      },
      onPlayerPause(player) {
        // console.log('player pause!', player)
      },
      onPlayerEnded(player) {
        // console.log('player ended!', player)
      },
      onPlayerLoadeddata(player) {
        // console.log('player Loadeddata!', player)
      },
      onPlayerWaiting(player) {
        // console.log('player Waiting!', player)
      },
      onPlayerPlaying(player) {
        // console.log('player Playing!', player)
      },
      onPlayerTimeupdate(player) {
        // console.log('player Timeupdate!', player.currentTime())
      },
      onPlayerCanplay(player) {
        // console.log('player Canplay!', player)
      },
      onPlayerCanplaythrough(player) {
        // console.log('player Canplaythrough!', player)
      },
      // or listen state event
      playerStateChanged(playerCurrentState) {
        // console.log('player current update state', playerCurrentState)
      },
      // player is ready
      playerReadied(player) {
        // seek to 10s
        console.log('example player 1 readied', player)
        player.currentTime(10)
        // console.log('example 01: the player is readied', player)
      }
    }
  }
</script>
