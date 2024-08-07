<template>
  <v-card class="contact-information">
    <v-card-title>
      <v-row>
        <v-icon>mdi-account-box</v-icon>
        <span class="ml-2"><strong>Ben Hickman</strong></span>
      </v-row>
    </v-card-title>
    <v-card-text>
      <v-row class="d-flex align-center">
        <v-col cols="10">
          <v-simple-table>
            <tbody>
              <tr>
                <td>
                  <v-icon>mdi-laptop</v-icon>
                </td>
                <td>Software Engineer</td>
              </tr>
              <tr>
                <td>
                  <v-icon>mdi-earth</v-icon>
                </td>
                <td>Minneapolis, MN</td>
              </tr>
              <tr>
                <td>
                  <v-icon>mdi-email</v-icon>
                </td>
                <td>
                  <a href="mailto:me@benhickman.dev">me@benhickman.dev</a>
                </td>
              </tr>
              <tr>
                <td>
                  <v-icon>mdi-phone</v-icon>
                </td>
                <td>(651) 300-4252</td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-col>
        <v-col cols="2" class="d-flex align-center">
          <img :src="myPhoto" alt="My Photo" class="photo" />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
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
.photo {
  max-height: 100%;
  width: 100%;
  object-fit: contain;
  display: block;
  margin: 0 auto;
}
</style>
