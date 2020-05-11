<template>
    <v-btn @click="clickedBIconButton">
      <span>{{ buttonName }}</span>
      <v-icon>{{ iconName }}</v-icon>
    </v-btn>
</template>

<script>
export default {
  name: 'BIconButton',
  props: {
    buttonName: String,
    iconName: String,
    routerPath: String
  },
  methods: {
    clickedBIconButton () {
      this.$emit('fromBIconButton', this.routerPath)
    }
  }
}
</script>
