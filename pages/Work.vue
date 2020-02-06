<template>
  <section id="work">
    <div class="content">
      <div class="work-title">
        <h1 class="page-sub-title">Work</h1>
        <h2 class="title page-title">Take a look at some of projects I've been working on recently.</h2>
      </div>

      <div class="cards-container">
        <work-card
          v-for="card in work"
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
        },
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
