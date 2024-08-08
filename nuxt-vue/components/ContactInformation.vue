<template>
  <v-card class="contact-card" outlined>
    <v-card-title>
      <v-row class="align-center justify-center">
        <v-col cols="6" class="text-left">
          <v-icon>mdi-account-box</v-icon>
          <span><strong>Ben Hickman</strong></span>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="6" class="text-right">
          <span>Software Engineer</span>
          <v-icon>mdi-laptop</v-icon>
        </v-col>
      </v-row>
    </v-card-title>
    <v-row class="align-center">
      <v-col cols="6" class="photo-column">
        <v-img :src="myPhoto" alt="My Photo" class="photo" contain></v-img>
      </v-col>

      <v-col cols="6" class="info-column text-right">
        <v-list dense>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Location</v-list-item-title>
              <v-list-item-subtitle>Minnesota</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-avatar>
              <v-icon>mdi-earth</v-icon>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Email</v-list-item-title>
              <v-list-item-subtitle>
                <a href="mailto:me@benhickman.dev">me@benhickman.dev</a>
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-avatar>
              <v-icon>mdi-email</v-icon>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Phone</v-list-item-title>
              <v-list-item-subtitle>(651) 300-4252</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-avatar>
              <v-icon>mdi-phone</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
export default {
  name: 'ContactInformation',
  data() {
    return {
      myPhoto: require('@/assets/me.jpg'),
    }
  },
}
</script>
<style scoped>
.contact-card {
  max-width: 600px;
  margin: auto;
  padding: 16px;
}

.photo-column {
  text-align: center;
}

.photo {
  border-radius: 50%;
  max-width: 100%;
  width: 150px;
  height: 150px;
}

.info-column {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.v-list-item-title {
  font-weight: bold;
}

.v-list-item-subtitle a {
  color: inherit;
  text-decoration: none;
}

.v-list-item-subtitle a:hover {
  text-decoration: underline;
}
</style>
