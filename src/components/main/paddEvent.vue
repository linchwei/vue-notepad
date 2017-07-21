<template>
  <div class="padd-event">
    <div class="padd-list" v-for="item in eventPadd">
      <h3 class="title"> {{ item.title }} </h3>
      <p class="desc"> {{ item.desc }} </p>
      <p class="tips">需完成时长 {{ item.time }} 天（还剩 <span> {{ item.time | filterTime(item.id) }} </span> 天）</p>
       <a class="btn" @click="cannel(item.id)">取消</a> 
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PaddEvent',
    data () {
      return {
        store: null
      }
    },
    computed: {
      eventPadd: {
        get () {
          let eventArr = this.store || JSON.parse(localStorage.getItem('levyNotepad')) || []
          let paddArr = []

          if (eventArr.length > 0) {
            eventArr.forEach(function (val, index) {
              if (val.flag === 'padd') paddArr.push(val)
            })

            return paddArr
          }
        },
        set (val) {
          this.store = val
        }
      }
    },
    filters: {
      filterTime (val, time) {
        let date = (Date.parse(new Date()) - time) / (24 * 60 * 60 * 1000)
        console.log(Date.parse(new Date()))
        console.log(time)
        if (date > 1) return val - Math.floor(date)
        return val
      }
    },
    methods: {
      cannel (id) {
        let eventArr = JSON.parse(localStorage.getItem('levyNotepad')) || []
        eventArr.forEach(function (val) {
          if (val.id === id) val.flag = 'cann'
        })
        this.eventPadd = eventArr
        localStorage.setItem('levyNotepad', JSON.stringify(eventArr))
      }
    }
  }
</script>

<style lang="scss" scoped>
  .padd-event {
    margin: 0.4rem;
  }
  .padd-list {
    position: relative;
    background: #f7f7f7;
    border-radius: 0.2rem;
    padding: 0.4rem;
    margin-bottom: 0.4rem;
  }
  .padd-event .title {
    font-size: 18px;
    font-weight: normal;
    color: #000;
    margin-bottom: 0.4rem;
  }
  .padd-event .desc {
    line-height: 1.6;
    margin-bottom: 0.4rem;
  }
  .padd-event .tips {
    text-align: center;
  }
  .padd-event .tips span {
    color: red;
    margin-bottom: 0.4rem;
  }
  .padd-event .btn {
    position: absolute;
    right: 0.4rem;
    bottom: 0.4rem;
    color: #f40;
    font-size: 16px;
  }
</style>