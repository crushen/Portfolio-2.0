<template>
  <div>
    <header>
      <div class="nav-bar">
        <nuxt-link to="/">
          <p class="logo">charlotte rushen.</p>
        </nuxt-link>
        <button
          @click="openNav"
          class="nav-button">
          <div class="nav-line"></div>
          <div class="nav-line"></div>
          <div class="nav-line"></div>
        </button>
      </div>
    </header>

    <transition 
      enter-active-class="animated slideInRight faster" 
      leave-active-class="animated slideOutRight faster">
      <div 
        v-if="active" 
        v-on-clickaway="closeNav"
        class="nav-container">
        <nav>
          <nuxt-link to="/" @click.native="closeNav">Home</nuxt-link>
          <nuxt-link to="/work" @click.native="closeNav">Work</nuxt-link>
          <nuxt-link to="/contact" @click.native="closeNav">Contact</nuxt-link>
        </nav>
      </div>
    </transition>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';

export default {
  mixins: [ clickaway ],
  data() {
    return {
      active: false
    }
  },
  methods: {
    openNav() {
      this.active = true;
      //document.querySelector('.nav-container').style.right = 0;
    },
    closeNav() {
      this.active = false;
      //document.querySelector('.nav-container').style.right = '-100%';
    }
  }
}
</script>

<style scoped>
header {
  position: fixed;
  width: 100%;
  padding: 10px 5%;
  background: var(--black);
  color: var(--white);
  z-index: 10;
}

.nav-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1400px;
  margin: auto;
}

.nav-button {
  background: none;
  border: none;
  height: 18px;
  width: 25px;
  cursor: pointer;
}

.nav-line {
  width: 100%;
  height: 3px;
  background: var(--white);
}

.nav-line:not(:last-of-type) {
  margin-bottom: 4px;
}

a {
  color: var(--white);
}

/* RIGHT NAV DRAWER */

.nav-container {
  height: 100vh;
  width: 75%;
  max-width: 400px;
  background: #81d4fa;
  position: fixed;
  top: 0;
  right: 0;
  transition: 0.5s;
  z-index: 20;
}

nav {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 100px 0 0 32px;
}

nav a {
  font-size: 20px;
  line-height: 50px;
}

nav .nuxt-link-exact-active {
  color: var(--black);
}

/* TABLET + */

@media screen and (min-width: 600px) {
  header {
    padding: 16px 7.5%;
  }
}
</style>
