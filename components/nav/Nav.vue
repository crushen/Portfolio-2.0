<template>
  <div id="nav">
    <nav>
      <nuxt-link to="/" @click="toggleNav">Home</nuxt-link>
      <nuxt-link to="/work" @click="toggleNav">Work</nuxt-link>
      <nuxt-link to="/contact" @click="toggleNav">Contact</nuxt-link>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    toggleNav: { type: Function, required: true }
  }
}
</script>

<style scoped>
#nav {
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

a {
  font-size: 20px;
  line-height: 50px;
  color: var(--white);
}

.nuxt-link-exact-active {
  color: var(--black);
}
</style>