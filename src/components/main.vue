<template>
  <div class="main">
    <nav class="nav">
      <a class="nav-btn" :class="{ active: nav.add }" @click="changePage('add')">新增</a>
      <a class="nav-btn" :class="{ active: nav.succ }" @click="changePage('succ')">已完成</a>
      <a class="nav-btn" :class="{ active: nav.padd }" @click="changePage('padd')">未完成</a>
      <a class="nav-btn" :class="{ active: nav.cann }"@click="changePage('cann')">已取消</a>
    </nav>
    <add-event v-if="nav.add === true"></add-event>
    <succ-event v-if="nav.succ === true"></succ-event>
    <padd-event v-if="nav.padd === true"></padd-event>
    <cann-event v-if="nav.cann === true"></cann-event>
  </div>
</template>

<script>
  import addEvent from './main/addEvent.vue'
  import succEvent from './main/succEvent.vue'
  import paddEvent from './main/paddEvent.vue'
  import cannEvent from './main/cannEvent.vue'

  export default {
    name: 'main',
    data () {
      return {
        nav: {
          add: true,
          succ: false,
          padd: false,
          cann: false
        }
      }
    },
    methods: {
      changePage (type) {
        switch (type) {
          case 'add':
            this.nav.add = true
            this.nav.succ = false
            this.nav.padd = false
            this.nav.cann = false
            break
          case 'succ':
            this.nav.add = false
            this.nav.succ = true
            this.nav.padd = false
            this.nav.cann = false
            break
          case 'padd':
            this.nav.add = false
            this.nav.succ = false
            this.nav.padd = true
            this.nav.cann = false
            break
          case 'cann':
            this.nav.add = false
            this.nav.succ = false
            this.nav.padd = false
            this.nav.cann = true
            break
        }
      }
    },
    components: {
      addEvent,
      succEvent,
      paddEvent,
      cannEvent
    }
  }
</script>

<style lang="scss" scoped>
  .main {
    padding: 1.8rem 0 1.2rem;
    max-height: 100%;
    overflow-y: auto;
  }
  .nav {
    display: flex;
    justify-content: space-between;
    padding: 0.2rem 0;
    background: #f7f7f7;
    border-bottom: 1px solid #ddd;
  }
  .nav-btn {
    padding: 0.2rem;
    margin: 0 0.2rem;
    flex: 1;
    font-size: 16px;
    text-align: center;
    color: #fff;
    border-radius: 0.1rem;
  }
  .nav-btn.active {
    background: #007fff;
  }
</style>
