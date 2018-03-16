<template>
  <div class="food">
      <headTop>
          <div slot='back' class="back">
                <span class="icon iconfont icon-fanhui"></span>
                <p>美食</p>
          </div>
      </headTop>
      <div class="sort_container">
          <div class="sort_item">
              <div>美食</div>
              <section class="choose_type">
                  <section class="choose_type_L">
                      <ul>
                          <li>小吃夜宵<span class="choose_type_count">123</span><span class="icon iconfont icon-unie61f"></span></li>
                          <li class="active">小吃夜宵<span class="choose_type_count">123</span><span class="icon iconfont icon-unie61f"></span></li>
                          <li>小吃夜宵<span class="choose_type_count">123</span><span class="icon iconfont icon-unie61f"></span></li>
                          <li>小吃夜宵<span class="choose_type_count">123</span><span class="icon iconfont icon-unie61f"></span></li>
                      </ul>
                  </section>
                  <section class="choose_type_R">
                      <ul>
                          <li><span>小龙虾</span><span>4</span></li>
                          <li><span>小龙虾</span><span>4</span></li>
                          <li><span>小龙虾</span><span>4</span></li>
                          <li><span>小龙虾</span><span>4</span></li>
                      </ul>
                  </section>
              </section>
          </div>
          <div class="sort_item">
              <div>排序</div>
              <section class="sort_type">
                  <ul>
                      <li>智能排序</li>
                      <li>评价排序</li>
                      <li>智能排序</li>
                  </ul>
              </section>
          </div>
          <div class="sort_item">
              <div>筛选</div>
              <section class="sort_type2">
                  <p>配送方式</p>
                  <div class="fengniao">蜂鸟专送</div>
                  <p>商家属性（可以多选）</p>
                  <ul>
                      <li>品牌商家</li>
                      <li>品牌商家</li>
                      <li>品牌商家</li>
                      <li>品牌商家</li>
                      <li>品牌商家</li>
                      <li>品牌商家</li>
                  </ul>
                  <div class="but_wrap">
                      <button>清空</button>
                      <button>确定</button>
                  </div>
              </section>
          </div>
      </div>
          <div class="mark"></div>
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
.sort_container {
    display: flex;
    height: 3.2rem;
    position: fixed;
    width: 100%;
    top: 4.6rem;
    background: #FFF;
    border-bottom: .1rem solid #f1f1f1;
    z-index: 11;
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
.choose_type {
    width: 269%;
    margin-top: 1rem;
    display: flex;
    display: none;
}
.choose_type_L {
    flex: 1;
}
.choose_type_L li{
    height: 3.6rem;
    line-height: 3.6rem;
    background: #e4e4e4;
}
.choose_type_L .active {
    background: #fff;
}
.choose_type_R {
    background: #fff;
    flex:1;
    padding-left: .8rem;
}
.choose_type_R li{
    height: 3.5rem;
    line-height: 3.5rem;
    background: #FFF;
    border-bottom: .1rem solid #e4e4e4;
    display: flex;
    justify-content: space-between;
    color: #666;
    padding-right: 1rem;
}
.choose_type_count {
    width: 1.8rem;
    height: 1.1rem;
    background: #ccc;
    border-radius: 30%;
    margin: 0 .4rem 0 3rem;
    color: #fff;
}
.mark {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background: rgba(0,0,0,0.3);
    z-index: 10;
    display: none;
}

.sort_type {
    position: absolute;
    left: 0;
    top: 3.3rem;
    width: 100%;
    display: none;
}
.sort_type li {
    width: 100%;
    height: 5rem;
    line-height: 5rem;
    border-bottom: .1rem solid #e4e4e4;
    background: #fff;
    text-align: left;
    padding-left: 2rem;
}

.sort_type2 {
    width: 100%;
    position: absolute;
    left: 0;
    top: 3.3rem;
    background: #fff;
}
.sort_type2 p {
    height: 3rem;
    line-height: 3rem;
    text-align: left;
    padding-left: 2rem;
}
.sort_type2 ul {
    width: 100%;
    padding: 2rem;
    display: flex;
    flex-wrap: wrap;
}
.sort_type2 ul li {
    width: 28%;
    float: left;
    height: 3rem;
    line-height: 3rem;
    border: .1rem solid #e4e4e4;
    border-radius: .3rem;
    list-style: none;
    margin-right: .4rem;
    margin-bottom: .4rem;
}
.fengniao{
    width: 33.3%;
    height: 3rem;
    line-height: 3rem;
    border: .1rem solid #e4e4e4;
    margin-left: 2rem;
    border-radius: .3rem;
}
.but_wrap {
    display: flex;
}
.but_wrap button {
    flex:1;
}
</style>
