<template>
  <section id="work">
    <div class="content">
      <div class="work-title">
        <h1 class="page-sub-title">Work</h1>
        <h2 class="title page-title">Take a look at some of projects I've been working on recently.</h2>
      </div>

      <div class="cards-container">
        <work-card
          v-for="project in projects"
          :key="project.title"
          :cardImage="project.thumbnail"
          :cardTitle="project.title"
          :cardText="project.subTitle"
          :slug="project.slug">
        </work-card>
      </div>
    </div>
  </section>
</template>

<script>
import workCard from '@/components/work/WorkCard';
import meaheThumbnail from '@/static/meahe-logo.png';
import guitarThumbnail from '@/static/guitar.jpg';
import emmaThumbnail from '@/static/emma-logo.png';

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
      projects: [
        {
          title: 'Meahė Design',
          subTitle: "Taiwanese creative design company that's based in London.",
          thumbnail: meaheThumbnail,
          slug: 'meahe-design'
        },
        {
          title: 'Chord Progressions',
          subTitle: 'An app that randomly generates chord progressions.',
          thumbnail: guitarThumbnail,
          slug: 'chord-progressions'
        },
        {
          title: 'Emma Kate Parkinson',
          subTitle: 'Online portfolio for a UI/UX Designer and Creative.',
          thumbnail: emmaThumbnail,
          slug: 'emma-kate-parkinson'
        }
      ]
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

@media screen and (min-width: 1100px) {
  .content {
    display: block;
  }
}
</style>
