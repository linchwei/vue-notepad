<template>
  <div id="app" :class="colorClass">
    <note-header @tools="changePages"></note-header>
    <note-main :store="store"></note-main>
    <note-footer></note-footer>
    <note-tool :is-show="tools" :store="store" @hideTool="hideTool"></note-tool> 
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
      },
      removeStore () {
        localStorage.removeItem('levyNotepad')
        this.store = null
        location.href = '#/'
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
        localStorage.setItem('levyNotepad', store)
      })
      this.$root.PropStore.$on('uploadStore', (store) => {
        let storeArr = JSON.parse(store)
        let storeAll = JSON.parse(this.store)
        if (Array.isArray(storeArr)) {
          storeAll.forEach(function (val) {
            let storeItem = val
            storeArr.forEach(function (value, key, arr) {
              if (storeItem.id === value.id) {
                arr.splice(arr[key], 1)
              }
            })
          })
          this.store = [...storeAll, ...storeArr]
          localStorage.setItem('levyNotepad', this.store)
        } else {
          alert('导入的数据格式不对!')
        }
      })
      this.$root.PropStore.$on('removeStore', () => {
        this.removeStore()
      })
    }
  }
</script>

<style lang="scss">
  @import "./commons/css/theme";
  
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
</style>
