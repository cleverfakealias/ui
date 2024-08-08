<template>
  <v-container class="personal-summary-container">
    <v-row>
      <v-col>
        <v-card>
          <v-img :src="windingRoad" height="200px" class="white--text">
            <v-card-title>My Journey in Technology</v-card-title>
          </v-img>

          <v-card-subtitle>
            <v-icon left>mdi-laptop</v-icon>
            Developer Story
          </v-card-subtitle>

          <v-card-text>
            <p>{{ paragraph1 }}</p>
            <p>{{ paragraph2 }}</p>
            <p>{{ paragraph3 }}</p>
          </v-card-text>

          <v-card-actions>
            <router-link to="/resume">
              <v-btn color="primary" text @click="learnMore">
                Learn More
                <v-icon right>mdi-arrow-right</v-icon>
              </v-btn>
            </router-link>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      windingRoad: require('@/assets/windingroad.jpeg'),
      paragraph1: `
Growing up, technology was always part of my life. From playing Nintendo as a young child to taking apart and reassembling my family's Gateway computer, my curiosity for how things worked was insatiable.
      `,
      paragraph2: `
I started my career in technical support and eventually became a supervisor at a dot-com startup. In this role I was immersed in web development and email hosting in the Real Estate industry. Now, I'm working on an enterprise software engineering team at a global Saas company. I work on numerous microservices and user interfaces in multiple languages.
      `,
      paragraph3: `
Over the years, I've become proficient in Python, Typescript/Javascript, and Java. I thrive on solving complex problems. I'm constantly learning and adapting to new technologies, and I'm excited about the possibility of transitioning to an Architect role in the future where I am able to leverage my skills in cloud systems and development.
      `,
    }
  },
}
</script>

<style scoped>
.paragraph {
  white-space: pre-line;
}
.personal-summary-container {
  max-width: 100%;
  margin: 0 auto; /* Center the container */
}
</style>
