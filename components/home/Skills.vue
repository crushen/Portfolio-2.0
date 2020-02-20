<template>
  <section id="skills" class="section-padding">
    <div class="content">
      <div class="card">
        <h2>Frontend Development</h2>
        <p>Using HTML, CSS (Bootstrap and Materialize), JavaScript (ES6+) and Git with VS Code, GraphQL and Vue/Nuxt, in order to bring creative designs to life.</p>
        <div class="line"></div>
      </div>

      <div class="card">
        <h2>Content Management</h2>
        <p>Making sure that your content is easy to access and update via a Headless CMS, which will then display seamlessly on your bespoke frontend.</p>
        <div class="line"></div>
      </div>

      <div class="card">
        <h2>Responsive Design</h2>
        <p>The majority of internet users access the web via a mobile device, so it's important that websites are created using responsive mobile-first design principles.</p>
        <div class="line"></div>
      </div>

      <div class="card">
        <h2>Accessibility</h2>
        <p>Everyone deserves to be able to access content on the internet, and this can be achieved by sticking to <a href="https://www.w3.org/WAI/standards-guidelines/wcag/">The Web Content Accessibility Guidelines (WCAG).</a></p>
      </div>
    </div>
  </section>
</template>

<style scoped>
#skills {
  background: var(--off-white);
  color: var(--dark-grey);
}

.card {
  width: 80%;
  margin: 0 auto;
}

.card:not(:first-of-type) {
  padding-top: 50px;
}

h2 {
  color: var(--black);
  font-size: 20px;
  margin-bottom: 16px;
}

.line {
  width: 100%;
  height: 1px;
  background: var(--light-grey);
  margin-top: 50px;
}

a {
  font-weight: bold;
}

@media screen and (min-width: 600px) {
  .content {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
  }

  .card {
    width: 40%;
  }

  .card:not(:first-of-type) {
    padding-top: 0;
  }

  .card:nth-of-type(1), .card:nth-of-type(2) {
    margin-bottom: 50px;
  }

  .line {
    display: none;
  }
}

@media screen and (min-width: 1100px) {
   .card {
    width: 20%;
    max-width: 217px;
  }

  .card:nth-of-type(1), .card:nth-of-type(2) {
    margin-bottom: 0;
  }
}
</style>