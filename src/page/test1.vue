<template>
  <div>
      <div class="tit">
      </div>
      <div class="main">
        <h1>年终学习计划</h1>
        <div class="add">
            <h2>添加任务:</h2>
            <input type="text" placeholder="吃饭睡觉打豆豆"  v-model = 'aaa' @keyup.13='addTask'>
            
            <div class="state">
              
                <p>{{noSelect}}个任务未完成</p>
                <div class="stateBtn">
                    <button @click = 'addTask'>添加任务</button>
                    <button><a href="#test1/all">所有任务</a></button>
                    <button><a href="#test1/unfinish">未完成任务</a></button>
                    <button><a href="#finish">已经完成</a></button>
                </div>
            </div>
        </div>
        <div class="list">
            <h2>任务列表:</h2>
                <ul>
                    <li v-for = "(item,index) in list" :class = "{edit:item == editext}">
                        <strong @click = 'selecte(item)'><p v-if = 'item.selected'>√</p></strong>
                        <span @dblclick = 'editor(item)'>{{item.msg}}</span>
                        <i @click = 'del(item,index)'>x</i>
                        <input 
                         v-focus = 'item == editext' 
                         @blur = 'blur1' 
                         @keyup.13 = 'blur1'
                         @keyup.esc = 'cancleTodo(item)'
                         type="text" 
                         v-model = "item.msg">
                    </li>
                </ul>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          selected: false,
          msg: "我是第一个任务"
        }
      ],
      aaa: "",
      editext: "", //记录正在编辑的数据
      cancleText: "" //取消编辑时，记录之前的值
    };
  },
  updated: function() {},
  computed: {
    noSelect(){
      return this.list.filter(function(el){
                return !el.selected
              }).length
    }
  },
  methods: {
    addTask() {
      if (this.aaa) {
        this.list.unshift({
          selected: false,
          msg: this.aaa
        });
        this.aaa = "";
      }
    },
    selecte(item) {
      return (item.selected = !item.selected);
    },
    del(item, index) {
      if (item.selected) {
        this.list.splice(index, 1);
      }
    },
    yiwancheng() {
      for (var i = 0; i < this.list.length; i++) {
        if (this.list[i].selected) {
          this.list;
        }
      }
    },
    editor(todo) {
      this.cancleText = todo.msg;
      this.editext = todo;
    },
    blur1() {
      this.editext = "";
    },
    cancleTodo(todo) {
      todo.msg = this.cancleText;
      this.cancleText = "";
      this.editext = "";
    },
    setLocal(key,value){
      localStorage.setItem(key,JSON.stringify(value))
    },
    getLocal(key){
      return JSON.parse(localStorage.getItem(key)) || []
    }
  },
  watch:{
    // list:function(){                          //浅监控只能监控到第一层
    //   this.setLocal('miaowei',this.list)
    // }
    list:{
      handler:function(){
        this.setLocal('miaowei',this.list)
      },
      deep:true
    }
  },
  created(){
    this.list = this.getLocal('miaowei')
    window.location.hash
  },
  directives: {
    focus: {
      update(el, binding) {
        if (binding.value) {
          el.focus();
        }
        console.log(el);
        console.log(binding);
      }
    }
  }
};
</script>

<style scoped>
.tit {
  width: 100%;
  height: 60px;
  background: rgb(233, 97, 63);
}
h1 {
  height: 60px;
  line-height: 60px;
  font-size: 22px;
  color: #fff;
  font-weight: normal;
}
.main {
  width: 50%;
  margin: 0 auto;
  margin-top: -60px;
}
h2 {
  font-weight: normal;
  font-size: 20px;
  color: #000;
}
.add input {
  height: 30px;
  width: 100%;
  text-indent: 10px;
  font-size: 16px;
  margin: 10px 0;
}
.state {
  position: relative;
  height: 40px;
}
.state p {
  position: absolute;
  left: 0;
  line-height: 40px;
}
.stateBtn {
  position: absolute;
  right: 0;
  height: 40px;
  padding-top: 10px;
}
.list,
ul {
  margin: 10px 0;
}
li {
  list-style: none;
  width: 100%;
  height: 40px;
  line-height: 40px;
  color: #fff;
  position: relative;
}
li:nth-child(2n + 1) {
  background: rgb(165, 165, 165);
}
li:nth-child(2n) {
  background: rgb(107, 106, 106);
}
.list span,
.list input {
  position: absolute;
  left: 40px;
  top: 0;
  width: 80%;
}
.list input {
  display: none;
  height: 36px;
}
strong {
  position: absolute;
  left: 10px;
  top: 10px;
  width: 20px;
  height: 20px;
  content: "";
  border: 1px solid #000;
  border-radius: 100%;
  cursor: pointer;
}
strong p {
  margin-left: 4px;
  margin-top: -8px;
  color: aqua;
  cursor: pointer;
}
i {
  position: absolute;
  width: 40px;
  height: 40px;
  font-style: normal;
  font-size: 20px;
  right: 0;
  text-align: center;
}

.edit input {
  display: block;
}
.edit span {
  display: none;
}

a {
  text-decoration: none;
  color: #000;
}
</style>


