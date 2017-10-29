<template>
  <div id="music">
    <audio id="musicPlayer"
    :src="musicUrl"
    @onplay="onplay"
    @durationchange="setDuration"
    @timeupdate = "updateCurrentTime"
    ref="player"></audio>
        <!-- @timeupdate='setCurrentTime'
    :duration = "duration"
    @ended="initMusicStatus"
    @canplay="play" -->
  </div>
</template>
<<script>
import { mapState} from 'vuex'
import {SET_MUSIC_DURATION,SET_MUSIC_CURRENT_TIME} from "@/store/modules/music/mutation_type"

export default {
  name: 'music',
  data() {
      return {
      }
  },
  computed:{
      ...mapState({
          musicUrl : state => state.music.musicUrl,
          musicPlayerState : state =>  state.music.musicPlayerState,
          musicCurrentTime: state => state.music.musicCurrentTime, // 音乐时长(秒)
      })
  },
  methods: {
      onplay(){
        console.log("music is play");
      },
      // 播放音乐
      play(){
          console.log("播放器播放音乐 play")
          this.$store.commit("updateMusicPlayerState",true);
      },
      // 暂停
      pause(){
          console.log("pause")
           this.$refs.player.pause();
      },
    // 设置歌曲当天播放时间
      setCurrentTime(currentTime){
         this.$refs.player.currentTime = currentTime
      },
      // 播放完成后的动作
      playEndAction(){

      },
      // 播放时长改变
      setDuration(){
          console.log("当前时间:" , this.$refs.player.duration);
          this.$store.commit(SET_MUSIC_DURATION, this.$refs.player.duration)
      },

      initMusicStatus(){

      },

      // 更新播放时间
      updateCurrentTime(){
        // playing time is change TIME
         this.$store.commit(SET_MUSIC_CURRENT_TIME, this.$refs.player.currentTime)

      }



  },
  watch:{
    musicUrl(newUrl, oldUrl){
      console.log(oldUrl + " => " + newUrl)
      this.$refs.player.load();
      console.log("当前音乐时长", this.$refs.player.duration)
    },
    musicCurrentTime(newVal, oldVal) {
      this.setCurrentTime(newVal);
    },
      musicPlayerState(state){
          if(state){
              this.$refs.player.play();
          } else {
              this.$refs.player.pause();
          }
      }
  }

}
</script>
