<template>
  <header class="header bg-color">
    <h1>记事本</h1>
    <span class="tools-btn" @click="showTools"></span>
  </header>
</template>

<script>
  export default {
    name: 'header',
    methods: {
      showTools () {
        this.$emit('tools')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .header {
    z-index: 99;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 1.8rem;
    line-height: 1.8rem;
    color: #fff;
    text-align: center;
    h1 {
      font-weight: normal;
      font-size: 24px;
    }
    .tools-btn {
      position: absolute;
      right: 0.3rem;
      top: 50%;
      transform: translateY(-50%);
      border-top: 0.1rem solid #fff;
      border-bottom: 0.1rem solid #fff;
      width: 1rem;
      height: 0.6rem;
      &:before {
        position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 100%;
      height: 0.1rem;
      background: #fff;
      content: "";
      }
    }
  }
</style>