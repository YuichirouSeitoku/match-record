<template>
  <v-bottom-navigation
    :value="activeBtn"
    grow
    color="teal"
  >
    <v-btn to="/BaseMenu">
      <span>Next</span>
      <v-icon>mdi-feather</v-icon>
    </v-btn>

    <v-btn to="/ShowChart">
      <span>Analysis</span>
      <v-icon>mdi-chart-line</v-icon>
    </v-btn>

    <v-btn to="/BaseDatabase">
      <span>Database</span>
      <v-icon>mdi-database</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>
