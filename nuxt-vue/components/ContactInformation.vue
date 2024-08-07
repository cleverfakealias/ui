<template>
    <div class="contact-information">
      <div class="location">
        <v-icon>mdi-earth</v-icon>
        <span>Minneapolis, MN</span>
      </div>
      <div class="email">
        <v-icon>mdi-email</v-icon>
        <a href="mailto:me@benhickman.dev">me@benhickman.dev</a>
      </div>
      <div class="phone">
        <v-icon>mdi-phone</v-icon>
        <span>(651) 300-4252</span>
      </div>
    </div>
</template>
  
  <script>
  export default {
    name: 'ContactInformation'
  }
  </script>
  
  <style scoped>
  .contact-information {
    display: flex;
    flex-direction: column;
    align-items: start;
  }
  
  .location, .email, .phone {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  
  i {
    margin-right: 8px;
  }
  </style>