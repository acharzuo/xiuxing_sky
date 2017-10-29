<template>
    <div id="app" v-cloak>
      <music></music>
      <loading v-model="loading"></loading>
      <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import router from './router'
import music from '@/components/music'
import { Loading } from 'vux'



export default {
  name: 'app',
  components: {
    music,
    Loading
  },
  computed: {
    ...mapState({
      loading: state => state.loading
    }
    )
  },
  created:() => {
  },
  methods: {
    back: function () {
      router.back()
    }
  }
}
</script>

<style lang="less">
@import './assets/style/common';
[v-cloak]{
  display: none;
}
#app {
  flex: 1;
  font-size: .12rem;
}
</style>
