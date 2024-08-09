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
        <v-card class="custom-form">
          <v-card-text>
            <v-form ref="form" v-model="valid" @submit.prevent="submitForm">
              <v-text-field
                v-model="name"
                :rules="[v => !!v || 'Name is required']"
                label="Name"
                name="name"
                required
                class="custom-field"
              ></v-text-field>
              <v-text-field
                v-model="email"
                :rules="[v => !!v || 'Email is required', v => /.+@.+\..+/.test(v) || 'E-mail must be valid']"
                label="Email"
                name="_replyto"
                type="email"
                required
                class="custom-field"
              ></v-text-field>
              <v-text-field
                v-model="phone"
                label="Phone (optional)"
                name="phone"
                type="tel"
                class="custom-field"
              ></v-text-field>
              <v-textarea
                v-model="message"
                :rules="[v => !!v || 'Message is required']"
                label="Message"
                name="message"
                required
                class="custom-field"
              ></v-textarea>
              <v-row justify="center">
                <v-col cols="12" md="4" class="d-flex justify-center">
                  <v-btn class=" custom-btn mt-4" type="submit" :disabled="!valid">Submit</v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
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
import ContactInformation from '~/components/ContactInformation.vue'

export default {
  name: 'ContactMe',
  components: {
    ContactInformation,
  },
  data() {
    return {
      valid: false,
      name: '',
      email: '',
      phone: '',
      message: '',
    }
  },
  methods: {
    submitForm() {
      if (this.$refs.form.validate()) {
        const form = this.$refs.form.$el;
        form.action = 'https://formspree.io/f/mblryopb';
        form.method = 'POST';
        form.target = '_blank';
        form.submit();
      }
    },
  },
}
</script>

<style scoped>
.text-center {
  text-align: center;
}

.v-container {
  background: linear-gradient(to right, #f8f9fa, #e9ecef);
  padding: 20px;
  border-radius: 8px;
}

.custom-form {
  background: #1976d2;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.custom-field .v-input__control {
  background: white;
}

.custom-field .v-label {
  color: black;
}

.custom-field .v-input__slot::placeholder {
  color: black;
}

.v-btn {
  width: 100%;
}

@media (max-width: 600px) {
  .v-container {
    padding: 10px;
  }

  .custom-form {
    padding: 10px;
  }

  .v-btn {
    width: 100%;
  }
}

@media (min-width: 601px) {
  .v-btn {
    width: auto;
  }
}
.custom-btn {
  background-color: #1a237e; /* Darker shade of blue */
  color: white; /* Text color */
}

.custom-btn:hover {
  background-color: #0d1b5e; /* Even darker shade for hover effect */
}
</style>