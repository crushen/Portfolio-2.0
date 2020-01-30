<template>
  <footer id="footer">
    <div class="content">
      <h1>logo.</h1>
        <div class="footer-content">
          <div class="page-links">
            <nuxt-link to="/">Home</nuxt-link>
            <nuxt-link to="/work">Work</nuxt-link>
            <nuxt-link to="/contact">Contact</nuxt-link>
          </div>
          <p>&copy;2020 Charlotte Rushen. All rights reserved.</p>
        </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style scoped>
footer {
  background: var(--off-white);
  color: var(--dark-grey);
  padding: 32px 0;
}

.page-links {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 16px;
}

a, p {
  color: var(--grey);
  font-size: 14px;
  line-height: 28px;
}

p {
  font-size: 12px;
  margin-top: 32px;
}
</style>