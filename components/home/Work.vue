<template>
  <section id="work" class="section-padding">
    <div class="content">
      <div class="title-container">
        <h2 class="title">Work</h2>
        <p class="sub-title">See all</p>
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

let numberOfCards = 2;

export default {
  apollo: {
    projects: {
      query: gql`
        query projects {
          projects(first: ${numberOfCards}) {
            id
            title
            subTitle
            thumbnail {
              url
            }
          }
        }
      `
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
  },
  methods: {
    calculateCards() {
      if(this.innerWidth < 1100) {
        numberOfCards = 2;
      } else {
        numberOfCards = 3;
      }
    }
  },
  mounted() {
    this.innerWidth = window.innerWidth;
    this.calculateCards();
    window.addEventListener('resize', () => {
      this.innerWidth = window.innerWidth;
      this.calculateCards();
      console.log(numberOfCards);
    });
  }
}
</script>

<style scoped>
@media screen and (min-width: 600px) {
  .title-container {
    margin-bottom: 50px;
  }
}

@media screen and (min-width: 1100px) {
  .content {
    display: block;
  }
}
</style>
