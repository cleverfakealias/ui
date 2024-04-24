<template>
  <v-form @submit.prevent="submitForm">
    <v-text-field
      v-model="name"
      label="Your Name"
      required
    ></v-text-field>
    <v-text-field
      v-model="email"
      label="Your Email"
      required
    ></v-text-field>
    <v-textarea
      v-model="message"
      label="Your Message"
      required
    ></v-textarea>
    <v-btn type="submit">Submit</v-btn>
  </v-form>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
    };
  },
  methods: {
    async submitForm() {
      try {
        await axios.post('/api/send-email', {
          name: this.name,
          email: this.email,
          message: this.message
        });
        alert('Email sent');
      } catch (error) {
        console.error('Error occurred while sending email', error);
        alert('Error occurred while sending email');
      }
    },
  },
};
</script>