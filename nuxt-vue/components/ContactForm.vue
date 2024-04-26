<template>
  <div class="container">
    <form @submit.prevent="submitForm" class="contact-form">
      <v-text-field
          v-model="name"
          :rules="[v => !!v || 'Name is required']"
          label="Name"
          required
          class="input-field"
      ></v-text-field>
      <v-text-field
          v-model="email"
          :rules="[v => /.+@.+\..+/.test(v) || 'E-mail must be valid']"
          label="Email"
          required
          class="input-field"
      ></v-text-field>
      <v-textarea
          v-model="message"
          :rules="[v => !!v || 'Message is required']"
          label="Message"
          required
          class="input-field"
      ></v-textarea>
      <vue-recaptcha
          :sitekey="recaptchaSiteKey"
          @verify="onCaptchaVerified"
          @expired="onCaptchaExpired"
      >
      </vue-recaptcha>
      <v-btn :disabled="loading" color="primary" type="submit">
        <v-progress-circular v-if="loading" indeterminate color="white" size="24" />
        <span v-else>Email Me</span>
      </v-btn>
      <v-btn color="primary" @click="callTestApi">Call Test API</v-btn>
    </form>
    <v-snackbar v-model="snackbar" color="error" :timeout="3000">
      {{ snackbarMessage }}
      <v-btn color="white" text @click="snackbar = false"> Close </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import axios from 'axios'
import VueRecaptcha from 'vue-recaptcha';

export default {
  components: {
    VueRecaptcha
  },
  data() {
    return {
      name: '',
      email: '',
      message: '',
      recaptcha: '',
      snackbar: false,
      snackbarMessage: '',
      loading: false,
    }
  },
  computed: {
    recaptchaSiteKey() {
      return process.env.NUXT_ENV_CAPTCHA_SITE_KEY_V2
    },
  },
  methods: {
    onCaptchaVerified(response) {
      this.recaptcha = response
    },
    onCaptchaExpired() {
      this.recaptcha = ''
    },
    async submitForm() {
      if (!this.recaptcha) {
        this.snackbarMessage = 'Please verify the captcha before submitting.'
        this.snackbar = true
        return
      }

      this.loading = true

      const formData = {
        name: this.name,
        email: this.email,
        message: this.message,
        recaptcha: this.recaptcha,
      }

      try {
        const response = await axios.post('/api/send_email', formData)
        if (response.data.status === 'success') {
          this.snackbarMessage = 'Email sent successfully'
          this.name = ''
          this.email = ''
          this.message = ''
          this.recaptcha = ''
        } else {
          this.snackbarMessage = response.data.message
        }
      } catch (error) {
        console.error(error)
        this.snackbarMessage = 'An error occurred while sending the email'
      } finally {
        this.loading = false
        this.snackbar = true
      }
    },
    async callTestApi() {
      try {
        const response = await axios.get('/api/test');
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
}
</script>
