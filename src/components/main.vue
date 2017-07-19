<template>
  <div class="main">
    <div class="search-group">
      <input placeholder="待办事项">
      <a class="btn event-btn">提交</a>
    </div>
    <div class="info">
      <div class="group">
        <a class="close group-btn" href="">未完成</a>
      </div>
      <div class="group">
        <a class="close group-btn" href="">已完成</a>
      </div>
      <div class="group">
        <a class="close group-btn" href="">已取消</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'main'
  }
</script>

<style lang="scss" scoped>
  .main {
    padding: 1.8rem 0 1.2rem;
  }
  .main .search-group {
    display: flex;
    align-items: center;
    padding: 0 0.2rem;
    margin-top: 0.6rem;
  }
  .main .search-group input {
    flex: 1;
    height: 1rem;
    border: 1px solid #ddd;
    border-radius: 0.1rem;
    text-indent: 0.3rem;
    margin-right: 0.2rem;
  }
  .main .search-group .btn {
    padding: 0 0.6rem;
    height: 1rem;
    line-height: 1rem;
    font-size: 16px;
    color: #fff;
    border-radius: 0.1rem;
    cursor: pointer;
  }
  .main .info {
    padding: 0 0.2rem;
    margin-top: 0.6rem;
  }
  .main .info .group {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #fff;
  }
  .main .group a {
    position: relative;
    flex: 1;
    font-size: 16px;
    color: #fff;
    padding: 0.3rem 0.4rem;
    text-decoration: none;
  }
  .main .group a:before {
    position: absolute;
    right: 0.3rem;
    top: 50%;
    width: 0.3rem;
    height: 0.3rem;
    border-top: 2px solid #fff;
    border-right: 2px solid #fff;
    transform: translateY(-50%) rotate(135deg);
    transition: transform .3s;   
    content: '';
   }
  .main .group a.close:before {
    transform: translateY(-50%) rotate(45deg);
  }
</style>
