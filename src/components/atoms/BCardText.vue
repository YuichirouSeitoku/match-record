<template>
  <p class="text-center text--secondary font-weight-light">{{ cardText }}</p>
</template>

<script>
export default {
  name: 'BCardText',
  props: {
    cardText: String
  }
}
</script>
