<template>
  <v-container>
    <!-- Header section -->
    <v-row>
      <v-col>
        <h1>Thanks for stopping by!</h1>
        <p>
          As an accomplished software engineer with over a decade of experience
          in the technology industry, I bring a versatile skill set and a
          passion for innovation to every project I undertake. Currently serving
          as a Software Engineer at an enterprise SaaS company, I excel as a
          full stack developer proficient in Java, Python, and Typescript.
        </p>
      </v-col>
    </v-row>

    <!-- Skills section -->
    <v-row>
      <v-col>
        <h2>Skills Snapshot</h2>
        <v-row>
          <v-col v-for="skill in skills" :key="skill">
            <v-chip color="primary">{{ skill }}</v-chip>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- Portfolio highlights -->
    <v-row>
      <v-col>
        <h2>Portfolio Highlights</h2>
        <p>
          Explore my portfolio to see examples of my work, and feel free to
          reach out to discuss how I can contribute to your team's success.
        </p>
        <DevelopmentComponent />
        <AwsComponent />
      </v-col>
    </v-row>

    <!-- Collaborative approach -->
    <v-row>
      <v-col>
        <h2>Collaborative Approach</h2>
        <p>
          Equipped with strong communication skills and a keen eye for detail, I
          thrive in collaborative environments. My experience extends beyond
          technical proficiency to encompass project management and effective
          team coordination, ensuring successful project delivery.
        </p>
      </v-col>
    </v-row>

    <!-- Contact/Connect section -->
    <v-row>
      <v-col>
        <h2>Ready to Collaborate?</h2>
        <p>
          Whether you're seeking a seasoned developer for your next project or
          exploring opportunities for collaboration, I'm excited to connect.
        </p>
        <p>
          Thank you for visiting, and I look forward to connecting with you
          soon.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AwsComponent from '~/components/AwsExperience.vue'
import DevelopmentComponent from '~/components/DevelopmentExperience.vue'

export default {
  components: {
    AwsComponent,
    DevelopmentComponent,
  },
  data() {
    return {
      name: 'Benjamin Hickman',
      skills: [
        'JavaScript',
        'Typescript',
        'React.js',
        'Java',
        'Python',
        'AWS',
        'Azure DevOps',
        'Docker',
        'Linux',
        'Oracle SQL',
        'PostGRES SQL',
        'Microsoft SQL',
        'Jenkins',
        'GitHub',
        'JIRA',
        'Confluence',
        'CI/CD',
        'Azure Pipelines',
      ],
      portfolioHighlights: [
        {
          title: 'Cloud Architecture',
          description:
            'Leveraging AWS services for scalable and reliable cloud solutions.',
        },
        {
          title: 'Frontend Development',
          description:
            'Crafting engaging user interfaces with React.js and Vue.js.',
        },
        {
          title: 'Backend Development',
          description:
            'Building robust server-side applications with Java and Python.',
        },
        {
          title: 'Database Management',
          description:
            'Designing and optimizing databases using various SQL platforms.',
        },
        {
          title: 'DevOps Practices',
          description:
            'Implementing automated build, deploy, and promote pipelines with Docker and Azure Pipelines.',
        },
      ],
    }
  },
}
</script>
