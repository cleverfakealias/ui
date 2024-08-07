<template>
  <div class="summary">
    <h2>About me</h2>
    <p class="paragraph">{{ paragraph1 }}</p>
    <p class="paragraph">{{ paragraph2 }}</p>
    <p class="paragraph">{{ paragraph3 }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      paragraph1: `
Growing up, technology was always part of my life. From playing Nintendo as a young child to taking apart and reassembling my family's Gateway computer, my curiosity for how things worked was insatiable.
      `,
      paragraph2: `
I started my career in technical support and eventually became a Supervisor at a dot-com startup, where I immersed myself in web development within the Microsoft ecosystem. Now, I'm working on a significant project involving numerous services and UIs, integrating with different team APIs and developing closed-source applications using languages such as Java, Python, and Typescript.
      `,
      paragraph3: `
Over the years, I've become proficient in Python, Typescript/Javascript, and Java, and I thrive on solving complex problems. I'm constantly learning and adapting to new technologies, and I'm excited about the possibility of transitioning to an Architect role in the future, leveraging my skills in AWS and various programming languages.
      `,
    }
  },
}
</script>

<style scoped>
.paragraph {
  white-space: pre-line;
}
</style>
