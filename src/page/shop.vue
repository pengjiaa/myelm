<template>
  <div class="shop">
      <header>
          <div class="back"><span class="icon iconfont icon-fanhui"></span></div>
          <div class="content">
              <div class="con_l">
                  <img src="../../static/food.png" alt="">
              </div>
                <div class="con_r">
                    <h1>炸鸡店</h1>
                    <p>商家配送/分钟送达/配送费$5</p>
                    <p>公告：来看离开家离开家</p>
                </div>
          </div>
      </header>
      <main>
          <nav>
              <p>商品</p>
              <p>评价</p>
              <p>商家</p>
          </nav>
          <div class="goods">
              <div class="goods_left">
                  <ul>
                      <li>优惠</li>
                      <li>饮料</li>
                      <li>新品</li>
                      <li>蔬菜</li>
                  </ul>
              </div>
              <div class="good_right">
                <p class="tit">优惠</p>
                  <ul>
                      <li>
                            <div class='info_l'><img src="../../static/food.png" alt=""></div>                         
                            <div class="info_r">
                                <p class="p1">面包</p>
                                <p class="p2">商家配送/分钟送达/配送费$5</p>
                                <p class="p3">公告：来看离开家离开家</p>
                                <p class="p4">$20</p>
                            </div>
                      </li>
                  </ul>
              </div>
          </div>
          <div class="comment">
              <div class="comment1">
                  <div class="comment1_l">
                      <p class="lp1">4.7</p>
                      <p class="lp2">综合评价</p>
                      <p class="lp3">高于周边商家80%</p>
                  </div>
                  <div class="comment1_r">
                      <p class="rp1">服务态度： <span>4.7</span></p>
                      <p class="rp2">服务态度： <span>4.7</span></p>
                      <p class="rp3">送达时间8分钟</p>
                  </div>
              </div>
              <div class="comment2">
                  <div class="comment2_top">

                  </div>
                  <ul class="clear">
                      <li>全部</li>
                      <li>全部</li>
                      <li>全部全部</li>
                      <li>全部全部全部</li>
                      <li>全部</li>
                      <li>全部全部</li>
                      <li>全部全部全部</li>
                      <li>全部</li>
                      <li>全部全部</li>
                      <li>全部全部全部</li>
                  </ul>
              </div>
              <div class="comment3">
                  <ul>
                      <li>
                          <div class="comment3_l">
                              <img src="../../static/food.png" alt="">
                          </div>
                            <div class="comment3_r">
                                <p>123123123</p>
                            </div>
                      </li>
                  </ul>
              </div>
          </div>
          <div class="seller">
              <div class="huodong">
                  <p class="tit">
                      活动
                  </p>
                  <div>
                      <p>lkjdsflksjdf</p>
                      <p>lkjdsflksjdf</p>
                      <p>lkjdsflksjdf</p>
                  </div>
              </div>
              <div class="seller_info">
                  <div class="comment2_top">

                  </div>
                  <p class="tit">
                      商家信息
                  </p>
                  <div>
                    <p>炸鸡店</p>
                    <p>地址：螺丝扣搭街坊了涉及到法律实践地方</p>
                    <p>营业时间：</p>
                  </div>
              </div>
          </div>
      </main>
      <footer>

      </footer>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang='less' scoped>
    header {
        height: 6rem;
        position: relative;
        border-bottom: .1rem solid #ebebeb;
        padding-bottom: .8rem;
        .back {
            position: absolute;
            left: .4rem;
            top: .4rem;
            span {
                font-size: 3rem;
                color:#fff;
            }
        }
        .content {
            height: 5.4rem;
            display: flex;
            .con_l {
                flex:1;
                width: 20%;
                padding: .3rem;
                img {
                    width: 100%;
                }
            }
            .con_r {
                width: 80%;
                flex:4;
                padding: .4rem;
                p {
                    margin: .4rem;
                }
            }
        }
    }
    main {
        nav {
            display: flex;
            border-bottom: .1rem solid #ebebeb;
            p {
                flex:1;
                height: 4.4rem;
                line-height: 4.4rem;
                text-align: center;
                font-size: 1.6rem;
            };
        }
        .goods {
            display: flex;
            .goods_left {
                flex:1;
                li {
                    height: 5.2rem;
                    line-height: 5.2rem;
                    text-align: center;
                    font-size: 1.4rem;
                        border-bottom: .1rem solid #ebebeb;
                }
            }
            .good_right {
                flex:3;
                .tit {
                    background: #ebebeb;
                    height: 1.6rem;
                }
                li {
                    height: 11rem;
                    display: flex;
                        border-bottom: .1rem solid #ebebeb;
                    .info_l {
                        flex:1;
                        padding: .6rem;
                        img {
                            width: 100%;
                        }
                    }
                    .info_r {
                        flex:4;
                        .p1 {
                            height: 2.4rem;
                            line-height: 2.4rem;
                            font-size: 1.8rem;
                            font-weight: bold;
                            margin: .3rem;
                        }
                        .p2 {
                            height: 1.8rem;
                            line-height: 1.8rem;
                            color: #999;
                            margin: .5rem;
                        }
                        .p3 {
                            height: 1.8rem;
                            line-height: 1.8rem;
                            margin: .5rem;
                        }
                        .p4 {
                            color:#f60;
                            font-size: 1.7rem;
                            font-weight: bold;
                            margin: .5rem;
                        }
                    }
                }
            }
        }
        .comment {
            .comment1 {
                display: flex;
                padding: 1rem;
                .comment1_l {
                    flex: 1;
                    text-align: center;
                    .lp1 {
                        color: #f60;
                        font-size: 2.8rem;
                    }
                    .lp2 {
                        font-size: 1.6rem;
                    }
                    .lp3 {
                        font-size: 1.4rem;
                    }
                }
                .comment1_r {
                    flex:1;
                    font-size: 1.6rem;
                    p {
                        height: 2.2rem;
                        line-height: 2.2rem;
                    }
                }
            }
            .comment2 {

                .comment2_top {
                    height: .8rem;
                    width: 100%;
                    background: #f5f5f5;
                }
                ul {
                    padding: .8rem;
                    li {
                        height: 2.4rem;
                        line-height: 2.4rem;
                        list-style: none;
                        float: left;
                        padding: .6rem;
                        margin: .3rem;
                        background: #ebf5ff;
                        border-radius: .4rem;
                        text-align: center;
                        font-size: 1.4rem;
                    }
                }
            }
            .comment3 {
                padding: 1rem;
                li {
                    display: flex;
                    border-bottom: .1rem solid #ebebeb;
                    .comment3_l {
                        flex: 1;
                        padding: .4rem;
                        img {
                            width: 100%;
                        }
                    }
                    .comment3_r {
                        flex: 4;

                    }
                }
            }
        }
        .seller {
            padding: 1rem;
            .huodong {
                .tit {
                    height: 3rem;
                    line-height: 3rem;
                    font-size: 1.7rem;
                    border-bottom: .1rem solid #ebebeb;
                }
                div {
                    p {
                        color : #000;
                        height: 3rem;
                        line-height: 3rem;
                    }
                }
            }
            .seller_info {

                .comment2_top {
                    height: .8rem;
                    width: 120%;
                    margin-left: -10%;
                    background: #f5f5f5;
                }
                .tit {
                    height: 3rem;
                    line-height: 3rem;
                    font-size: 1.7rem;
                    border-bottom: .1rem solid #ebebeb;
                }
                div {
                    p {
                        color : #000;
                        height: 3rem;
                        line-height: 3rem;
                    }
                }
            }
        }
    }

</style>
