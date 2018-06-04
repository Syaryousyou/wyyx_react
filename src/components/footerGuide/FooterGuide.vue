<template>
  <footer class="footer_guide">
    <a href="javascript:;" class="item" @click="goTo('/msite')">
      <i class="icon msite" :class="{active : $route.path === '/msite'}"></i>
      <span class="text" :class="{active : $route.path === '/msite'}">首页</span>
    </a>
    <a href="javascript:;" class="item" @click="goTo('/goods')">
      <i class="icon goods" :class="{active : $route.path === '/goods'}"></i>
      <span class="text" :class="{active : $route.path === '/goods'}">识物</span>
    </a>
    <a href="javascript:;" class="item" @click="goTo('/classify')">
      <i class="icon classify" :class="{active : $route.path === '/classify'}"></i>
      <span class="text" :class="{active : $route.path === '/classify'}">分类</span>
    </a>
    <a href="javascript:;" class="item" @click="goTo('/shopcart')">
      <i class="icon shopcart" :class="{active : $route.path === '/shopcart'}"></i>
      <span class="text" :class="{active : $route.path === '/shopcart'}">购物车</span>
    </a>
    <a href="javascript:;" class="item" @click="goTo('/profile')">
      <i class="icon profile" :class="{active : $route.path === '/profile'}"></i>
      <span class="text" :class="{active : $route.path === '/profile'}">个人</span>
    </a>
  </footer>
</template>
<script>
  export default {
    methods: {
      goTo (path) {
        this.$router.replace(path)
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  rem=750/10rem
  .footer_guide
    font-size 0
    width 100%
    height (98/rem)
    background #fafafa
    position fixed
    left 0
    bottom 0
    z-index: 5
    display flex
    flex-flow row nowrap
    align-items center
    justify-content space-around
    .item
      text-align center
      .icon
        display inline-block
        width (40/rem)
        height (40/rem)
        background-image url("./images/icon.png")
        background-repeat no-repeat
        background-size (40/rem 490/rem)
        &.msite
          background-position 0 (-250/rem)
          &.active
            background-position 0 (-200/rem)
        &.goods
          background-position 0 (-350/rem)
          &.active
            background-position 0 (-300/rem)
        &.classify
          background-position 0 (-150/rem)
          &.active
            background-position 0 (-100/rem)
        &.shopcart
          background-position 0 (-50/rem)
          &.active
            background-position 0 0
        &.profile
          background-position 0 (-450/rem)
          &.active
            background-position 0 (-400/rem)
      .text
        margin-top (7/rem)
        display block
        font-size (24/rem)
        &.active
          color #b4282d

</style>
