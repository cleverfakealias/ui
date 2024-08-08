<template>
  <v-app>
    <!-- App Bar with Hamburger Menu -->
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title
        >{{ title }}
        <v-btn icon :href="githubLink" target="_blank">
          <v-icon>mdi-github</v-icon>
        </v-btn>
        <v-btn icon :href="linkedinLink" target="_blank">
          <v-icon>mdi-linkedin</v-icon>
        </v-btn>
        <ResumeDownload />
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <form action="https://duckduckgo.com/" method="get" target="_blank">
        <v-text-field
          name="q"
          label="Search"
          single-line
          hide-details
          append-icon="mdi-magnify"
        ></v-text-field>
      </form>
    </v-app-bar>

    <!-- Navigation Drawer -->
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer :absolute="fixed" app>
      <div class="footer-content">
        <span
          >&copy; {{ new Date().getFullYear() }} Ben Hickman and BJH Software.
          All rights reserved.</span
        >
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import ResumeDownload from '~/components/ResumeDownload.vue'
export default {
  components: {
    ResumeDownload,
  },
  data() {
    return {
      drawer: false,
      clipped: false,
      fixed: false,
      title: 'BJH Software',
      githubLink: 'https://github.benhickman.dev',
      linkedinLink: 'https://linkedin.benhickman.dev',
      items: [
        { title: 'Welcome', icon: 'mdi-home', to: '/' },
        { title: 'Résumé', icon: 'mdi-file', to: '/resume' },
        { title: 'Contact Me', icon: 'mdi-email', to: '/contact-me' },
        { title: 'Playground', icon: 'mdi-test-tube', to: '/playground' },
      ],
    }
  },
}
</script>

<style scoped>
.footer-content {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
}
</style>
