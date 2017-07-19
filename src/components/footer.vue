<template>
  <footer class="footer">
    <span>&copy; Levy notepad</span>
  </footer>
</template>

<script>
  export default {
    name: 'footer'
  }
</script>

<style lang="scss" scoped>
  .footer {
    z-index: 99;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1.2rem;
    line-height: 1.2rem;
    color: #666;
    font-size: 14px;
    background: #f7f7f7;
    text-align: center;
  }
</style>