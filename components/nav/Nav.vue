<template>
  <div>
    <div class="nav-bar-container"
      :class="{ 'with-background': lastScrollPosition > 0 }"
      :style="nav">
      <div class="nav-bar">
        <nuxt-link to="/">
          <p class="logo">charlotte rushen.</p>
        </nuxt-link>
        <button
          v-if="innerWidth < 1000"
          @click="openNav"
          class="nav-button">
          <div class="nav-line"></div>
          <div class="nav-line"></div>
          <div class="nav-line"></div>
        </button>
        <div v-else>
          <nav>
            <nuxt-link to="/" exact>Home</nuxt-link>
            <nuxt-link to="/work">Work</nuxt-link>
            <nuxt-link to="/contact">Contact</nuxt-link>
          </nav>
        </div>
      </div>
    </div>

    <transition 
      enter-active-class="animated slideInRight faster" 
      leave-active-class="animated slideOutRight faster">
      <div 
        v-if="active" 
        v-on-clickaway="closeNav"
        class="nav-container">
        <nav>
          <nuxt-link 
            to="/" 
            exact 
            @click.native="closeNav"
            class="animated fadeInRight">
            Home
          </nuxt-link>
          <nuxt-link 
            to="/work" 
            @click.native="closeNav"
            class="animated fadeInRight">
            Work
          </nuxt-link>
          <nuxt-link 
            to="/contact" 
            @click.native="closeNav"
            class="animated fadeInRight">
            Contact
          </nuxt-link>
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
      nav: {
        opacity: 0,
        transform: 'translateY(-50px)'
      },
      innerWidth: null,
      active: false,
      showNavbar: true,
      lastScrollPosition: 0
    }
  },
  methods: {
    openNav() {
      this.active = true;
    },
    closeNav() {
      this.active = false;
    },
    onScroll () {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition < 0) {
        return;
      }
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 10) {
        return;
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition;
      this.lastScrollPosition = currentScrollPosition;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
    window.addEventListener('resize', () => {
      this.innerWidth = window.innerWidth;
    });
    this.innerWidth = window.innerWidth;
    setTimeout(() => {
      this.nav.opacity = 1;
      this.nav.transform = 'translateY(0)';
    }, 2500)
  }
}
</script>

<style scoped>
.logo {
  position: relative;
  z-index: 5;
}

.nav-bar-container {
  position: fixed;
  width: 100%;
  padding: 10px 5%;
  background: transparent;
  color: var(--white);
  z-index: 10;
  transition: 0.6s;
}

.nav-bar-container.with-background {
  background: var(--black);
}

.nav-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1300px;
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
  font-weight: 700;
  animation-duration: 0.4s;
  animation-timing-function: ease-out;
}

nav a:nth-of-type(1) {
  animation-delay: 0.2s;
}
nav a:nth-of-type(2) {
  animation-delay: 0.3s;
}
nav a:nth-of-type(3) {
  animation-delay: 0.4s;
}

nav .nuxt-link-active {
  color: var(--black);
}

/* TABLET + */

@media screen and (min-width: 1000px){
  nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0;
  }

  nav a {
    margin-left: 32px;
    font-size: 16px;
    color: var(--light-grey);
  }

  nav .nuxt-link-active {
    color: var(--white);
  }
}
</style>
