<template>
  <v-app>
    <!-- Main Content -->
    <v-main>
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="auto">
            <v-icon color="warning">mdi-alert</v-icon>
          </v-col>
          <v-col cols="auto">
            <h4>
              Please note this website is a work in progress so some things may
              not work as expected!
            </h4>
          </v-col>
          <v-col cols="auto">
            <v-icon color="warning">mdi-alert</v-icon>
          </v-col>
        </v-row>
        <br />
        <ContactInformation />
        <!-- Skills section -->
        <v-row justify="center" class="my-5">
          <v-col class="text-center">
            <h2 class="my-5">Skill Highlights</h2>
            <v-row justify="center">
              <v-col
                v-for="skill in skills"
                :key="skill"
                cols="12"
                sm="6"
                md="3"
              >
                <v-chip class="custom-chip" color="primary">{{ skill }}</v-chip>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <!-- Header section -->
        <v-row justify="center" class="my-5">
          <v-col cols="12" sm="8" class="text-left">
            <PersonalSummary />
            <h3>This website was built using the following technologies:</h3>
            <div>
              <div>
                <a href="https://nuxtjs.org" target="_blank">
                  <v-icon>mdi-nuxt</v-icon> Nuxt.js
                </a>
              </div>
              <div>
                <a href="https://vuetifyjs.com/en/" target="_blank">
                  <v-icon>mdi-vuetify</v-icon> Vuetify.js
                </a>
              </div>
              <div>
                <a href="https://vercel.com" target="_blank">
                  <v-icon>mdi-cloud</v-icon> Vercel
                </a>
              </div>
              <div>
                <a href="https://www.python.org" target="_blank">
                  <v-icon>mdi-language-python</v-icon> Python
                </a>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import ContactInformation from '~/components/ContactInformation.vue'
import PersonalSummary from '~/components/PersonalSummary.vue'
export default {
  components: {
    ContactInformation,
    PersonalSummary,
  },
  data() {
    return {
      drawer: false,
      skills: [
        'Fullstack Development',
        'Project Management',
        'Cloud Platforms',
        'Database Management',
        'CI/CD Pipelines',
        'Containerization',
        'Technical Leadership',
        'Security Practices',
      ],
    }
  },
}
</script>

<style scoped>
.my-photo {
  max-width: 100%;
  height: auto;
}
.custom-chip {
  white-space: normal;
  word-break: break-word;
}
</style>
