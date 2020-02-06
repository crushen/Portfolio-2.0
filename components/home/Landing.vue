<template>
  <section id="landing">
    <div class="content">
      <h1>Charlotte Rushen</h1>
      <h2 class="title">Website and web app development, helping brands perfect their online presence.</h2>
    </div>
  </section>
</template>

<style scoped>
#landing {
  height: 100vh;
  background: var(--black);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

h1 {
  font-size: 4vw;
  color: var(--grey);
  margin-bottom: 16px;
}

h2 {
  line-height: 14vw;
}

@media screen and (min-width: 600px) {
  h1 {
    font-size: 24px;
    margin-bottom: 24px;
  }

  h2 {
    font-size: 60px;
    line-height: 90px;
    max-width: 950px;
  }
}

@media screen and (min-width: 1200px) {
  h2 {
    font-size: 70px;
    line-height: 100px;
    max-width: 1200px;
  }
}
</style>