<template>
  <div class="dialog-wrapper"
       :class="{'open':is_open}">
    <div class="overlay" @click="close"></div>
    <div class="dialog">
      <div class="heading">
        <slot name="heading"></slot>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dialog",
  data () {
    return {
      is_open : false
    }
  },
  methods: {
    open() {
      if (!this.is_open) {
        // 触发模态窗口打开事件
        this.$emit('dialogOpen')
      }
      this.is_open = true
    },
    close() {
      if (this.is_open) {
        // 触发模态窗口关闭事件
        this.$emit('dialogClose')
      }
      this.is_open = false

    }
  }
}
</script>

<style scoped>
  .dialog {
    position: absolute;
    top: 24px;
    left: 24px;
    right: 24px;
    bottom: 24px;
    display: none;
    background: #fff;
    box-shadow: 0 0 10px rgba(0,0,0,.5);
    z-index: 500; /*放置于顶层*/
  }
  .dialog.open {
    display: block;
  }
</style>
