<template>
  <div class="add-event">
    <div class="group">
      <label for="">标题：</label>
      <input v-model.lazy="title">
    </div>
    <div class="group">
      <label for="">描述：</label>
      <textarea v-model.lazy="desc"></textarea>
    </div>
    <div class="group">
      <label for="">完成时长：</label>
      <input v-model.lazy.number="time" type="number">
    </div>
    <div class="group">
      <button class="event-btn" @click="add">提交</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AddEvent',
    props: ['store'],
    data () {
      return {
        title: '',
        desc: '',
        time: '',
        flag: 'padd'
      }
    },
    computed: {
      getStore () {
        return JSON.parse(this.store) || []
      }
    },
    methods: {
      add () {
        this.getStore.push({
          title: this.title,
          desc: this.desc,
          time: this.time,
          flag: this.flag,
          id: Date.parse(new Date())
        })
        this.$root.PropStore.$emit('store', JSON.stringify(this.getStore))
        location.href = '#/padd'
      }
    }
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
    text-indent: 0.3rem;
  }
  .group textarea {
    height: 3rem;
    padding: 0.3rem;
    text-indent: 0;
  }
  .group button {
    color: #fff;
    font-size: 16px;
    border: none;
    line-height: 1rem;
  }
</style>