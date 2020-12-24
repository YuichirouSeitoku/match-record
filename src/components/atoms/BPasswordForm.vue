<template>
  <v-form>
    <v-text-field
      v-model="password"
      :append-icon="isShow ? 'mdi-eye' : 'mdi-eye-off'"
      :type="isShow ? 'text' : 'password'"
      @change="inputPasswordForm"
      @click:append="isShow = !isShow"
      label="Password"
      class="input-group--focused"
      outlined
      rounded
    ></v-text-field>
  </v-form>
</template>

<script>
export default {
  name: 'BPasswordForm',
  data () {
    return {
      password: '',
      isShow: 'false'
    }
  },
  methods: {
    inputPasswordForm () {
      this.$emit('fromBPasswordForm', this.password)
    }
  }
}
</script>
