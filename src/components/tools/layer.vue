<template>
  <div class="layer-pop" :class="{'show-layer': isLayer}">
    <div class="layer" @click.stop>
      <input type="file" accept="*.josn" @change.stop="exportStore">
      <p>只允许上传一定格式的json文件</p>
      <p>
        <pre>
          [
            {
              "title": "levy",
              "desc": "一定要好好努力努力",
              "time": 90,
              "flag": "padd",
              "id": 1500788353000
            }
          ]
        </pre>
      </p>
      <p v-if="exSucc">数据读取成功，是否确定导入？</p>
      <p v-if="exErr">上传失败，只允许notepad.json文件</p>
      <button class="layer-btn" @click="uploadStore">导入</button>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['isLayer'],
    data () {
      return {
        exSucc: false,
        exErr: false,
        store: ''
      }
    },
    methods: {
      exportStore (event) {
        let self = this
        let files = event.srcElement.files
        const reader = new FileReader()

        if (files[0] && files[0].name.indexOf('json') !== -1) {
          reader.onload = function (ev) {
            self.exErr = false
            self.exSucc = true
            self.store = ev.target.result
          }
          reader.readAsText(files[0])
        } else {
          self.exSucc = false
          self.exErr = true
        }
      },
      uploadStore () {
        this.$emit('hideLayer')
        this.$root.PropStore.$emit('uploadStore', this.store)
        alert('数据导入成功')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .layer-pop {
    display: none;
    z-index: 99;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%); 
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  }
  .layer {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 90%;
    padding: 0.4rem;
    background: #f7f7f7;
    border-radius: 0.2rem;
  }
  .layer input {
    width: 100%;
  }
  .layer p {
    width: 100%;
    margin-top: 0.1rem;
  }
  .layer .layer-btn {
    margin-top: 0.4rem;
    padding: 0.2rem 0.4rem;
    border: 0;
    border-radius: 0.2rem;
    color: #fff;
  }
  .show-layer {
    display: block;
  }
</style>

