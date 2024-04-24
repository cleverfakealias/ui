<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>{{ name }}</h1>
        <p>{{ title }}</p>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <h2>Skills</h2>
        <v-list>
          <v-list-item v-for="(skill, index) in skills" :key="index">
            <v-list-item-content>
              {{ skill }}
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <h2>Experience</h2>
        <v-timeline>
          <v-timeline-item
            v-for="(job, index) in experience"
            :key="index"
            color="blue-grey"
          >
            <h3>{{ job.position }}</h3>
            <h4>{{ job.company }}</h4>
            <p>{{ job.description }}</p>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <h2>Education</h2>
        <v-timeline>
          <v-timeline-item
            v-for="(education, index) in education"
            :key="index"
            color="blue-grey"
          >
            <h3>{{ education.degree }}</h3>
            <h4>{{ education.school }}</h4>
            <p>{{ education.description }}</p>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      name: 'Benjamin Hickman',
      title: 'Software Engineer',
      skills: ['Python', 'Java', 'Typescript'],
      experience: [
        {
          position: 'Job Title 1',
          company: 'Company 1',
          description: 'Job Description 1',
        },
        // Add more jobs here
      ],
      education: [
        {
          degree: 'Degree 1',
          school: 'School 1',
          description: 'Education Description 1',
        },
        // Add more education here
      ],
    }
  },
}
</script>
