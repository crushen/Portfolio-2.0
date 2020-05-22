<template>
  <section>
    <section class="header-text">
      <h1 class="page-sub-title">Work</h1>
      <h2 class="title page-title">Take a look at some of the projects I've been working on recently.</h2>

      <div class="page-text">
        <p>On a typical day you'll find me crafting websites and user interfaces, helping brands perfect their online presence.</p>
        <p>If you'd like to find out more about me, please <nuxt-link to="/contact">get in touch</nuxt-link> - I'd love to hear from you! 👋🏻</p>
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
  opacity: 0.8;
}

.grid {
  border: 4px solid white;
  background: white;
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  grid-gap: 4px;
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
  width: 40%;
  opacity: 1;
  transition: 0.4s;
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
  top: 35%;
  left: 50%;
  width: 80%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  transition: 0.4s;
}

.text h3 {
  margin-bottom: 16px;
  color: var(--black);
}

.text p {
  color: var(--grey);
}

.card:hover img {
  opacity: 0;
}

.card:hover .overlay {
  opacity: 1;
}

.card:hover .text {
  top: 30%;
}

</style>
