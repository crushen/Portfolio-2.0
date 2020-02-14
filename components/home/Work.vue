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
          :cardImage="project.thumbnail.url"
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

export default {
 components: {
    workCard
  },
  data() {
    return {
      numberOfCards: null,
      innerWidth: null,
      projects: this.$store.state.data
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
