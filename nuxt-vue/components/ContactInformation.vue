<template>
  <div class="center-container">
    <v-card class="contact-information" outlined>
      <v-card-title>
        <v-row>
          <v-col class="left-column">
            <v-icon>mdi-laptop</v-icon>
            <span>Software Engineer</span>
          </v-col>
          <v-spacer></v-spacer>
          <v-col class="right-column">
            <span><strong>Ben Hickman</strong></span>
            <v-icon>mdi-account-box</v-icon>
          </v-col>
        </v-row>
      </v-card-title>
      <v-card-text>
        <div class="contact-container">
          <div class="contact-rows">
            <v-row>
              <v-col class="left-column">
                <v-icon>mdi-earth</v-icon>
                <span>Minnesota</span>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-icon>mdi-email</v-icon>
                <span>
                  <a href="mailto:me@benhickman.dev">me@benhickman.dev</a>
                </span>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="left-column">
                <v-icon>mdi-phone</v-icon>
                <span>(651) 300-4252</span>
              </v-col>
            </v-row>
          </div>
          <div class="photo-container">
            <img :src="myPhoto" alt="My Photo" class="photo" />
          </div>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'ContactInformation',
  data() {
    return {
      githubLink: 'https://github.com/your-profile',
      linkedinLink: 'https://linkedin.com/in/your-profile',
      myPhoto: require('@/assets/me.jpg'),
    }
  },
}
</script>

<style scoped>

.contact-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.contact-information {
  display: grid;
  width: 80%;
}

.contact-rows {
  width: 75%;
  margin-left: 0; /* Align to the left */
}

.photo-container {
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.photo {
  max-height: auto;
  width: 50%;
  object-fit: contain;
  display: flex;
  align-items: center;}

.left-column {
  text-align: left;
  word-break: normal;
  white-space: normal;
}

.right-column {
  text-align: right;
  word-break: normal;
  white-space: normal;
}
</style>
