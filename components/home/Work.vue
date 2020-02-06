<template>
  <section id="work" class="section-padding">
    <div class="content">
      <div class="title-container">
        <h2 class="title">Work</h2>
        <p class="sub-title">See all</p>
      </div>

      <div class="cards-container">
        <div
          v-for="card in cardsShown"
          :key="card.title"
          class="card">
          <div class="image" :style="{ backgroundImage: `url(${card.image})` }"></div>
          <div class="text">
            <h3>{{ card.title }}</h3>
            <p>{{ card.text }}</p>
          </div>
        </div>       
      </div>
    </div>
  </section>
</template>

<script>
import meaheLogo from '@/static/meahe-logo.png';
import emmaLogo from '@/static/emma-logo.png';
import guitar from '@/static/guitar.jpg';

export default {
  data() {
    return {
      numberOfCards: 2,
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
        }
      ]
    }
  },
  computed: {
    cardsShown() {
      return this.work.slice(0, this.numberOfCards);
    }
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.innerWidth = window.innerWidth;
      if(this.innerWidth < 1100) {
        this.numberOfCards = 2;
      } else {
        this.numberOfCards = 3;
      }
    });
  }
}
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  min-height: 300px;
  height: 70vw;
  margin-top: 32px;
}

.image {
  min-height: 180px;
  height: 70%;
  background: #171719;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.text {
  min-height: 120px;
  height: 30%;
  background: var(--off-white);
  color: var(--black);
  padding: 0 5%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

h3 {
  font-size: 18px;
  margin-bottom: 8px;
}

.text p {
  color: var(--dark-grey);
}

@media screen and (min-width: 600px) {
  .title-container {
    margin-bottom: 50px;
  }

  .card {
    margin-top: 0px;
    height: 40vw;
  }

  .card:not(:last-of-type) {
    margin-bottom: 32px;
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

  .card {
    height: 400px;
    /* max-width: 370px; */
    margin: 50px auto 0 auto;
  }
}
</style>
