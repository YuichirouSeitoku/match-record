<template>
    <v-form>
        <v-text-field
          v-model="password"
          v-on:change="emitEmailAndPassword"
          :append-icon="is_show ? 'mdi-eye' : 'mdi-eye-off'"
          :type="is_show ? 'text' : 'password'"
          label="Password"
          class="input-group--focused"
          outlined
          rounded
          @click:append="is_show = !is_show"
        ></v-text-field>
    </v-form>
</template>

<script>
export default {
  name: 'BPasswordForm',
  data () {
    return {
      password: '',
      is_show: 'false'
    }
  },
  methods: {
    emitEmailAndPassword () {
      this.$emit('fromBPasswordForm', this.password)
    }
  }
}
</script>
