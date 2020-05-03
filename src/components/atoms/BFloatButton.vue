<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" sm="12" md="6">
        <v-card>
          <v-btn
            absolute
            dark
            fab
            top
            right
            color="pink"
            to="/InputData/0"
          >
          <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
export default {
  name: 'BFloatButton'
  components: {
    BFloatButton
  }
}
