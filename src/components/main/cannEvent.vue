<template>
  <div class="cann-event">
    <div class="cann-list border-color" v-for="item in eventCann" :key="item.id">
      <h3 class="title"> {{ item.title }} </h3>
      <p class="time"> {{ item.time | formatTime(item.id) }} </p>
      <p class="desc"> {{ item.desc }} </p>
      <a class="btn" @click="renew(item.id)">恢复</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CannEvent',
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
      eventCann () {
        let cannArr = []
        this.getStore.forEach(function (val, index) {
          if (val.flag === 'cann') cannArr.push(val)
        })
        return cannArr
      }
    },
    methods: {
      renew (id) {
        this.getStore.forEach(function (val) {
          if (val.id === id) val.flag = 'padd'
        })
        this.$root.PropStore.$emit('store', JSON.stringify(this.getStore))
      }
    }
  }
</script>

<style lang="scss" scoped>
  .cann-event { 
    margin: 0.4rem;
    .cann-list {
      position: relative;
      background: #f7f7f7;
      border-radius: 0.2rem;
      padding: 0.4rem;
      margin-bottom: 0.4rem;
      .title {
        text-decoration: line-through;
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
        text-decoration: line-through;
        line-height: 1.6;
        margin-bottom: 0.4rem;
      }
      .btn {
        position: absolute;
        right: 0.4rem;
        bottom: 0.4rem;
        color: #007fff;
        font-size: 16px;
      }
    }
  }
</style>