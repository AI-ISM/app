<template>
<div>
  {{ title }}
  <ul>
    <li v-for="(todo,index) in todos"
        :id="index">
      <label>{{ index + 1 }}. {{ BookDetail.value }}</label>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: "BookDetail",
  data () {
    return {
      title: 'todos',
      todos: [
        { value: "阅读一本关于前端开发的书", done: false },
        { value: "补充范例代码", done: true },
        { value: "写心得", done: false }
      ]
    }
  }
}
</script>

<style scoped>

</style>
