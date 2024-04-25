<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h2>AWS Experience</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="4"
        v-for="(experience, index) in awsExperiences"
        :key="index"
      >
        <v-card>
          <v-card-title>{{ experience.title }}</v-card-title>
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
      awsExperiences: [
        {
          title: 'General AWS Expertise',
          description:
            'With over 5 years of hands-on experience working with Amazon Web Services (AWS), I have a comprehensive understanding of various AWS services and solutions. From setting up and managing ECS containers to configuring and optimizing cloud databases like RDS, my expertise covers a wide range of AWS offerings.',
        },
        {
          title: 'Containerization and Orchestration',
          description:
            'I specialize in containerization and orchestration solutions on AWS, including ECS (Elastic Container Service) and Kubernetes. I have successfully designed and implemented containerized applications, leveraging the scalability and flexibility offered by these platforms to meet the dynamic demands of modern cloud environments.',
        },
        {
          title: 'Real-time Data Processing',
          description:
            'I have extensive experience working with AWS services for real-time data processing and streaming analytics. This includes setting up and managing data streams with Kinesis and Kafka, as well as designing serverless architectures with AWS Lambda to process and analyze streaming data in near real-time.',
        },
        {
          title: 'Cloud Infrastructure Management',
          description:
            "As a seasoned AWS practitioner, I excel in architecting and managing cloud infrastructure on AWS. Whether it's designing fault-tolerant and scalable architectures using services like Auto Scaling and Elastic Load Balancing, or optimizing resource utilization and cost efficiency through AWS Cost Explorer and Budgets, I ensure that cloud environments are robust, reliable, and cost-effective.",
        },
        {
          title: 'Data Storage and Management',
          description:
            'My expertise extends to cloud-based data storage and management solutions on AWS, including relational and non-relational databases, and object storage with S3. I have implemented highly available and durable data storage architectures, leveraging AWS services to meet the performance, scalability, and security requirements of diverse applications.',
        },
        {
          title: 'Security and Compliance',
          description:
            'I prioritize security and compliance in all aspects of AWS deployment and management. I have implemented industry best practices for securing AWS environments, including identity and access management (IAM), network security with VPCs and security groups, encryption at rest and in transit, and continuous monitoring and auditing using servies such as SumoLogic and LogicMonitor.',
        },
        {
          title: 'Automation and Infrastructure as Code',
          description:
            'I am proficient in automating AWS infrastructure provisioning, configuration, and management using Infrastructure as Code (IaC) tools such as AWS CloudFormation. By codifying infrastructure deployments, I ensure consistency, repeatability, and scalability, while enabling rapid iteration and deployment of cloud resources.',
        },
      ],
    }
  },
}
</script>
