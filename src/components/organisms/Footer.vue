<template>
  <v-bottom-navigation
    grow
    color="teal"
  >
    <b-icon-button 
      v-for= "(buttonItem,index) in buttonItems"
      :key=index
      :button-name=buttonItem.buttonName
      :icon-name=buttonItem.iconName
      :router-path=buttonItem.routerPath
      @fromBIconButton="clickedButton"
    />
  </v-bottom-navigation>
</template>
<script>
import BIconButton from '@/components/atoms/BIconButton'
export default {
  name: 'Footer',
  components: {
    BIconButton
  },
  data () {
    return {
      buttonItems:[
        { buttonName: 'Next', iconName: 'mdi-feather', routerPath: '/BaseMenu' },
        { buttonName: 'Analysis', iconName: 'mdi-chart-line', routerPath: '/ShowChart' },
        { buttonName: 'Database', iconName: 'mdi-database', routerPath: '/BaseDatabase'}
      ]
    }
  },
  methods: {
    clickedButton (routerPath) {
      this.$router.push(routerPath)
    }
  }
}
</script>
