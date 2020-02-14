<template>
  <div>
    <h1>{{ project.subTitle }}</h1>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      slug: this.$route.params.slug
    }
  },
  computed: {
    ...mapState(["data"]),
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
