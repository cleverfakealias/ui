<template>
  <button @click="downloadPDF">View Resume (PDF)</button>
</template>

<script>
const RESUME_URL =
  'https://drive.google.com/file/d/17Kge7VTv3t3lX8vpZQSrdMXCEXSVrYdQ/view?usp=sharing'
const RESUME_FILENAME = 'Ben Hickman Software Engineer CV 2024.pdf'

export default {
  name: 'DownloadButton',
  methods: {
    downloadPDF() {
      this.createAndClickLink(RESUME_URL, RESUME_FILENAME)
    },
    createAndClickLink(url, filename) {
      try {
        // Create a link element
        const link = document.createElement('a')
        link.target = '_blank'
        link.href = url
        link.download = filename

        // Append the link to the body
        document.body.appendChild(link)

        // Programmatically click the link to trigger the download
        link.click()

        // Remove the link from the document
        document.body.removeChild(link)
      } catch (error) {
        console.error('Error downloading the PDF:', error)
      }
    },
  },
}
</script>

<style scoped>
button {
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #1976d2;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}
</style>
