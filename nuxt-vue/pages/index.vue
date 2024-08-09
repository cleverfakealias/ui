<template>
  <!-- Main Content -->
  <v-main class="welcomePageMainContainer">
    <v-container>
      <!-- Development Notice -->
      <v-row class="pageDevelopmentNotice" align="center" justify="center">
        <v-col cols="auto" class="d-flex align-center">
          <v-icon color="warning" class="responsive-icon">mdi-alert</v-icon>
        </v-col>
        <v-col cols="12" md="8" class="text-center">
          <h4 class="responsive-text">
            Please note, this website is under development. Some features may
            not function as expected.
          </h4>
        </v-col>
        <v-col cols="auto" class="d-flex align-center">
          <v-icon color="warning" class="responsive-icon">mdi-alert</v-icon>
        </v-col>
      </v-row>

      <!-- Content Carousel -->
      <v-row justify="center" class="my-5">
        <v-col cols="12" md="8">
          <ContentCarousel />
        </v-col>
      </v-row>

      <!-- Skills Section -->
      <v-row justify="center" class="my-5">
        <v-col class="text-center">
          <h2 class="my-5 responsive-text">Career Highlights</h2>
          <v-row justify="center">
            <v-col
              v-for="skill in skills"
              :key="skill"
              cols="12"
              sm="6"
              md="3"
              class="d-flex justify-center"
            >
              <v-chip class="custom-chip" color="primary">{{ skill }}</v-chip>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <!-- Personal Summary and Contact Information -->
      <v-row justify="center" class="my-5">
        <v-col cols="12" md="8">
          <PersonalSummary />
          <br />
          <ContactInformation />
          <br />

          <!-- Technologies Used -->
          <h3 class="responsive-text">
            This website was built using the following technologies:
          </h3>
          <v-list dense class="technologies-list">
            <v-list-item>
              <v-list-item-avatar>
                <v-icon class="responsive-icon">mdi-nuxt</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <a href="https://nuxtjs.org" target="_blank">Nuxt.js</a>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-avatar>
                <v-icon class="responsive-icon">mdi-vuetify</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <a href="https://vuetifyjs.com/en/" target="_blank"
                  >Vuetify.js</a
                >
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-avatar>
                <v-icon class="responsive-icon">mdi-cloud</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <a href="https://vercel.com" target="_blank">Vercel</a>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-avatar>
                <v-icon class="responsive-icon">mdi-language-python</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <a href="https://www.python.org" target="_blank">Python</a>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import ContactInformation from '~/components/ContactInformation.vue'
import ContentCarousel from '~/components/ContentCarousel.vue'
import PersonalSummary from '~/components/PersonalSummary.vue'
export default {
  components: {
    ContactInformation,
    ContentCarousel,
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
.responsive-icon {
  font-size: 24px;
}

.responsive-text {
  font-size: 18px;
}

.custom-chip {
  font-size: 16px;
  margin: 4px;
}

.technologies-list {
  padding: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
.welcomePageMainContainer {
  padding: 0 !important; /* Override default padding */
}
</style>
