<template>
    <v-form>
        <v-text-field
          v-model="username"
          v-on:change="emitEmailAndPassword"
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
      username: ''
    }
  },
  methods: {
    emitEmailAndPassword () {
      this.$emit('fromBEmailForm', this.username)
    }
  }
}
</script>
