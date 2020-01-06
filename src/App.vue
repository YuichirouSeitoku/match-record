<template>
  <div id="app">
    <div class="main-height">
      <router-view/>
    </div>
    <div>
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
  height: 100vh;
}
body {
  height: 100vh;
}
#app {
  height: 100%;
}
.main-height {
  height: 90%;
}
</style>
