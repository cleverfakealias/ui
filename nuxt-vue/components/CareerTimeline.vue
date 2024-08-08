<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h2>Career Timeline</h2>
      </v-col>
    </v-row>
    <br />
    <v-container>
      <!-- Interactive Timeline -->
      <v-timeline>
        <v-timeline-item
          v-for="(item, index) in timelineItems"
          :key="index"
          :color="item.color"
          :icon="item.icon"
          :timestamp="item.timestamp"
        >
          <v-card>
            <v-card-title>{{ item.title }}</v-card-title>
            <v-card-subtitle>{{ item.subtitle }}</v-card-subtitle>
            <v-card-text>{{ item.timestamp }}</v-card-text>
            <v-card-text>{{ item.description }}</v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: 'CareerTimeline',
  data() {
    return {
      timelineItems: [
        {
          title: 'Software Engineer',
          subtitle: 'SPS Commerce',
          description:
            'Seasoned Software Developer working on enterprise Saas applications',
          timestamp: '2017-present',
          color: 'primary',
          icon: 'mdi-briefcase',
        },
        {
          title: 'Support Supervisor',
          subtitle: 'WhereToLive.com',
          description:
            'Managed technical support team for web developer and email host for the Real Estate industry',
          timestamp: '2012-2017',
          color: 'primary',
          icon: 'mdi-briefcase',
        },
        {
          title: 'Technical Support Representative',
          subtitle: 'Microboards Technology',
          description:
            'Provide technical support for CD and DVD replication and printing devices',
          timestamp: '2007-2012',
          color: 'primary',
          icon: 'mdi-briefcase',
        },
      ],
    }
  },
}
</script>

<style scoped>
.playground-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #f0f8ff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.playground-header {
  text-align: center;
  margin-bottom: 20px;
}

.playground-header h1 {
  font-size: 2em;
  color: #333;
}

.playground-main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.playground-textarea {
  width: 100%;
  height: 100px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
}

.playground-button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.playground-button:hover {
  background-color: #0056b3;
}

.playground-display {
  margin-top: 20px;
  padding: 10px;
  background-color: #e9ecef;
  border-radius: 4px;
  width: 100%;
  text-align: center;
}

.playground-display p {
  font-size: 18px;
  color: #333;
}
</style>
