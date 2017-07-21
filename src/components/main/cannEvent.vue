<template>
  <div class="cann-event">
    <div class="cann-list" v-for="item in eventCann">
      <h3 class="title"> {{ item.title }} </h3>
      <p class="desc"> {{ item.desc }} </p>
      <a class="btn" @click="renew(item.id)">恢复</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CannEvent',
    data () {
      return {
        store: null
      }
    },
    computed: {
      eventCann: {
        get () {
          let eventArr = this.store || JSON.parse(localStorage.getItem('levyNotepad')) || []
          let paddArr = []

          if (eventArr.length > 0) {
            eventArr.forEach(function (val, index) {
              if (val.flag === 'cann') paddArr.push(val)
            })

            return paddArr
          }
        },
        set (val) {
          this.store = val
        }
      }
    },
    methods: {
      renew (id) {
        let eventArr = JSON.parse(localStorage.getItem('levyNotepad')) || []
        eventArr.forEach(function (val) {
          if (val.id === id) val.flag = 'padd'
        })
        this.eventCann = eventArr
        localStorage.setItem('levyNotepad', JSON.stringify(eventArr))
      }
    }
  }
</script>

<style lang="scss" scoped>
  .cann-event { 
    margin: 0.4rem;
  }
  .cann-list {
    position: relative;
    background: #f7f7f7;
    border-radius: 0.2rem;
    padding: 0.4rem;
    margin-bottom: 0.4rem;
  }
  .cann-event .title {
    text-decoration: line-through;
    font-size: 18px;
    font-weight: normal;
    color: #000;
    margin-bottom: 0.4rem;
  }
  .cann-event .desc {
    text-decoration: line-through;
    line-height: 1.6;
    margin-bottom: 0.4rem;
  }
  .cann-event .btn {
    position: absolute;
    right: 0.4rem;
    bottom: 0.4rem;
    color: #007fff;
    font-size: 16px;
  }
</style>