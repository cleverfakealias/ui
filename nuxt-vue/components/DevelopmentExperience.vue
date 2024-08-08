<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h2>Development Experience</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="4"
        v-for="(experience, index) in programmingExperiences"
        :key="index"
      >
        <v-card>
          <v-card-title class="title-container">{{
            experience.title
          }}</v-card-title>
          <v-card-text>
            <p>{{ experience.description }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      programmingExperiences: [
        {
          title: 'Full Stack Development',
          description:
            'With over 7 years of experience as a software engineer, I have worked on everything from Python scripting to building full-fledged enterprise applications used by thousands of people. I am a full-stack developer, proficient in both front-end and back-end development.',
        },
        {
          title: 'Front-End Technologies',
          description:
            'I have extensive experience with JavaScript/TypeScript, React.js, Next.js, Vite, PNPM, and NPM. I also have experience with unit testing (Jest) and behavioral testing (Cypress), and use Storybook as a tool for building components.',
        },
        {
          title: 'Back-End Technologies',
          description:
            'I am proficient in Java and Python. I have used Maven, Dropwizard, and Guice extensively in Java. I have experience with unit testing and integration testing in both Python and Java.',
        },
        {
          title: 'Databases',
          description:
            'I have worked extensively with Oracle, Postgres, and Microsoft SQL Server for relational databases, and DynamoDB for non-relational databases.',
        },
        {
          title: 'CI/CD',
          description:
            'I have experience with Azure Pipelines, Jenkins, and Drone for continuous integration and continuous deployment.',
        },
        {
          title: 'Other Technologies and Methodologies',
          description:
            'I have experience with Docker, Kubernetes, microservices architecture, event-driven architecture, and Agile/Scrum methodologies.',
        },
      ],
    }
  },
}
</script>
<style scoped>
.title-container {
  word-break: normal;
  white-space: normal;
}
</style>
