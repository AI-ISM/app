<template>
  <div>
    <nav class="navbar navbar-default navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#example-navbar-collapse">
            <span class="sr-only">切换导航</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">菜鸟教程</a>
        </div>
        <div class="collapse navbar-collapse" id="example-navbar-collapse">
          <ul class="nav navbar-nav">
            <!-- 使用router-link指向定义的path -->
            <li>
              <router-link :to="{ name: 'Home' }" tag="a" >
                <!--<div><img src="../assets/images/home.svg"></div>-->
                首页
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'Explorer' }" tag="a">
                <!--<div><img src="../assets/images/category.svg"></div>-->
                分类
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'Cart' }" tag="a">
                <!--<div><img src="../assets/images/cart.svg"></div>-->
                购物车
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'Profile' }" tag="a">
                <!--<div><img src="../assets/images/me.svg"></div>-->
                我
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <transition name="slide-fade">
      <!-- 用router-view渲染视图 -->
      <router-view/>
    </transition>
  </div>

</template>

<script>
export default {
  name: 'root'
}
</script>

<style scoped>
  .slide-fade-enter-active {
    transition: all .3s ease;
  }

  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-enter, .slide-fade-leave-active {
    transform: translateX(-430px);
    opacity: 0;
  }
  .navbar{
    border-radius: 0px;
  }
</style>
