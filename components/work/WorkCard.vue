<template>
  <nuxt-link :to="`work/${slug}`">
    <div class="card">
      <div class="image" :style="{ backgroundImage: `url(${cardImage})` }"></div>
      <div class="text">
        <h3>{{ cardTitle }}</h3>
        <p>{{ cardText }}</p>
      </div>
    </div> 
  </nuxt-link> 
</template>

<script>
export default {
  props: {
    cardImage: { type: String, required: true },
    cardTitle: { type: String, required: true, default: 'Card title' },
    cardText: { type: String, required: true, default: 'Card Text' },
    slug: { type: String, required: true }
  }
}
</script>

<style scoped>
.card {
  width: 100%;
  min-height: 300px;
  height: 70vw;
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  cursor: pointer;
  transition: 0.2s;
  position: relative;
  z-index: 0;
}

.card:hover {
  transform: translateY(-10px);
}

.image {
  min-height: 180px;
  height: 70%;
  background: #171719;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

h3 {
  font-size: 18px;
  margin-bottom: 8px;
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

.text p {
  color: var(--dark-grey);
}

@media screen and (min-width: 600px) {
  .card {
    margin-top: 0px;
    height: 40vw;
  }

  .card:not(:last-of-type) {
    margin-bottom: 32px;
  }
}

@media screen and (min-width: 1100px) {
  .card {
    height: 400px;
    margin: 50px auto 0 auto;
  }
}
</style>
