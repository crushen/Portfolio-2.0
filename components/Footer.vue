<template>
  <footer>
    <div class="content">
      <p>&copy;2020 Charlotte Rushen. All rights reserved.</p>
      <p>See the code for my portfolio <a href="https://github.com/crushen/Portfolio-2.0" target="_blank">here!</a></p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      route: this.$route,
      slug: this.$route.params.slug
    }
  },
  watch: {
    slug(newSlug) {
      this.updateSlug();
    }
  },
  methods: {
    updateSlug() {
      this.slug = this.$route.params.slug;
    }
  }
}
</script>

<style scoped>
footer {
  padding: 20px 0;
  background: #2b2c31;
}

p, a {
  color: var(--grey);
  font-size: 14px;
}

@media screen and (min-width: 600px) {
  .footer {
    padding: 50px 0;
  }
}

@media screen and (min-width: 1100px) {

}
</style>
