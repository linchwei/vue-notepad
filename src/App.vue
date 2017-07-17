<template>
  <div id="app">
    <note-header></note-header>
    <note-main></note-main>
    <note-footer></note-footer>
  </div>
</template>

<script>
  export default {
    name: 'app',
    components: {
      'note-header': {
        template: `
          <header class="header">
            <h1>记事本</h1>
          </header>
        `
      },
      'note-main': {
        template: `
          <div class="main">
            <div class="search-group">
              <input placeholder="待办事项">
              <a class="btn">提交</a>
            </div>
            <div class="info">
              <div class="group">
                <a href="">未完成</a>
              </div>
              <div class="group">
                <a href="">已完成</a>
              </div>
              <div class="group">
                <a href="">已取消</a>
              </div>
            </div>
          </div>
        `
      },
      'note-footer': {
        template: `
           <footer class="footer">
            <span>&copy; Levy notepad</span>
          </footer>
        `
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
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
  .header {
    z-index: 99;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 1.8rem;
    line-height: 1.8rem;
    background: #00b0f0;
    color: #fff;
    text-align: center
  }
   .header h1 {
     font-weight: normal;
     font-size: 24px;
   }
  .footer {
    z-index: 99;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1.2rem;
    line-height: 1.2rem;
    color: #666;
    font-size: 14px;
    background: #f7f7f7;
    text-align: center;
  }
  .main {
    padding: 1.8rem 0 1.2rem;
  }
  .main .search-group {
    display: flex;
    align-items: center;
    padding: 0 0.2rem;
    margin-top: 0.6rem;
  }
  .main .search-group input {
    flex: 1;
    height: 1rem;
    border: 1px solid #ddd;
    border-radius: 0.1rem;
    text-indent: 0.3rem;
    margin-right: 0.2rem;
  }
  .main .search-group .btn {
    padding: 0 0.6rem;
    height: 1rem;
    line-height: 1rem;
    font-size: 16px;
    background: #00b0f0;
    color: #fff;
    border-radius: 0.1rem;
    cursor: pointer;
  }
  .main .info {
    padding: 0 0.2rem;
    margin-top: 0.6rem;
  }
  .main .info .group {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #fff;
  }
  .main .group a {
    position: relative;
    flex: 1;
    font-size: 16px;
    background: #00b0f0;
    color: #fff;
    padding: 0.2rem 0.4rem;
    text-decoration: none;
  }
</style>
