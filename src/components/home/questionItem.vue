<template>
  <router-link tag="div" class="panel panel-default"  :to="{ name: 'question', params: { title_slug: question['stat']['question__title_slug'] }}">
    <div class="panel-heading">
      <div class="panel-title">
        {{question['stat']['title_cn']}}<br/>{{question['stat']['question__title']}}
      </div>
    </div>
    <div class="panel-body">
      slug: {{question['stat']['question__title_slug']}}<br/>id: {{question['stat']['question_id']}}
    </div>
    <div class="panel-footer">
      index: {{index+1}}
    </div>
  </router-link>
</template>

<script>
export default {
  name: "questionItem",
  props: {
    question: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  data (){
    return {
    }
  }
}
</script>

<style scoped>

</style>
