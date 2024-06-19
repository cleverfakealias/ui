<template>
  <v-container>
    <!-- Header section -->
    <v-row justify="center" class="my-5">
      <v-col cols="12" sm="8" class="text-left">
        
        <br />
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
        <PersonalSummary />
        <!-- <h3>This application was built with the following:</h3>
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
        </div> -->
        <br />
        <h3>
          Please feel free to explore my work, unfortunately, most of it I can't
          actually show you. Reach out if you believe we could create something
          great together.
        </h3>
        <div>
          <a href="https://github.com/cleverfakealias" target="_blank">
            <v-icon>mdi-github</v-icon> GitHub
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/ben-hickman-02978819b/"
            target="_blank"
          >
            <v-icon>mdi-linkedin</v-icon> LinkedIn
          </a>
        </div>
      </v-col>
      <v-col cols="12" sm="4" class="text-right">
        <img :src="myPhoto" alt="Me" class="my-photo" />
      </v-col>
    </v-row>

    <!-- Skills section -->
    <v-row justify="center" class="my-5">
      <v-col class="text-center">
        <h2 class="my-5">Skills Snapshot</h2>
        <v-row justify="center">
          <v-col v-for="skill in skills" :key="skill">
            <v-chip color="primary">{{ skill }}</v-chip>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- Contact/Connect section -->
    <v-row justify="center" class="my-5">
      <v-col class="text-center">
        <h2>Ready to Collaborate?</h2>
        <p>Let's connect and discuss how I can contribute to your projects.</p>
      </v-col>
    </v-row>
    <v-row justify="center" class="my-5">
      <v-col cols="12" md="4">
        <ContactForm />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PersonalSummary from '@/components/PersonalSummary.vue'
import ContactForm from '@/components/ContactForm.vue'

export default {
  components: {
    PersonalSummary,
    ContactForm,
  },
  data() {
    return {
      myPhoto: require('@/assets/me.jpg'),
      name: 'Benjamin Hickman',
      skills: [
        'Java',
        'Python',
        'Typescript',
        'Node.js',
        'React.js',
        'Vue.js',
        'Docker',
        'Cloud Infrastructure',
      ],
      portfolioHighlights: [
        { title: 'Cloud Architecture' },
        { title: 'Frontend Development' },
        { title: 'Backend Development' },
        { title: 'Database Management' },
        { title: 'DevOps Practices' },
      ],
    }
  },
}
</script>

<style scoped>
.my-photo {
  width: 66%;
}
</style>
