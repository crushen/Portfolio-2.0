<template>
  <div class="header-text">
    <h1 class="page-sub-title">Work</h1>
    <h2 class="title page-title">Take a look at some of the projects I've been working on recently.</h2>

    <nuxt-link 
      to="/contact" 
      tag="button"
      class="page-link">
      Get in touch!
    </nuxt-link>

    <!-- <section class="cards">
      <div 
        v-for="project in projects"
        :key="project.slug"
        class="square">
      </div> 
    </section> -->

  </div>
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
  position: relative;
}

.container {
  position: absolute;
  right: 0;
  bottom: -30vh;
}

.cards {
  margin-top: 100px;
}

.square {
  width: 100%;
  height: 200px;
  background: var(--off-white);
  margin-top: 32px;
  border-radius: 4px;

  -webkit-box-shadow: 2px 2px 4px 0px rgba(0,0,0,0.2);
  -moz-box-shadow: 2px 2px 4px 0px rgba(0,0,0,0.2);
  box-shadow: 2px 2px 4px 0px rgba(0,0,0,0.2);
}
</style>
