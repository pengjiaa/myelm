<template>
  <div class="foot_bottom">
      <div class="foot_item">
          <div>
              <span class="icon iconfont icon-waimai-"></span>
          </div>
          <p>外卖</p>
      </div>
      <div class="foot_item">
          <div>
              <span class="icon iconfont icon-search1"></span>
          </div>
          <p>外卖</p>
      </div>
      <div class="foot_item">
          <div>
              <span class="icon iconfont icon-waimaidingdan0101"></span>
          </div>
          <p>外卖</p>
      </div>
      <div class="foot_item">
          <div>
              <span class="icon iconfont icon-wode"></span>
          </div>
          <p>外卖</p>
      </div>
  </div>
</template>

<script>
export default {
  name:'foot_bottom'
}
</script>

<style scoped>
    .foot_bottom {
        width: 100%;
        height: 4.6rem;
        border-top: .1rem solid #f1f1f1;
        position: fixed;
        bottom: 0;
        left: 0;
        background: #fff;
        display: flex;
    }
    .foot_item {
        flex:1;
        text-align: center;
        padding-top: .6rem;
    }
    .foot_item span {
        font-size: 2.2rem;
    }
</style>
