<template>
  <div class="container">
    <form @submit.prevent="submitForm" class="contact-form">
      <v-text-field
        v-model="name"
        label="Name"
        required
        class="input-field"
      ></v-text-field>
      <v-text-field
        v-model="email"
        label="Email"
        required
        class="input-field"
      ></v-text-field>
      <v-textarea
        v-model="message"
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
      <v-btn color="primary" type="submit">Email Me</v-btn>

    </form>
    <v-snackbar v-model="snackbar" color="error" :timeout="3000">
      {{ snackbarMessage }}
      <v-btn color="white" text @click="snackbar = false"> Close </v-btn>
      <v-btn color="primary" @click="callTestApi">Call Test API</v-btn>
    </v-snackbar>
  </div>
</template>

<style scoped>
.container {
  max-width: 100%;
  margin: 0 auto;
  padding: .25rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: .25rem;
}

.input-field {
  margin-bottom: 1rem;
}
</style>

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

      const formData = {
        name: this.name,
        email: this.email,
        message: this.message,
        recaptcha: this.recaptcha,
      }

      try {
        const response = await axios.post('/api/send_email', formData)
        if (response.status === 200) {
          alert('Email sent successfully')
          this.name = ''
          this.email = ''
          this.message = ''
          this.recaptcha = ''
        } else {
          alert('Failed to send email')
        }
      } catch (error) {
        console.error(error)
        alert('An error occurred while sending the email')
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
