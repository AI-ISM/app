<template>
  <div col-md-offset-1 col-md-10>
    <!-- 轮播 -->
    <div class="section">
      <slider :slides="slides"></slider>
    </div>
    <!-- LeetCode -->
    <div class="section">
      <label>快讯</label>
      <question_item v-for="(question, index) in question_all" :key="question.id" v-if="index<10" :question = "question" :index="index"></question_item>
    </div>
    <modal-dialog ref="dialog"  @dialogClose="selected=undefined">
      <div slot="header">
        <div class="dismiss" @click.prevent="$refs.dialog.close()"></div>
      </div>
      <div>
        <!--<img :src="selected.img_url">-->
      </div>
      <div>
        <!--{{ selected.title }}-->
        ...
      </div>
    </modal-dialog>
  </div>
</template>

<script>
import slider from "./home/Slider"
import question_item from "./home/questionItem"
import ModalDialog from './home/Dialog'

export default {
  name: 'home',
  components: {slider, ModalDialog, question_item},
  data () {
    return {
      slides:[
        { id:1, img_url: require('../assets/img/1.jpg')},
        { id:2, img_url: require('../assets/img/2.jpg')},
      ],
      question_all: null
    }
  },
  created () {
    // HTTP GET /api/home
    this.$http.get('/api/leetcode/question_all').then((res) => {
        this.question_all = res.body
      },(error)=> {
        console.log(`获取数据失败：${error}`)
      })
  },
  methods: {
  },
}
</script>

<style scoped>

</style>
