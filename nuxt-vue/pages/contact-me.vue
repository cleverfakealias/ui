<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8" class="text-center">
        <h2 class="display-1">
          This form can be used to contact me via email. I'll get back to you as
          soon as possible!
        </h2>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" md="4">
        <ContactForm />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ContactForm from '@/components/ContactForm.vue'

export default {
  components: {
    ContactForm,
  },
  // other component options
}
</script>

<style scoped>
.text-center {
  text-align: center;
}
</style>
