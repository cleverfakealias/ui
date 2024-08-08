<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8" class="text-center">
        <h4 class="display-1">
          Please feel free to reach out to me and I'll get back to you as soon
          as possible!
        </h4>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col>
        <ContactInformation />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ContactInformation from '~/components/ContactInformation.vue'

export default {
  name: 'ContactMe',
  components: {
    ContactInformation,
  },
  // other component options
}
</script>

<style scoped>
.text-center {
  text-align: center;
}
</style>
