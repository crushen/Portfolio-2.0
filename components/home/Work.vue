<template>
  <section id="work" class="section-padding">
    <div class="content">
      <div class="title-container">
        <h2 class="title">Work</h2>
        <p class="sub-title">See all</p>
      </div>

      <div class="cards-container">
        <work-card
          v-for="card in cardsShown"
          :key="card.title"
          :cardImage="card.image"
          :cardTitle="card.title"
          :cardText="card.text">
        </work-card>
      </div>
    </div>
  </section>
</template>

<script>
import workCard from '@/components/work/WorkCard';

import meaheLogo from '@/static/meahe-logo.png';
import emmaLogo from '@/static/emma-logo.png';
import guitar from '@/static/guitar.jpg';

export default {
  components: {
    workCard
  },
  data() {
    return {
      numberOfCards: null,
      innerWidth: null,
      work: [
        {
          title: 'Meahe Design',
          text: "Taiwanese creative design company that's based in London.",
          image: meaheLogo
        },
        {
          title: 'Chord Progressions',
          text: "Taiwanese creative design company that's based in London.",
          image: guitar
        },
        {
          title: 'Emma Kate Parkinson',
          text: "Online portfolio for a UI/UX Designer and Creative.",
          image: emmaLogo
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
      return this.work.slice(0, this.numberOfCards);
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

  .cards-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 4vw;
  }
}

@media screen and (min-width: 1100px) {
  .content {
    display: block;
  }

  .cards-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 3vw;
  }
}
</style>
