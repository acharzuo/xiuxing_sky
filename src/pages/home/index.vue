<template>
<div class="gridlist-container">
    <mu-appbar class='nav' title="Title">
      <mu-icon-button icon="menu" slot="left"/>
      <mu-flat-button label="expand_more" slot="right"/>
      <mu-icon-button icon="expand_more" slot="right"/>
    </mu-appbar>
    <div style="height:2px">   </div>
    <mu-grid-list class="gridlist" id="courseList">
    <mu-refresh-control :refreshing="refreshing" :trigger="scroller" @refresh="refresh"/>
      <mu-sub-header class="subTitle">功课列表</mu-sub-header>
      <template v-for="(tile,index) in list" v-bind="tile">
        <mu-grid-tile :key="tile.id">
          <img :src="tile.image" @click="toPlayer(tile.id)" />
          <span slot="title">{{tile.id}}/{{tile.title}}</span>
          <span slot="subTitle">by <b>{{tile.author.name}}</b></span>
          <mu-icon-button icon="star_border" slot="action"/>
        </mu-grid-tile>
      </template>

    <mu-infinite-scroll :scroller="scroller" :loading="moreLoading" @load="loadMore" />
    </mu-grid-list>

    <mu-bottom-nav class="bottomNav" :value="bottomNav" shift @change="handleChange">
      <mu-bottom-nav-item value="movies" title="首页" to="/home" icon="ondemand_video"/>
      <mu-bottom-nav-item value="music" title="发现" to="/coding" icon="music_note"/>
      <mu-bottom-nav-item value="music" title="播放"to="/music" icon="music_note"/>
      <mu-bottom-nav-item value="attention" title="关注" to="/coding" icon="music_note"/>
      <mu-bottom-nav-item value="mine" title="我的" to="/coding" icon="music_note"/>
    </mu-bottom-nav>
</div>
</template>

<script>
// @flow
import {mapState, mapGetters} from "vuex"
import musicApi from "@/api/music"
import { LOADING } from "@/store/mutation_type"

export default {
  data () {
    return {
      list: [], // 列表数据
      page: {}, // 分页数据
      scroller: null, // 滚动区域
      refreshing: false,  // 下拉刷新
      moreLoading: false, // 加载更多
      bottomNav: "movies"
    }
  },
  computed:{
    ...mapGetters([

    ]),
    ...mapState({
      loading: state => state.loading
    }),
    ...mapState([

  ])
  },
  created(){
    this.pageLoad();
  },
  mounted(){
      this.scroller = document.getElementById("courseList")
      // document.getElementById("courseList").style.height= (window.screen.height - 120) + "px"
      // document.getElementById("courseList").style.width= window.screen.width + "px"
  },
  methods: {

    pageLoad() {
      this.$store.commit(LOADING, true);
      this.fetchData()
    },
    /**
     * 默认的页面初始化数据查询
     */
    fetchData(){
      musicApi.getList().then(response => {
        console.log("getList", response)
        if(this.refreshing) {
          this.list = []; // 刷新数据时清空原有数据
        }
        this.list.splice( this.list.length, 0, ...response.data.data);
        this.page = response.page;
        this.$store.commit(LOADING, false);
        this.refreshing = false;
        this.moreLoading = false;
      }).catch(error=>{
        this.$store.commit(LOADING, false);
        this.refreshing = false;
        this.moreLoading = false;
      })
    },

    /**
     * 刷新页面时间
     */
    refresh () {
      this.refreshing = true;
      this.fetchData();
    },


    handleChange (val) {
      this.bottomNav = val
    },

    toPlayer(id){
      this.$router.push({
        name : "player",
        params: {
          id
        }
      } )
    },
    action(e){
      console.log("action",e)
    },

    loadMore () {
      this.moreLoading = true;
      this.fetchData()
        }
  }
}
</script>

<style lang="less" scope>
@import '../../assets/style/mixin';

.nav {
  z-index: 100;
}

.subTitle {
  border-left: 5px solid red;
    margin: 10px 0 10px 10px;
}

.bottomNav {
  height: @bottomNavHeight;
}
.gridlist-container{
  position: absolute;
  transition:all 1s;
  width: 100%;
  height: 100%;
}

.gridlist{
  height: calc(~ '@{height} - @{bottomNavHeight} - @{navHeight}');
  overflow-y: auto;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}

</style>
