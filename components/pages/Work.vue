<template>
  <section>
    <section class="header-text">
      <h1 class="page-sub-title">Work.</h1>
      <h2 class="title page-title">Take a look at some of the projects I've been working on recently.</h2>

      <div class="page-text">
        <p>Right now I'm mainly working with Vue, Nuxt, HTML, CSS (SCSS) and vanilla JavaScript (ES6+).</p>
        <p>If you'd like to find out more about my work, please <nuxt-link to="/contact">get in touch</nuxt-link> - I'd love to hear from you! 👋🏻</p>
      </div>

      <img :src="arrow" class="arrow">
    </section>

    <section class="cards">
      <ul class="grid">
        <li 
          v-for="project in projects"
          :key="project.slug"
          class="card">
          <div class="overlay">
            <div class="text">
              <h3>{{ project.title }}</h3>

              <p>{{ project.subTitle }}</p>

              <ul class="project-links">
                <li>
                  <a :href="project.website" target="_blank">View the website</a>
                </li>
                <li>
                  <a :href="project.github" target="_blank">See the code</a>
                </li>
              </ul>
            </div>
          </div>

          <img :src="project.thumbnail.url">
        </li>
      </ul>
    </section>
  </section>
</template>

<script>
import { mapState } from 'vuex';
import arrow from '@/static/arrow-down.svg'

export default {
  data() {
    return {
      arrow
    }
  },
  computed: {
    ...mapState(['projects'])
  }
}
</script>

<style scoped>

.arrow {
  width: 20px;
}

.grid {
  border: 10px solid white;
  background: white;
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  grid-gap: 10px;
}

.card {
  height: 40vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--light-grey);
}

.card img {
  width: 50%;
  max-width: 180px;
  opacity: 1;
  transition: 0.4s;
}

.card:nth-of-type(3) img {
  width: 30%;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  opacity: 0;
  transition: 0.4s;
  background: #FFF;
}

.text {
  position: absolute;
  top: 45%;
  left: 50%;
  width: 80%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  transition: 0.4s;
}

.text h3 {
  margin-bottom: 16px;
  font-size: 18px;
  color: var(--black);
}

.text p {
  color: var(--grey);
  font-size: 16px;
}

.text a {
  color: var(--grey);
  font-size: 16px;
  margin-top: 10px;
}

.project-links {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.project-links li {
  margin-top: 10px;
}

.card:hover img {
  opacity: 0;
}

.card:hover .overlay {
  opacity: 1;
}

.card:hover .text {
  top: 50%;
}

@media screen and (min-width: 600px) {
  .arrow {
    margin-top: 28px;
  }

  .grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .card {
    height: 300px;
  }

  .card:nth-of-type(5) {
    grid-column: 1 / 3;
  }
}

@media screen and (min-width: 1200px) {
  .arrow {
    margin-top: 32px;
  }

  .grid {
    grid-template-columns: repeat(6, 1fr);
  }

  .card {
    height: 400px;
  }

  .card:nth-of-type(1) {
    grid-column: 1 / 3;
  }

  .card:nth-of-type(2) {
    grid-column: 3 / 5;
  }

  .card:nth-of-type(3) {
    grid-column: 5 / 7;
  }

  .card:nth-of-type(4) {
    grid-column: 1 / 4;
  }

  .card:nth-of-type(5) {
    grid-column: 4 / 7;
  }
}

</style>
