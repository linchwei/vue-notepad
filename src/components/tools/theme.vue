<template>
  <div class="theme" :class="{'show-theme': showTheme}" @click.stop.prevent="hideTheme">
    <h3 class="theme-title">可用主题色</h3>
    <div class="theme-list">
      <a class="theme-btn" @click.stop.prevent="switchTheme('blue')">
        <span></span>
        <span>#00b0f0</span>
      </a>
      <a class="theme-btn" @click.stop.prevent="switchTheme('green')">
        <span></span>
        <span>#00d1b2</span>
      </a>
      <a class="theme-btn" @click.stop.prevent="switchTheme('orange')">
        <span></span>
        <span>#f4b976</span>
      </a>
      <a class="theme-btn" @click.stop.prevent="switchTheme('pink')">
        <span></span>
        <span>#f39894</span>
      </a>
      <a class="theme-btn" @click.stop.prevent="switchTheme('cyan')">
        <span></span>
        <span>#26b6be</span>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'theme',
    props: ['isTheme'],
    computed: {
      showTheme () {
        return this.isTheme
      }
    },
    methods: {
      hideTheme () {
        this.$emit('hidetheme')
      },
      switchTheme (type) {
        this.$emit('hidetheme')
        this.$root.PropTheme.$emit('changetheme', type)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .theme {
    z-index: 9999;
    position: absolute;
    top: 0;
    left: 0;
    display: none;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .5);
    .theme-title {
      padding: 0.6rem;
      color: #fff;
      text-align: center;
      font-size: 18px;
    }
    .theme-list {
      .theme-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 3.6rem;
        font-size: 16px;
        color: #333;
        background: #fff;
        padding: 0.2rem 0.3rem;
        border: 1px solid #bbb;
        border-radius: 0.1rem;
        margin: 0 auto 0.6rem;
        text-decoration: none;
        span {
          &:first-child {
            width: 0.6rem;
            height: 0.6rem;
            margin-right: 0.1rem;
          }
        }
        &:nth-child(1) {
          span:first-child {
            background: #00b0f0;
          }
        }
        &:nth-child(2) {
          span:first-child {
            background: #00d1b2;
          }
        }
        &:nth-child(3) {
          span:first-child {
            background: #f4b976;
          }
        }
        &:nth-child(4) {
          span:first-child {
            background: #f39894;
          }
        }
        &:nth-child(5) {
          span:first-child {
            background: #26b6be;
          }
        }
      }
    }
  }
  .show-theme {
    display: block;
  }
</style>