<template>
  <div @click="clickedBButton">
    <v-btn>{{ buttonName }}</v-btn>
  </div>
</template>

<script>
export default {
  name: 'BButton',
  props: {
    buttonName: String
  },
  methods: {
    clickedBButton () {
      this.$emit('clickedBButton')
    }
  }
}
</script>
