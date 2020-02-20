<template>
  <footer id="footer">
    <div class="content">
      <p class="logo">charlotte rushen.</p>
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

<style scoped>
footer {
  padding: 80px 0 40px 0;
}

.page-links {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 24px;
}

a, p {
  color: var(--grey);
  line-height: 30px;
}

p {
  font-size: 12px;
  margin-top: 24px;
}

.logo {
  font-size: 20px;
  font-weight: 800;
}

@media screen and (min-width: 600px) {
  footer {
    padding: 100px 0 50px 0;
  }

  .logo {
    font-size: 22px;
  }
}

@media screen and (min-width: 1100px) {
  .page-links {
    margin-top: 50px;
  }
}
</style>