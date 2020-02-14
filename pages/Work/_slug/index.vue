<template>
  <section :id="project.slug">
    <div class="content">
      <h1 class="page-sub-title">{{ project.title }}</h1>
      <h2 class="title page-title">{{ project.subTitle }}</h2>
    </div>
  </section>
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
    ...mapState(['data']),
    project() {
      return this.data.find(item => item.slug === this.slug);
    }
  }
}
</script>

<style scoped>
h1 {
  padding-top: 200px;
}
</style>
