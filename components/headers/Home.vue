<template>
  <div class="header-text">
    <h1 class="page-sub-title">Hello.</h1>
    <h2 class="title page-title">I'm Charlotte, <br>and I'm a frontend web developer.</h2>

    <div class="page-text">
      <p>On a typical day you'll find me crafting websites and user interfaces, helping brands perfect their online presence.</p>
      <p>Right now I'm mainly working with Vue, Nuxt, HTML, CSS (SCSS) and vanilla JavaScript (ES6+).</p>

      <nuxt-link 
        to="/work" 
        tag="button"
        class="page-link">
        View my work!
      </nuxt-link>
    </div>
  </div>
</template>

<style scoped>

@media screen and (min-width: 340px) {
  .header-text {
    padding-top: 5vh;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
