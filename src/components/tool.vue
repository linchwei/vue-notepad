<template>
  <div class="side-tools" :class="{'tools-show': show}" @click="hideTools">
    <tool-nav :is-nav="isNav" :store="store" @opentheme="openTheme" @exportStore="exportStore"></tool-nav> 
    <tool-theme :is-theme="isTheme" @hidetheme="hideTheme"></tool-theme> 
    <tool-layer :is-layer="isLayer" @hideLayer="hideLayer"></tool-layer>
  </div>
</template>

<script>
  import toolNav from './tools/nav.vue'
  import toolTheme from './tools/theme.vue'
  import toolLayer from './tools/layer.vue'

  export default {
    name: 'tool',
    props: ['isShow', 'store'],
    data () {
      return {
        isNav: true,
        isTheme: false,
        isLayer: false
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
      hideLayer () {
        this.isTheme = false
        this.isNav = true
        this.isLayer = false
      },
      openTheme () {
        this.isTheme = true
        this.isNav = false
        this.isLayer = false
      },
      hideTheme () {
        this.isTheme = false
        this.isNav = true
        this.isLayer = false
      },
      exportStore () {
        this.isTheme = false
        this.isNav = false
        this.isLayer = true
      }
    },
    components: {
      toolNav,
      toolTheme,
      toolLayer
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