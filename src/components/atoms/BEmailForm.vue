<template>
  <v-form>
    <v-text-field
      v-model="email"
      @change="inputEMailForm"
      label="Email"
      outlined
      rounded
    ></v-text-field>
  </v-form>
</template>

<script>
export default {
  name: 'BEmailForm',
  data () {
    return {
      email: ''
    }
  },
  methods: {
    inputEMailForm () {
      this.$emit('fromBEmailForm', this.email)
    }
  }
}
</script>
