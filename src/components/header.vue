<template>
  <header id="head-top">
    <slot name='home'></slot>
    <slot name='back'></slot>
    <slot name='search'></slot>
    <slot name='city'></slot>
    <slot name='position'></slot>
    <slot name='login'></slot>
    <slot name='userHead'></slot>

    

  </header>
</template>

<script>
export default {
  name: 'headTop',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#head-top {
  width: 100%;
  height: 4.6rem;
  background: #3190e8;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
}
</style>
