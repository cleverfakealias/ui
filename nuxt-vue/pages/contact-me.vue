<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8" class="text-center">
        <h2 class="display-1">
          Please feel free to reach out to me and I'll get back to you as
          soon as possible!
        </h2>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" md="4">
        <ContactInformation />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ContactInformation from '~/components/ContactInformation.vue';

export default {
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
