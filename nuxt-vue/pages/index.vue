<template>
  <v-container>
    <!-- Header section -->
    <v-row justify="center" class="my-5">
      <v-col cols="12" sm="8" class="text-left">
        <h1>Ben Hickman</h1>
        <h2>Software Engineer</h2>
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
        <p>
          Hi there!<br /><br />

          I'm delighted to have you here! My name is Ben Hickman and I'm an
          experienced software engineer specializing in full-stack development,
          I've built this portfolio to showcase my expertise in full stack
          development. This website was built using the following technologies:
        </p>
        <ul>
          <li><a href="https://nuxtjs.org" target="_blank">Nuxt.js</a></li>
          <li>
            <a href="https://vuetifyjs.com/en/" target="_blank">Vuetify.js</a>
          </li>
          <li>
            <a href="https://www.python.org" target="_blank">Python</a>
          </li>
        </ul>
        <br />
        <p>
          Please feel free to explore my work and reach out if you believe we
          could create something great together.
        </p>
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
import ContactForm from '@/components/ContactForm.vue'

export default {
  components: {
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
        'Vue.js',
        'Node.js',
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
