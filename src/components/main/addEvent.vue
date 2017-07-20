<template>
  <div class="add-event">
    <div class="group">
      <label for="">标题：</label>
      <input type="text">
    </div>
    <div class="group">
      <label for="">描述：</label>
      <textarea></textarea>
    </div>
    <div class="group">
      <label for="">完成时长：</label>
      <input type="text">
    </div>
    <div class="group">
      <button class="event-btn">提交</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'addEvent'
  }
</script>

<style lang="scss" scoped>
  .add-event {
    padding-top: 0.4rem;
  }
  .group {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0 0.4rem 0.4rem 0.4rem; 
  }
  .group label {
    width: 90%;
    margin-bottom: 0.1rem;
    font-size: 16px;
    color: #666;
  }
  .group input,
  .group textarea,
  .group button {
    width: 90%;
    height: 1rem;
    border: 1px solid #ddd;
    border-radius: 0.1rem;
  }
  .group textarea {
    height: 3rem;
  }
  .group button {
    color: #fff;
    font-size: 16px;
    border: none;
    line-height: 1rem;
  }
</style>