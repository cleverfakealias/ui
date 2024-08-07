<template>
  <v-app>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-btn icon :href="githubLink" target="_blank">
        <v-icon>mdi-github</v-icon>
      </v-btn>
      <v-btn icon :href="linkedinLink" target="_blank">
        <v-icon>mdi-linkedin</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar flat>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn v-for="item in items" :key="item.title" :to="item.to" text>
            <v-icon left>{{ item.icon }}</v-icon>
            {{ item.title }}
          </v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
      </v-toolbar>
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
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-home-variant',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-file-document',
          title: 'Resume',
          to: '/resume',
        },
        {
          icon: 'mdi-email',
          title: 'Contact Me',
          to: '/contact-me',
        },
        // {
        //   icon: 'mdi-weather-sunny',
        //   title: 'Weather',
        //   to: '/weather',
        // },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Ben Hickman',
      githubLink: 'https://github.com/cleverfakealias',
      linkedinLink: 'https://www.linkedin.com/in/ben-hickman-02978819b/',
    }
  },
}
</script>
