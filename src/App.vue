<template>
  <div id="app">
    <div class="main-height">
      <router-view/>
    </div>
    <div class="footer">
      <Footer/>
    </div>
  </div>
</template>

<script>
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>

<style>
html {
  min-height: 100vh;
}
body {
  min-height: 100vh;
}
#app {
  min-height: 100%;
}
.footer {
  margin-top: auto;
}
</style>
