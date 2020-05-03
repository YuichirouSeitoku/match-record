<template>
    <div v-on:click="emitParent">
        <v-card
            class="my-3 pt-3 elevation-1"
            outlined
        >
            <p class="text-center text--secondary font-weight-light">{{ card }}</p>
        </v-card>
    </div>
</template>

<script>
export default {
  name: 'InputDataCard',
  props: {
    card: String,
    id: Number
  },
  methods: {
    emitParent () {
      this.$emit('fromChildValue', this.id, this.card)
    }
  }
}
</script>
