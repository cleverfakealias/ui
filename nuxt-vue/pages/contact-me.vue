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
      <v-col cols="12" md="8">
        <v-container>
          <v-row justify="center" class="mt-5">
            <v-col cols="12" md="8">
              <form ref="form" class="custom-form" @submit.prevent="submitForm">
                <v-text-field
                  v-model="form.name"
                  label="Name"
                  name="name"
                  prepend-icon="mdi-account"
                  :rules="[(v) => !!v || 'Name is required']"
                  required
                  class="custom-field"
                  hint="Enter your full name"
                  persistent-hint
                  @input="validateForm"
                ></v-text-field>
                <v-text-field
                  v-model="form.email"
                  label="Email"
                  name="email"
                  type="email"
                  prepend-icon="mdi-email"
                  :rules="[
                    (v) => !!v || 'Email is required',
                    (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                  ]"
                  required
                  class="custom-field"
                  hint="Enter your email address"
                  persistent-hint
                  @input="validateForm"
                ></v-text-field>
                <v-text-field
                  v-model="form.phone"
                  label="Phone (optional)"
                  name="phone"
                  type="tel"
                  prepend-icon="mdi-phone"
                  class="custom-field"
                  hint="Enter your phone number"
                  persistent-hint
                ></v-text-field>
                <v-textarea
                  v-model="form.message"
                  :rules="[(v) => !!v || 'Message is required']"
                  label="Message"
                  name="message"
                  prepend-icon="mdi-message"
                  required
                  class="custom-field"
                  hint="Enter your message"
                  persistent-hint
                  @input="validateForm"
                ></v-textarea>
                <div style="display: flex; justify-content: center">
                  <vue-recaptcha
                    :sitekey="captchaSiteKey"
                    @verify="onCaptchaVerified"
                    @expired="onCaptchaExpired"
                  />
                </div>

                <v-row justify="center">
                  <v-col cols="12" md="4" class="d-flex justify-center">
                    <v-btn
                      class="custom-btn mt-4"
                      type="submit"
                      :disabled="!isFormValid && !captchaVerified"
                      >Submit</v-btn
                    >
                  </v-col>
                </v-row>
              </form>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
    <v-row justify="center" class="mt-5">
      <v-col cols="12" md="8">
        <ContactInformation />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VueRecaptcha from 'vue-recaptcha'
import ContactInformation from '~/components/ContactInformation.vue'

export default {
  name: 'ContactMe',
  components: {
    ContactInformation,
    VueRecaptcha,
  },

  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        message: '',
      },
      errors: {},
      isFormValid: false,
      captchaVerified: false,
    }
  },

  computed: {
    captchaSiteKey() {
      return process.env.NUXT_ENV_CAPTCHA_SITE_KEY_V2
    },
    formSpreeUrl() {
      return process.env.NUXT_ENV_FORMSPREE_URL
    },
  },

  methods: {
    onCaptchaVerified(response) {
      console.log(JSON.stringify(this.form, null, 2))
      this.captchaVerified = !!response
    },
    onCaptchaExpired() {
      this.captchaVerified = false
    },
    validateForm() {
      this.errors = {}

      if (!this.form.name) {
        this.errors.name = 'Name is required.'
      }

      if (!this.form.email) {
        this.errors.email = 'Email is required.'
      } else if (!this.validEmail(this.form.email)) {
        this.errors.email = 'Valid email is required.'
      }

      if (!this.form.message) {
        this.errors.message = 'Message is required.'
      }
      const isFormValid = Object.keys(this.errors).length === 0
      this.valid = isFormValid
      return isFormValid
    },
    validEmail(email) {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
      return re.test(email)
    },
    submitForm() {
      if (this.validateForm() && this.captchaVerified) {
        const form = this.$refs.form
        form.action = this.formSpreeUrl
        form.method = 'POST'
        form.target = '_blank'
        form.submit()
      }
    },
  },
}
</script>

<style scoped>
.custom-form {
  background-color: rgb(25, 118, 210); /* White background */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
}

.custom-field {
  transition: all 0.3s ease;
  margin-bottom: 20px; /* Space between fields */
}

.custom-field input:focus,
.custom-field textarea:focus {
  border-color: #1a237e; /* Darker shade for focus */
  box-shadow: 0 0 5px rgba(26, 35, 126, 0.5); /* Subtle shadow for focus */
  outline: none; /* Remove default outline */
}

.custom-btn {
  background-color: #1a237e; /* Darker shade of blue */
  color: white; /* Text color */
  width: 100%; /* Full width button */
}

.custom-btn:hover {
  background-color: #0d1b5e; /* Even darker shade for hover effect */
}

@media (max-width: 600px) {
  .custom-form {
    padding: 10px; /* Reduce padding on small screens */
  }

  .custom-btn {
    font-size: 14px; /* Smaller font size on small screens */
  }
}
</style>
