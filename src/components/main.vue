<template>
  <div class="main">
    <nav class="nav">
      <router-link class="nav-btn bg-color" to="/">新增</router-link>
      <router-link class="nav-btn bg-color" to="/succ">已完成</router-link>
      <router-link class="nav-btn bg-color" to="/padd">未完成</router-link>
      <router-link class="nav-btn bg-color" to="/cann">已取消</router-link>
    </nav>
    <router-view :store="store"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'main',
    props: ['store']
  }
</script>

<style lang="scss" scoped>
  .main {
    padding: 1.8rem 0 1.2rem;
    max-height: 100%;
    overflow-y: auto;
    .nav {
      display: flex;
      justify-content: space-between;
      padding: 0.2rem 0;
      background: #f7f7f7;
      border-bottom: 1px solid #ddd;
      .nav-btn {
        text-decoration: none;
        padding: 0.2rem;
        margin: 0 0.2rem;
        flex: 1;
        font-size: 16px;
        text-align: center;
        color: #fff;
        border-radius: 0.1rem;
      }
      .nav-btn.router-link-exact-active {
        background: #007fff;
      }
    }
  }
</style>
