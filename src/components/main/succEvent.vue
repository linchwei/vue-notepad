<template>
  <div class="succ-event">
    <div class="succ-list" v-for="item in eventSucc" :key="item.id">
      <h3 class="title"> {{ item.title }} </h3>
      <p class="desc"> {{ item.desc }} </p>
      <p class="tips">完成了，奖励一下自己！</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SuccEvent',
    props: ['store'],
    computed: {
      getStore () {
        return JSON.parse(this.store) || []
      },
      eventSucc () {
        let succArr = []
        this.getStore.forEach(function (val, index) {
          if (val.flag === 'succ') succArr.push(val)
        })
        return succArr
      }
    }
  }
</script>

<style lang="scss" scoped>
  .succ-event {
    margin: 0.4rem;
  }
  .succ-list {
    background: #f7f7f7;
    border-radius: 0.2rem;
    padding: 0.4rem;
    margin-bottom: 0.4rem;
  }
  .succ-event .title {
    font-size: 18px;
    font-weight: normal;
    color: #000;
    margin-bottom: 0.4rem;
  }
  .succ-event .desc {
    line-height: 1.6;
    margin-bottom: 0.4rem;
  }
  .succ-event .tips {
    text-align: center;
    transform: rotate(-5deg)
  }
</style>