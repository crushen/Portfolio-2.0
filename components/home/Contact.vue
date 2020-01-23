<template>
  <section id="contact" class="section-padding">
    <div class="content">
      <h2 class="title">Contact</h2>
        <div class="contact-container">
            <div class="contact">
              <h3 class="sub-title">General enquiries</h3>
              <a href="mailto:charlotterushen@hotmail.com">charlotterushen@hotmail.com</a>
            </div>
            <div class="contact social">
              <h3 class="sub-title">Follow me</h3>
              <a href="https://github.com/crushen">GitHub</a>
              <a href="https://codepen.io/charlotterushen/">Codepen</a>
              <a href="https://twitter.com/charlotterushen">Twitter</a>
              <a href="https://www.linkedin.com/in/charlotte-rushen/">LinkedIn</a>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style scoped>
.social {
  display: flex;
  flex-direction: column;
  margin-top: 32px;
}

h3 {
  font-weight: normal;
}

a {
  line-height: 28px;
}
</style>