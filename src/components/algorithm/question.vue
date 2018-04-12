<template>
<div class="col-md-offset-2 col-md-8 col-sm-offset-1 col-sm-10">
  <div class="panel panel-default">
    <div class="panel-heading">
      <div class="panel-title">
        <h3>{{questionItem['translatedTitle']}}</h3>
        <h4>{{questionItem['questionTitle']}}</h4>
      </div>
    </div>
    <ol class="breadcrumb">
      <li>ID: {{questionItem['questionId']}}</li>
      <li>questionTitleSlug: {{questionItem['questionTitleSlug']}}</li>
      <li>Welcome</li>
    </ol>
    <!--包含有 translatedContent 才会有ul-->
    <ul id="myTab" class="nav nav-tabs"  v-if="questionItem['translatedContent']">
      <li class="active"><a href="#chinese" data-toggle="tab">中文</a></li>
      <li><a href="#english" data-toggle="tab">English</a></li>
    </ul>
    <div id="myTabContent" class="tab-content">
      <div class="tab-pane fade in active" id="chinese" v-if="questionItem['translatedContent']">
        <div class="panel-body" v-html="questionItem['translatedContent']"></div>
      </div>
      <div class="tab-pane fade" id="english">
        <div class="panel-body" v-html="questionItem['content']"></div>
      </div>
    </div>
  </div>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne"> 最佳答案 </a>
      </h4>
    </div>
    <div id="collapseOne" class="panel-collapse collapse in">
      <div class="panel-body" v-html="questionItem['solution']">

      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "question",
  data () {
    return {
      title_slug: null,
      questionItem: null
    }
  },
  created () {
    this.title_slug = this.$route.params.title_slug
    var url = '/api/leetcode/question/' + this.title_slug
    this.$http.get(url).then((res) => {
      this.questionItem = res.data

    },(error)=> {
      console.log(`获取数据失败：${error}`)
    })
  }
}
</script>

<style scoped>

</style>
