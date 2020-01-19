<template>
  <section id="work" class="section-padding">
    <div class="content">
      <h2 class="title">Work</h2>
      <p>See all</p>
      <div class="image-container">
        <img :src="meaheLogo" alt="">
      </div>
      <div class="image-container">
        <img :src="emmaLogo" alt="">
      </div>
    </div>
  </section>
</template>

<script>
import meaheLogo from '@/static/meahe-logo.png';
import emmaLogo from '@/static/emma-logo.svg';

export default {
  data() {
    return {
      meaheLogo,
      emmaLogo
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

</style>