<template>
  <v-container fluid>
    <v-card class="contact-card" outlined>
      <v-card-title class="d-flex justify-space-between align-center">
        <v-col cols="12" sm="6" class="d-flex align-center">
          <v-icon class="responsive-icon mr-2">mdi-account-box</v-icon>
          <span class="responsive-text font-weight-bold">Ben Hickman</span>
        </v-col>
        <v-col cols="12" sm="6" class="d-flex justify-end align-center">
          <span class="responsive-text">Software Engineer</span>
          <v-icon class="responsive-icon ml-2">mdi-laptop</v-icon>
        </v-col>
      </v-card-title>
      <v-divider></v-divider>
      <v-row class="align-center">
        <v-col cols="12" sm="6" class="d-flex justify-center photo-column">
          <v-avatar size="150">
            <img :src="myPhoto" alt="My Photo" class="avatar-img" />
          </v-avatar>
        </v-col>
        <v-col cols="12" sm="6" class="info-column">
          <v-list dense>
            <v-list-item>
              <v-list-item-avatar>
                <v-icon class="responsive-icon">mdi-earth</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="responsive-text"
                  >Location</v-list-item-title
                >
                <v-list-item-subtitle class="responsive-text"
                  >Minnesota</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-avatar>
                <v-icon class="responsive-icon">mdi-email</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="responsive-text"
                  >Email</v-list-item-title
                >
                <v-list-item-subtitle class="responsive-text">
                  <a href="mailto:me@benhickman.dev">me@benhickman.dev</a>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-avatar>
                <v-icon class="responsive-icon">mdi-phone</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="responsive-text"
                  >Phone</v-list-item-title
                >
                <v-list-item-subtitle class="responsive-text"
                  >(651) 300-4252</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
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
  max-width: 800px;
  margin: 0 auto;
}

.responsive-icon {
  font-size: 24px;
}

.responsive-text {
  font-size: 18px;
}

.photo-column {
  text-align: center;
}

.avatar-img {
  border-radius: 50%;
  width: 100%;
  height: auto;
  object-fit: cover;
}
</style>
