<template>
    <v-container>
      <!-- Interactive Projects Showcase -->
      <v-carousel cycle :show-arrows="false">
        <v-carousel-item v-for="(project, index) in projects" :key="index">
          <v-card>
            <v-img :src="project.image" height="300px"></v-img>
            <v-card-title>{{ project.title }}</v-card-title>
            <v-card-subtitle>{{ project.description }}</v-card-subtitle>
            <v-card-actions>
              <v-btn :href="project.link" target="_blank">Visit Page</v-btn>
            </v-card-actions>
          </v-card>
        </v-carousel-item>
      </v-carousel>
    </v-container>
</template>

<script>
export default {
  name: 'ContentCarousel',
  data() {
    return {
      inputText: '',
      displayedText: '',
      projects: [
        {
          title: 'GitHub',
          description: 'My Git Projects.',
          image: require('@/assets/code2.jpg'),
          link: 'https://github.benhickman.dev',
        },
        {
          title: 'LinkedIn',
          description: 'Connect with me on LinkedIn.',
          image: require('@/assets/linkedin.jpg'),
          link: 'https://linkedin.benhickman.dev',
        },
        // Add more projects here
      ],
    }
  },
  methods: {
    displayText() {
      this.displayedText = this.inputText
    },
  },
}
</script>

<style scoped>

</style>
