// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  data: {
    PropTheme: new Vue(),
    store: [
      {
        title: 'mock data 1',
        desc: 'mock data desc 1',
        time: '10',
        flag: 'succ',
        id: Date.parse(new Date()) - 100000000
      },
      {
        title: 'mock data 2',
        desc: 'mock data desc 2',
        time: '10',
        flag: 'cann',
        id: Date.parse(new Date()) - 200000000
      },
      'mock'
    ]
  },
  created () {
    this.addMock()
  },
  methods: {
    addMock () {
      let flag = false
      let eventArr = JSON.parse(localStorage.getItem('levyNotepad')) || []
      eventArr = Array.from(new Set(eventArr))
      eventArr.forEach(function (val, index) {
        if (val === 'mock') flag = true
      })
      if (flag === false) localStorage.setItem('levyNotepad', JSON.stringify([...eventArr, ...this.store]))
    }
  },
  template: '<App/>',
  components: { App }
}).$mount('#app')
