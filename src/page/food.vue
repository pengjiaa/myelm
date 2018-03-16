<template>
  <div class="food">
      <headTop>
          <div slot='back' class="back">
                <span class="icon iconfont icon-fanhui"></span>
                <p>美食</p>
          </div>
      </headTop>
      <div class="sort">
          <div class="sort_item">美食</div>
          <div class="sort_item">排序</div>
          <div class="sort_item">筛选</div>
      </div>
      <homeList></homeList>
  </div>
</template>

<script>
import headTop from '../components/header'
import homeList from '../components/homeList'
export default {
  components:{
      headTop,
      homeList
  }
}
</script>

<style scoped>
.food {
    padding-top: 7.8rem;
}
.sort {
    display: flex;
    height: 3.2rem;
    position: fixed;
    width: 100%;
    top: 4.6rem;
    background: #FFF;
    border-bottom: .1rem solid #f1f1f1;
}
.sort_item {
    padding-top: .7rem;
    flex:1;
    font-size: 1.4rem;
    text-align: center;
}
.back {
    padding-top: 3%;
    position: relative;
}
.back p {
    position: absolute;
    left: 50%;
    top: 68%;
    transform: translate(-50%,-50%);
    color: #FFF;
    font-size: 1.8rem;
    font-weight: bold;
}
.icon-fanhui {
    font-size: 2.6rem;
    color: #FFF;
    margin-left: .6rem;
}
</style>
