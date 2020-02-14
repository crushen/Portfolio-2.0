<template>
  <section id="work" class="section-padding">
    <div class="content">
      <div class="title-container">
        <h2 class="title">Work</h2>
        <p class="sub-title">See all</p>
      </div>

      <div class="cards-container">
        <work-card
          v-for="project in cardsShown"
          :key="project.title"
          :cardImage="project.thumbnail"
          :cardTitle="project.title"
          :cardText="project.subTitle">
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
  data() {
    return {
      numberOfCards: null,
      innerWidth: null,
      projects: [
        {
          title: 'Meahė Design',
          subTitle: "Taiwanese creative design company that's based in London.",
          thumbnail: meaheThumbnail
        },
        {
          title: 'Chord Progressions',
          subTitle: 'An app that randomly generates chord progressions.',
          thumbnail: guitarThumbnail
        },
        {
          title: 'Emma Kate Parkinson',
          subTitle: 'Online portfolio for a UI/UX Designer and Creative.',
          thumbnail: emmaThumbnail
        }
      ]
    }
  },
  methods: {
    calculateCards() {
      if(this.innerWidth < 1100) {
        this.numberOfCards = 2;
      } else {
        this.numberOfCards = 3;
      }
    }
  },
  computed: {
    cardsShown() {
      return this.projects.slice(0, this.numberOfCards);
    }
  },
  mounted() {
    this.innerWidth = window.innerWidth;
    this.calculateCards();
    window.addEventListener('resize', () => {
      this.innerWidth = window.innerWidth;
      this.calculateCards();
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
