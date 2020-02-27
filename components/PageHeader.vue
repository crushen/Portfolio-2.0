<template>
  <header :class="{
    'landing' : (page === 'index'),
    'work' : (page === 'Work')}">

    <transition-group name="header" tag="div">
      <div 
        key="home"
        v-if="page === 'index'"
        class="content">
        <h1 class="page-sub-title">Frontend Developer</h1>
        <h2 class="title page-title">Website and web app development, helping brands perfect their online presence.</h2>
      </div>

      <div 
        key="work"
        v-else-if="page === 'Work'"
        class="content">
        <div class="work-title">
          <h1 class="page-sub-title">Work</h1>
          <h2 class="title page-title">Take a look at some of projects I've been working on recently.</h2>
        </div>
      </div>
    </transition-group>
  </header>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: mapState(['page'])
}
</script>

<style scoped>
.landing {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.work-title {
  height: 70vh;
  max-width: 1180px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-top: 100px;
}

/* .header-move {
  transition: all 0.4s ease;
} */

.header-enter-active,
.header-leave-active {
  transition: 0.4s;
}

.header-enter,
.header-leave-to {
  transform: scale(1.1) translateZ(0);
  opacity: 0;
}
</style>
