<template>
  <section class="work-list">
    <div
      v-for="project in projects"
      :key="project.title"
      class="project">
      <nuxt-link :to="`/work/${project.slug}`">
        <h2>{{ project.title }}</h2>
        <p>{{ project.subTitle }}</p>
        
        <div class="links">
          <a href="">View on GitHub</a>
          <a href="">See the website</a>
        </div>
      </nuxt-link>
    </div>
  </section>
</template>

<script>

export default {
  data() {
    return {
      projects: this.$store.state.projects
    }
  }
}
</script>

<style scoped>

.project {
  margin-top: 32px;
}

h2 {
  line-height: 32px;
  font-size: 20px;
  text-decoration: none;
  font-weight: 800;
}

.links {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

@media screen and (min-width: 1000px) {
  .work-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .project {
    width: 46%;
    margin-top: 50px;
  }
}
</style>
