<template>
  <div class="swiper-container" ref="slider">
    <div class="swiper-wrapper panel panel-panel" v-for="slide in slides" >
      <router-link class="swiper-slide panel-body" tag="div"  :to="{name: 'question', params: { title_slug: 'two-sum' }}">
        <img :src="slide.img_url"/>
      </router-link>
    </div>
    <div class="swiper-pagination" ref="pagination">
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

export default {
  name: "Slider",
  props: {
    slides: {
      type: Array,
      required: true
    }
  },
  // 不要选用created钩子而应该采用mounted
  // 否则Swiper不能生效，因为created调用时元素还没挂载到DOM上
  mounted () {
    new Swiper(this.$refs.slider, {
      pagination: this.$refs.pagination,
      paginationClickable: true,
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: 2500,
      autoplayDisableOnInteraction: false
    })
  },
}
</script>

<style scoped>
</style>
