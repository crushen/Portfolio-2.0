<template>
  <section id="skills" class="section-padding">
    <div class="content">
      <div class="card" v-for="card in skills" :key="card.title">
        <h2>{{ card.title }}</h2>
        <p v-html="card.text"></p>
        <div class="line"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        { 
          title: 'Frontend Development',
          text: 'Using HTML, CSS (Bootstrap and Materialize), JavaScript (ES6+) and Git with VS Code, GraphQL and Vue/Nuxt, in order to bring creative designs to life.',
          img: ''
        },
        { 
          title: 'Content Managment',
          text: 'Making sure that your content is easy to access and update via a Headless CMS, which will then display seamlessly on your bespoke frontend.',
          img: ''
        },
        { 
          title: 'Responsive Design',
          text: "The majority of internet users access the web via a mobile device, so it's important that websites are created using responsive mobile-first design principles.",
          img: ''
        },
        { 
          title: 'Accessibility',
          text: 'Everyone deserves to be able to access content on the internet, and this can be acheived by sticking to <a href="https://www.w3.org/WAI/standards-guidelines/wcag/">The Web Content Accessibility Guidelines (WCAG).</a>',
          img: ''
        }
      ]
    }
  }
}
</script>

<style scoped>
#skills {
  background: var(--black);
  margin-top: 20px;
}

.card {
  width: 80%;
  margin: auto;
}

.card:not(:first-of-type) {
  padding-top: 50px;
}

h2 {
  color: var(--white);
  font-size: 22px;
  margin-bottom: 16px;
}

p {
  color: var(--light-grey);
  font-size: 14px;
}

.line {
  width: 100%;
  height: 1px;
  background: var(--dark-grey);
  margin-top: 50px;
}
</style>