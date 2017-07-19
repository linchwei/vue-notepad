<template>
  <div class="side-nav" :class="{'show-nav': showNav}">
    <ul class="tools-sidebar">
      <li>
        <button class="tools-btn" @click.stop.prevent="openTheme">切换主题</button>
      </li>
      <li>
        <button class="tools-btn">下载数据</button>
      </li>
      <li>
        <button class="tools-btn">导入数据</button>
      </li>
      <li>
        <button class="tools-btn">编辑数据</button>
      </li>
      <li>
        <button class="tools-btn">清空数据</button>
      </li>
    </ul>
  </div> 
</template>

<script>
  export default {
    name: 'nav',
    props: ['isNav'],
    computed: {
      showNav () {
        return this.isNav
      }
    },
    methods: {
      openTheme () {
        this.$emit('opentheme')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .side-nav {
    display: none;
  }
  .side-nav ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 3rem;
  }
  .side-nav li {
    width: 100%;
    padding: 0.4rem;
    text-align: center;
  }
  .side-nav .tools-btn {
    font-size: 16px;
    padding: 0.3rem 0.6rem;
    color: #fff;
    border: none;
    border-radius: 0.2rem;
  }
  .show-nav {
    display: block;
  }
</style>