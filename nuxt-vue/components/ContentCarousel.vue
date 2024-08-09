<template>
  <v-card>
    <v-carousel cycle>
      <v-carousel-item v-for="(slide, index) in projects" :key="index" cover>
        <a :href="slide.link" target="_blank" class="image-link">
          <div class="image-wrapper">
            <img :src="slide.image" :alt="slide.title" class="carousel-image" />
          </div>
          <div class="text-container">
            <div class="text-background">
              <span class="text">{{ slide.title }}</span>
              <br />
              <span class="text">{{ slide.description }}</span>
            </div>
          </div>
        </a>
      </v-carousel-item>
    </v-carousel>
  </v-card>
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
.image-link {
  display: block;
  text-decoration: none; /* Remove underline from links */
}

.image-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  overflow: hidden; /* Ensure the image does not overflow the container */
}

.carousel-image {
  width: 100%;
  height: auto;
  max-height: 100%;
  object-fit: contain; /* Ensure the image scales properly */
}

.text-container {
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
}

.text-background {
  background-color: rgba(0, 0, 0, 0.8); /* Semi-transparent dark background */
  padding: 10px;
  border-radius: 4px;
}

.text {
  color: #fff; /* White text for contrast */
}
</style>
