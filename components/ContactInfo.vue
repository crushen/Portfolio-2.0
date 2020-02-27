<template>
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
</template>

<style scoped>
.contact-container {
  background: var(--off-white);
  color: var(--dark-grey);
}

.social {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

h3 {
  color: var(--black);
  margin: 24px 0 6px 0;
}

a {
  color: var(--dark-grey);
  line-height: 30px;
}

@media screen and (min-width: 1100px) {
  h2 {
    margin-bottom: 50px;
  }
}
</style>
