<template>
  <section id="work" class="section-padding">
    <div class="content">
      <h2 class="title">Work</h2>
      <p>See all</p>
      <!-- <div class="image-container">
        <img :src="meaheLogo" alt="">
      </div>
      <div class="image-container">
        <img :src="emmaLogo" alt="">
      </div> -->
      <div class="card" v-for="card in work" :key="card.title">
        <div class="image" :style="{ backgroundImage: `url(${card.image})` }"></div>
        <div class="text">
          <h3>{{ card.title }}</h3>
          <p>{{ card.text }}</p>
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
      work: [
        {
          title: 'Meahe Design',
          text: "Taiwanese creative design company that's based in London.",
          image: meaheLogo
        },
        {
          title: 'Chord Generator',
          text: "Taiwanese creative design company that's based in London.",
          image: guitar
        },
        {
          title: 'Emma Kate Parkinson',
          text: "Online portfolio for a UI/UX Designer and Creative.",
          image: emmaLogo
        },
      ]
    }
  }
}
</script>

<style scoped>
#work {
  background: var(--black);
  color: var(--white);
}

p {
  font-size: 18px;
  color: var(--grey);
  margin-top: 4px;
}

.image-container {
  width: 100%;
  background: #171719;
  margin-top: 32px;
}

img {
  width: 80%;
  display: block;
  margin: auto;
  padding: 10% 0;
}

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
  background: white;
  color: var(--black);
  padding: 0 5%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

h3 {
  margin-bottom: 8px;
}

.text p {
  color: var(--dark-grey);
  font-size: 14px;
}

</style>