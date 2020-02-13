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
          :key="project.id"
          :cardImage="project.thumbnail.url"
          :cardTitle="project.title"
          :cardText="project.subTitle">
        </work-card>
      </div>
    </div>
  </section>
</template>

<script>
import workCard from '@/components/work/WorkCard';
import gql from 'graphql-tag';

const projects = gql`
  query projects {
    projects {
      id
      title
      subTitle
      thumbnail {
        url
      }
    }
  }
`

export default {
  apollo: {
    projects: {
      query: projects
    }
  },
  components: {
    workCard
  },
  data() {
    return {
      numberOfCards: null,
      innerWidth: null
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
