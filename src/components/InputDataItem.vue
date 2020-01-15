<template>
    <div class="columns">
        <div class="column">
            <div class="box" v-on:click="emitParent">
                <p class="has-text-weight-medium has-text-centered">{{ card }}</p>
            </div>
        </div>
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
