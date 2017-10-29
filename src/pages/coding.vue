<<template>
  <div id="coding">
     <mu-raised-button label="返回" @click="back" class="btn" secondary/>
    <img class="center-image" src="/static/images/running.gif">
  </div>
</template>
<script>
import router from "@/router"
export default {
  methods:{
    back() {
      router.back();
    }
  }
}
</script>
<style>
.center-image{
  width: 100%
}
.btn {
  float: right;
  margin: 20px;
}
</style>


