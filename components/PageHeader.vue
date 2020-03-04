<template>
  <header>
    <div class="content">
      <transition name="header" mode="out-in">
        <div v-if="page === '/'" key="home">
          <h1 class="page-sub-title">Frontend Developer jhj</h1>
          <h2 class="title page-title">Website and web app development, helping brands perfect their online presence.</h2>
        </div>

        <div v-else-if="page === '/work'" key="work">
          <h1 class="page-sub-title">Work</h1>
          <h2 class="title page-title">Take a look at some of projects I've been working on recently.</h2>
        </div>

        <div v-else-if="page === `/work/${project.slug}`" key="project">
          <h1 class="page-sub-title">{{ project.title }}</h1>
          <h2 class="title page-title">{{ project.subTitle }}</h2>
        </div>
      </transition>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      slug: this.$route.params.slug
    }
  },
  computed: {
    ...mapState(['page', 'data']),
    project() {
      return this.data.find(item => item.slug === this.slug);
    }
    // Maybe watch route and then update slug on route change? Need to change footer too
  }
}
</script>

<style scoped>
header {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.header-enter-active,
.header-leave-active {
  transition: 0.7s;
  transition-timing-function: cubic-bezier(0,1.15,1,.99);
}

.header-enter,
.header-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

@media screen and (min-width: 600px) {
  .header-enter,
  .header-leave-to {
    transform: translateX(50px);
  }
}
</style>
