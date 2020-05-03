<template>
  <div id="app">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Karuta Record(β版)
          </h1>
        </div>
      </div>
    </section>
    <section class="section main-contents has-background-white-ter">
      <router-view/>
    </section>
    <section class="hero is-primary">
      <FooterTest/>
    </section>
  </div>
</template>

<script>
import FooterTest from './components/FooterTest'
export default {
  name: 'App',
  components: {
    FooterTest
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
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.main-contents {
  flex: 1;
}
.footer {
  margin-top: auto;
}
</style>
