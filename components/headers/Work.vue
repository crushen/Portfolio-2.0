<template>
  <section>
    <section class="header-text">
      <h1 class="page-sub-title">Work</h1>
      <h2 class="title page-title">Take a look at some of the projects I've been working on recently.</h2>

      <!-- <nuxt-link 
        to="/contact" 
        tag="button"
        class="page-link">
        Get in touch!
      </nuxt-link> -->

    </section>

    <section class="cards">
      <ul class="grid">
        <li 
          v-for="project in projects"
          :key="project.slug"
          class="square">
          <h3>{{ project.title }}</h3>
        </li>
      </ul>
    </section>
  </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapState(['projects'])
  }
}
</script>

<style scoped>

.header-text {
  margin-bottom: 30vh;
}

.grid {
  /* border-top: 4px solid white;
  border-bottom: 4px solid white; */
  border: 4px solid white;
  background: white;
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  min-height: 100vh;
  grid-gap: 4px;
}

.square {
  background: var(--light-grey);
}
</style>
