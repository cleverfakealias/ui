<template>
  <div>
    <v-container>
      <!-- Interactive Projects Showcase -->
      <v-carousel>
        <v-carousel-item v-for="(project, index) in projects" :key="index">
          <v-card>
            <v-img :src="project.image" height="200px"></v-img>
            <v-card-title>{{ project.title }}</v-card-title>
            <v-card-subtitle>{{ project.description }}</v-card-subtitle>
            <v-card-actions>
              <v-btn :href="project.link" target="_blank">Visit Page</v-btn>
            </v-card-actions>
          </v-card>
        </v-carousel-item>
      </v-carousel>
      <br />
    </v-container>
  </div>
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
.playground-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #f0f8ff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.playground-header {
  text-align: center;
  margin-bottom: 20px;
}

.playground-header h1 {
  font-size: 2em;
  color: #333;
}

.playground-main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.playground-textarea {
  width: 100%;
  height: 100px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
}

.playground-button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.playground-button:hover {
  background-color: #0056b3;
}

.playground-display {
  margin-top: 20px;
  padding: 10px;
  background-color: #e9ecef;
  border-radius: 4px;
  width: 100%;
  text-align: center;
}

.playground-display p {
  font-size: 18px;
  color: #333;
}
</style>
