<template>
  <div class="succ-event">
    <div class="succ-list border-color" v-for="item in eventSucc" :key="item.id">
      <h3 class="title"> {{ item.title }} </h3>
      <p class="time"> {{ item.time | formatTime(item.id) }} </p>
      <p class="desc"> {{ item.desc }} </p>
      <p class="tips">完成了，奖励一下自己！</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SuccEvent',
    props: ['store'],
    filters: {
      formatTime (time, id) {
        let dateFormat = (val, format) => {
          let initDate = new Date(val)
          let date = {
            'M+': initDate.getMonth() + 1,
            'd+': initDate.getDate(),
            'h+': initDate.getHours(),
            'm+': initDate.getMinutes(),
            's+': initDate.getSeconds(),
            'q+': Math.floor((initDate.getMonth() + 3) / 3),
            'S+': initDate.getMilliseconds()
          }
          if (/(y+)/i.test(format)) {
            format = format.replace(RegExp.$1, (initDate.getFullYear() + '').substr(4 - RegExp.$1.length))
          }
          for (var k in date) {
            if (new RegExp('(' + k + ')').test(format)) {
              format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? date[k] : ('00' + date[k]).substr(('' + date[k]).length))
            }
          }
          return format
        }
        let succTime = id + time * 24 * 60 * 60 * 1000
        return `${dateFormat(id, 'yyyy-MM-dd')} 至 ${dateFormat(succTime, 'yyyy-MM-dd')}`
      }
    },
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
    .succ-list {
      background: #f7f7f7;
      border-radius: 0.2rem;
      padding: 0.4rem;
      margin-bottom: 0.4rem;
      font-size: 14px;
      .title {
        font-size: 18px;
        font-weight: normal;
        color: #000;
        margin-bottom: 0.2rem;
      }
      .time {
        line-height: 1.6;
        margin-bottom: 0.4rem;
        font-style: italic;
      }
      .desc {
        line-height: 1.6;
        margin-bottom: 0.4rem;
      }
      .tips {
        text-align: center;
        transform: rotate(-5deg)
      }
    }
  }
</style>