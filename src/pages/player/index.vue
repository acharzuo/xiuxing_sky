<<template>
 <div id="player">
   <div class="nav">
      <span class="btnwapper left">
       <mu-icon value="expand_more" class="btn" :size="40" />
        </span>
        <span class="btnwapper right">
           <mu-icon value="more_horiz" class="btn" :size="30" />
           </span>
           <span class="btnwapper right">
           <mu-icon value="open_in_new" class="btn" :size="30" />
           </span>

     </div>
   <div class="title">
      <div>
      <img class="image" :src="data.image">

      </div>
      <div class="slider-wapper">
      <mu-slider v-model="currentTime" @change="changeCurrentTime" :max="musicDuration" :step="step" class="slider-muisic"/>

      </div>
    </div>

   <div class="controller">
      <div class="timeShow">
        <span class="left">{{musicCurrentTime | formatTime }}</span>
        <span class="right">{{musicDuration | formatTime}}</span>
      </div>
      <div class="ctl_btns">
        <mu-icon value="playlist_play" class="btn" :size="32" />
        <mu-icon value="skip_previous" class="btn" :size="32" />
        <mu-icon value="play_circle_outline" class="btn" @click="play" v-if="!musicPlayerState" :size="48" />
        <mu-icon value="pause_circle_outline" class="btn" @click="play" v-else :size="48" />
        <mu-icon value="skip_next" class="btn" :size="32" />
        <mu-icon value="snooze" class="btn" :size="32" />
      </div>
   </div>
   <div class="info">
     <div class="booking">
       <span>
       <img class="image" src="/static/images/title.jpg">
       </span>
       <span>
            <div>
              郭总相生经典
       </div>
       <div>
         6333.人订阅
         </div>
       </span>
        <mu-raised-button class="demo-raised-button" label="文字在前面" labelPosition="before" icon="favorite_border" secondary/>
     </div>
   </div>
   <div>相关推荐</div>
   <div>主播</div>
   <div>评论</div>
   <div>广告</div>
   <div>回复评论</div><mu-sub-header>阳光</mu-sub-header>
       <mu-content-block>
    散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光，找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！
  </mu-content-block>
</div>
</div>
</template>
<<script>
import { mapState } from 'vuex'
import musicApi from '@/api/music'
import { SET_MUSIC_URL,UPDATE_MUSIC_PLAYER_STATE,SET_MUSIC_CURRENT_TIME } from "@/store/modules/music/mutation_type"

export default {
  data(){
    return {
      currentTime:0,
      step: 1,
      data:{}
    }
  },
  created(){
    this.fetchData();
  },
  computed:{
      ...mapState({
        musicPlayerState: state =>  state.music.musicPlayerState, // 播放状态
        musicDuration: state => state.music.musicDuration, // 音乐时长(秒)
        musicCurrentTime: state => state.music.musicCurrentTime, // 音乐时长(秒)
      }),
      id(){
        return this.$route.params.id;
      }
  },
  methods: {
    play(){
      this.$store.commit(SET_MUSIC_URL,this.data.url);
      setTimeout(() =>{
        this.$store.commit(UPDATE_MUSIC_PLAYER_STATE,!this.musicPlayerState);
      }, 1);
    },

    changeCurrentTime(value) {
        this.$store.commit(SET_MUSIC_CURRENT_TIME, value)
    },

    fetchData(){
      musicApi.get(this.id).then(response => {
        console.log(response)
         this.data = response.data.data;
      }).catch(error => {

      });
    }
  },
  watch: {
    musicCurrentTime(newVal, oldVal) {
      this.currentTime = newVal;
    }
  }
}
</script>

<<style lang="less">
 .nav {
   position: absolute;
   width:100%;
       padding: 20px 10px;

   }

.btnwapper {
   width: 40px;
   height: 40px;
   background-color: white;
    opacity: 0.7;
    border-radius: 50%;
        text-align: center;
     line-height: 40px;
    display: block;
    margin: 5px;
   .icon {
      font-size: 36px;
}
}
.right {
  float: right;
}
.left {
  float: left;
}

.slider-wapper {
      position: absolute;
    width: 100%;
}

.slider-muisic {
      z-index: 100;
    position: relative;
    top: -17px;
}

.timeShow {
    color: #cecece;
    margin: 0 10px;
    height: 20px;
}
.ctl_btns {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;

  .btn {
    margin: 0 5px
  }
}
.title {
   width: 100%;

   .image {
     width: 100%
   }
}
.booking{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  .image {
    width: 50px;
    height: 50px;
  }
}
.footbar{
  position: fixed;
    bottom: 0px;
    left: 0px;
    width: 100%;

}
</style>



