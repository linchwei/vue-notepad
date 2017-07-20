<template>
  <div id="app" :class="colorClass">
    <note-header @tools="changePages"></note-header>
    <note-main></note-main>
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
        tools: false
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
  .blue .group-btn {
    background: #00b0f0;
  }
  .blue .tools-btn {
    background: #00b0f0;
  }
  .green .header {
    background: #00d1b2;
  }
  .green .event-btn {
    background: #00d1b2;
  }
  .green .group-btn {
    background: #00d1b2;
  }
  .green .tools-btn {
    background: #00d1b2;
  }
  .orange .header {
    background: #f4b976;
  }
  .orange .event-btn {
    background: #f4b976;
  }
  .orange .group-btn {
    background: #f4b976;
  }
  .orange .tools-btn {
    background: #f4b976;
  }
  .pink .header {
    background: #f39894;
  }
  .pink .event-btn {
    background: #f39894;
  }
  .pink .group-btn {
    background: #f39894;
  }
  .pink .tools-btn {
    background: #f39894;
  }
  .cyan .header {
    background: #26b6be;
  }
  .cyan .event-btn {
    background: #26b6be;
  }
  .cyan .group-btn {
    background: #26b6be;
  }
  .cyan .tools-btn {
    background: #26b6be;
  }
</style>
