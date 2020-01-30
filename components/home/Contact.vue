<template>
  <section id="contact" class="section-padding">
    <div class="content">
      <h2 class="title">Contact</h2>
        <div class="contact-container">
            <div class="contact">
              <h3>General enquiries</h3>
              <a href="mailto:charlotterushen@hotmail.com">charlotterushen@hotmail.com</a>
            </div>
            <div class="contact social">
              <h3>Follow me</h3>
              <a href="https://github.com/crushen" target="_blank">GitHub</a>
              <a href="https://codepen.io/charlotterushen/" target="_blank">Codepen</a>
              <a href="https://twitter.com/charlotterushen" target="_blank">Twitter</a>
              <a href="https://www.linkedin.com/in/charlotte-rushen/" target="_blank">LinkedIn</a>
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
#contact {
  background: var(--off-white);
  color: var(--dark-grey);
}

h2 {
  color: var(--black);
  margin-bottom: 8px;
}

.social {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 16px;
}

h3 {
  color: var(--black);
}

a {
  color: var(--dark-grey);
  line-height: 28px;
}
</style>