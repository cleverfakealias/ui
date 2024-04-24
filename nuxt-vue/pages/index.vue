<template>
  <v-container>
    <!-- Header section -->
    <v-row>
      <v-col>
        <h1>Welcome to {{ name }}'s Portfolio</h1>
        <p>Experienced software engineer specializing in full-stack development with expertise in Java, Python, and Typescript.</p>
      </v-col>
    </v-row>

    <!-- Skills section -->
    <v-row>
      <v-col>
        <h2>Skills Snapshot</h2>
        <v-row>
          <v-col v-for="skill in skills" :key="skill">
            <v-chip color="primary">{{ skill }}</v-chip>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- Portfolio highlights -->
    <v-row>
      <v-col>
        <h2>Portfolio Highlights</h2>
        <v-list dense>
          <v-list-item v-for="(highlight, index) in portfolioHighlights" :key="index">
            <v-list-item-content>
              <v-list-item-title>{{ highlight.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>

    <!-- Contact/Connect section -->
    <v-row>
      <v-col>
        <h2>Ready to Collaborate?</h2>
        <p>Let's connect and discuss how I can contribute to your projects.</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      name: 'Benjamin Hickman',
      skills: ['Java', 'Python', 'Typescript', 'Vue.js', 'Node.js', 'Docker', 'Cloud Infrastructure'],
      portfolioHighlights: [
        { title: 'Cloud Architecture' },
        { title: 'Frontend Development' },
        { title: 'Backend Development' },
        { title: 'Database Management' },
        { title: 'DevOps Practices' }
      ]
    };
  }
};
</script>

<style scoped>
/* Add your custom styles here */
</style>