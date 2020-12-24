<template>
  <v-card
    class="my-3 pt-3 elevation-1"
    outlined
  >
      <v-row justify="center">
        <p class="display-1 font-weight-bold">
          <span class="under">
            {{ cardTitle }}
          </span>
        </p>
      </v-row>

      <br>

      <v-container>
        <template v-for="(item, index) in cardItems">
          <v-row :key=index>
            <v-col>
              <p class="title">{{ item.subject  }}</p>
            </v-col>
            <v-col>
              <p class="title">{{ item.content }}</p>
            </v-col>
          </v-row>
        </template>
      </v-container>

  </v-card>
</template>
<script>
export default {
  name: 'BSimpleCard',
  props: {
    cardTitle: String,
    cardItems: Array,
  }
}
</script>
<style scopoed>
.under {
  border-bottom: solid 7px #ff99ab;
}
</style>
