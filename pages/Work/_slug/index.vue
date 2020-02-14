<template>
  <section :id="project.slug">
    <div class="content">
      <div class="project-title">
        <h1 class="page-sub-title">{{ project.title }}</h1>
        <h2 class="title page-title">{{ project.subTitle }}</h2>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
  head() {
    return {
      title: `Charlotte Rushen - ${this.project.title}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.project.subTitle
        }
      ]
    }
  },
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
.project-title {
  height: 70vh;
  max-width: 1180px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-top: 100px;
}
</style>
