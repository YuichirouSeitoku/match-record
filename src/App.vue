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
import Header from './components/organisms/Header'
import Footer from './components/organisms/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>
