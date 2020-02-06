<template>
  <div>
    <header>
      <nuxt-link to="/">
        <h1>logo.</h1>
      </nuxt-link>
      <button
        @click="active = true"
        class="nav-button">
        <div class="nav-line"></div>
        <div class="nav-line"></div>
        <div class="nav-line"></div>
      </button>
    </header>

    <div 
      id="nav-container"
      v-if="active" 
      v-on-clickaway="closeNav">
      <nav>
        <nuxt-link to="/" @click.native="closeNav">Home</nuxt-link>
        <nuxt-link to="/work" @click.native="closeNav">Work</nuxt-link>
        <nuxt-link to="/contact" @click.native="closeNav">Contact</nuxt-link>
      </nav>
    </div>
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
    closeNav() {
      this.active = false;
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
  display: flex;
  align-items: center;
  justify-content: space-between;
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

#nav-container {
  height: 100vh;
  width: 75%;
  background: #81d4fa;
  position: absolute;
  top: 0;
  right: 0;

}

nav {
  display: flex;
  flex-direction: column;
  margin: 100px 0 0 32px;
}

nav a {
  font-size: 20px;
  line-height: 50px;
}

nav .nuxt-link-exact-active {
  color: var(--black);
}

@media screen and (min-width: 600px) {
  header {
    padding: 16px 7.5%;
  }
}
</style>
