<template>
  <v-app>
    <Header/>
    <v-content class="grey lighten-4">
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <Footer/>
  </v-app>
</template>
<script>
import Footer from './components/Footer'
import Header from './components/Header'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

