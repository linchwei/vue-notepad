<template>
  <div class="side-tools" :class="{'tools-show': show}" @click="hideTools">
    <tool-nav :is-nav="isNav" @opentheme="openTheme"></tool-nav> 
    <tool-theme :is-theme="isTheme" @hidetheme="hideTheme"></tool-theme> 
  </div>
</template>

<script>
  import toolNav from './tools/nav.vue'
  import toolTheme from './tools/theme.vue'

  export default {
    name: 'tool',
    props: ['isShow'],
    data () {
      return {
        isNav: true,
        isTheme: false
      }
    },
    computed: {
      show () {
        return this.isShow
      }
    },
    methods: {
      hideTools () {
        this.$emit('hideTool')
      },
      openTheme () {
        this.isTheme = true
        this.isNav = false
      },
      hideTheme () {
        this.isTheme = false
        this.isNav = true
      }
    },
    components: {
      toolNav,
      toolTheme
    }
  }
</script>

<style lang="scss" scoped>
  .side-tools {
    z-index: 999;
    position: absolute;
    top: 0;
    left: 50%;
    display: none;
    width: 10rem;
    height: 100%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, .5);
  }
  .tools-show {
    display: block;
  }
</style>