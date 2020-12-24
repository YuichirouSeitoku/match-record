<template>
  <v-form>
    <v-text-field
      v-model="formData"
      @change="inputSimpleForm"
      :label=formLabel
      outlined
      rounded
    ></v-text-field>
  </v-form>
</template>

<script>
export default {
  name: 'BSimpleForm',
  props: {
    formLabel: String
  },
  data () {
    return {
      formData: ''
    }
  },
  methods: {
    inputSimpleForm () {
      this.$emit('fromBSimpleForm', this.formData)
    }
  }
}
</script>
