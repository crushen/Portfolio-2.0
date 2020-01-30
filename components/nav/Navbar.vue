<template>
  <div>
    <header>
      <nuxt-link to="/">
        <h1>logo.</h1>
      </nuxt-link>
      <button
        @click="toggleNav"
        class="nav-button">
        <div class="nav-line"></div>
        <div class="nav-line"></div>
        <div class="nav-line"></div>
      </button>
    </header>

    <!-- Make this not it's own component -->
    <my-nav 
      v-if="active" 
      v-on-clickaway="closeNav" 
      :toggleNav="toggleNav" />
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';
import myNav from '@/components/nav/Nav'

export default {
  mixins: [ clickaway ],
  components: { myNav },
  data() {
    return {
      active: false
    }
  },
  methods: {
    toggleNav() {
      this.active = !this.active;
      console.log(this.active);
    },
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

@media screen and (min-width: 600px) {
  header {
    padding: 16px 7.5%;
  }
}
</style>
