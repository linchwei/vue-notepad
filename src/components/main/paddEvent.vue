<template :store="store">
  <div class="padd-event">
    <div class="padd-list border-color" v-for="item in eventPadd" :key="item.id">
      <h3 class="title"> {{ item.title }} </h3>
      <p class="time"> {{ item.time | formatTime(item.id) }} </p>
      <p class="desc"> {{ item.desc }} </p>
      <p class="tips">需完成时长 {{ item.time }} 天（还剩 <span> {{ item.time | filterTime(item.id) }} </span> 天）</p>
       <a class="btn" @click="cannel(item.id)">取消</a> 
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PaddEvent',
    props: ['store'],
    computed: {
      getStore () {
        return JSON.parse(this.store) || []
      },
      eventPadd () {
        let paddArr = []
        this.getStore.forEach(function (val, index) {
          if (val.flag === 'padd') paddArr.push(val)
        })
        return paddArr
      }
    },
    filters: {
      filterTime (val, time) {
        let date = (Date.parse(new Date()) - time) / (24 * 60 * 60 * 1000)
        if (date > 1) return val - Math.floor(date)
        return val
      },
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
    methods: {
      cannel (id) {
        this.getStore.forEach(function (val) {
          if (val.id === id) val.flag = 'cann'
        })
        this.$root.PropStore.$emit('store', JSON.stringify(this.getStore))
      }
    }
  }
</script>

<style lang="scss" scoped>
  .padd-event {
    margin: 0.4rem;
    .padd-list {
      position: relative;
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
      }
      .tips span {
        color: red;
        margin-bottom: 0.4rem;
      }
      .btn {
        position: absolute;
        right: 0.4rem;
        bottom: 0.4rem;
        color: #f40;
        font-size: 16px;
      }
    }
  }
</style>