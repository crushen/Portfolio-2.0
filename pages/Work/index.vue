<template>
  <section id="work">
    <!-- <div class="content">
      <div class="cards-container">
        <work-card
          v-for="project in projects"
          :key="project.title"
          :cardImage="project.thumbnail.url"
          :cardTitle="project.title"
          :cardText="project.subTitle"
          :slug="project.slug">
        </work-card>
      </div>
    </div> -->
  </section>
</template>

<script>
import workCard from '@/components/work/WorkCard';

export default {
  components: {
    workCard
  },
  head() {
    return {
      title: 'Charlotte Rushen - Work',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Take a look at some of projects I've been working on recently."
        }
      ]
    }
  },
  data() {
    return {
      numberOfCards: null,
      innerWidth: null,
      projects: this.$store.state.data
    }
  }
}
</script>

<style scoped>
.work-title {
  height: 70vh;
  max-width: 1180px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-top: 100px;
}

.cards-container {
  padding: 80px 0;
}

@media screen and (min-width: 600px) {
  .cards-container {
    padding: 100px 0;
  }
}

@media screen and (min-width: 1100px) {
  .content {
    display: block;
  }
}
</style>
