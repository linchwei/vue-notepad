<template>
  <div class="side-nav" :class="{'show-nav': showNav}">
    <ul class="tools-sidebar">
      <li>
        <button class="tools-btn" @click.stop.prevent="openTheme">切换主题</button>
      </li>
      <li>
        <button class="tools-btn" @click="downloadStore('notePad.json')">下载数据</button>
      </li>
      <li>
        <button class="tools-btn" @click.stop.prevent="exportStore">导入数据</button>
      </li>
      <li>
        <button class="tools-btn" @click="removeStore">清空数据</button>
      </li>
    </ul>
  </div> 
</template>

<script>
  export default {
    name: 'nav',
    props: ['isNav', 'store'],
    computed: {
      showNav () {
        return this.isNav
      },
      formatStore () {
        return JSON.stringify(JSON.parse(this.store), null, 2)
      }
    },
    methods: {
      openTheme () {
        this.$emit('opentheme')
      },
      removeStore () {
        alert('确定删除所有数据？')
        this.$root.PropStore.$emit('removeStore')
      },
      downloadStore (fileName) {
        let tag = document.createElement('a')
        let blob = new Blob([this.formatStore])
        tag.download = fileName
        tag.href = URL.createObjectURL(blob)
        tag.click()
        URL.revokeObjectURL(blob)
      },
      exportStore () {
        this.$emit('exportStore')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .side-nav {
    display: none;
    ul {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      margin-top: 3rem;
      li {
        width: 100%;
        padding: 0.4rem;
        text-align: center;
        .tools-btn {
          font-size: 16px;
          padding: 0.3rem 0.6rem;
          color: #fff;
          border: none;
          border-radius: 0.2rem;
        }
      }
    }
  }
  .show-nav {
    display: block;
  }
</style>