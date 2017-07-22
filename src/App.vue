<template>
  <div id="app" :class="colorClass">
    <note-header @tools="changePages"></note-header>
    <note-main :store="store"></note-main>
    <note-footer></note-footer>
    <note-tool :is-show="tools" @hideTool="hideTool"></note-tool> 
  </div>
</template>

<script>
  import noteHeader from './components/header.vue'
  import noteMain from './components/main.vue'
  import noteFooter from './components/footer.vue'
  import noteTool from './components/tool.vue'

  export default {
    name: 'app',
    data () {
      return {
        colorClass: 'blue',
        tools: false,
        storeData: null
      }
    },
    computed: {
      store: {
        get () {
          let storeArr = this.storeData || JSON.parse(localStorage.getItem('levyNotepad')) || []

          return JSON.stringify(storeArr)
        },
        set (val) {
          this.storeData = val
        }
      }
    },
    methods: {
      changePages () {
        this.tools = true
      },
      hideTool () {
        this.tools = false
      }
    },
    components: {
      noteHeader,
      noteMain,
      noteFooter,
      noteTool
    },
    created () {
      this.$root.PropTheme.$on('changetheme', (type) => {
        this.colorClass = type
      })
      this.$root.PropStore.$on('store', (store) => {
        this.store = JSON.parse(store)
        localStorage.removeItem('levyNotepad')
        localStorage.setItem('levyNotepad', JSON.stringify(store))
      })
    }
  }
</script>

<style lang="scss">
  /* $blue_color: #00b0f0; */
  *,
  *:before,
  *:after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html,
  body {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  #app {
    position: relative;
    width: 10rem;
    height: 100%;
    margin: 0 auto;
  }
  .blue .header {
    background: #00b0f0;
  }
  .blue .event-btn {
    background: #00b0f0;
  }
  .blue .nav-btn {
    background: #00b0f0;
  }
  .blue .tools-btn {
    background: #00b0f0;
  }
  .blue .succ-list,
  .blue .padd-list,
  .blue .cann-list {
    border: solid 1px #00b0f0;
  }
  .green .header {
    background: #00d1b2;
  }
  .green .event-btn {
    background: #00d1b2;
  }
  .green .nav-btn {
    background: #00d1b2;
  }
  .green .tools-btn {
    background: #00d1b2;
  }
  .green .succ-list,
  .green .padd-list,
  .green .cann-list {
    border: solid 1px #00d1b2;
  }
  .orange .header {
    background: #f4b976;
  }
  .orange .event-btn {
    background: #f4b976;
  }
  .orange .nav-btn {
    background: #f4b976;
  }
  .orange .tools-btn {
    background: #f4b976;
  }
  .orange .succ-list,
  .orange .padd-list,
  .orange .cann-list {
    border: solid 1px #f4b976;
  }
  .pink .header {
    background: #f39894;
  }
  .pink .event-btn {
    background: #f39894;
  }
  .pink .nav-btn {
    background: #f39894;
  }
  .pink .tools-btn {
    background: #f39894;
  }
  .pink .succ-list,
  .pink .padd-list,
  .pink .cann-list {
    border: solid 1px #f39894;
  }
  .cyan .header {
    background: #26b6be;
  }
  .cyan .event-btn {
    background: #26b6be;
  }
  .cyan .nav-btn {
    background: #26b6be;
  }
  .cyan .tools-btn {
    background: #26b6be;
  }
  .cyan .succ-list,
  .cyan .padd-list,
  .cyan .cann-list {
    border: solid 1px #26b6be;
  }
</style>
