<template>
  <div>
    <my-nav />
    <nuxt />
    <my-footer />
  </div>
</template>

<script>
import myNav from '@/components/nav/Nav';
import myFooter from '@/components/Footer';

export default {
  components: {
    myNav,
    myFooter
  }
}
</script>

<style>
:root {
  --black: #242529;
  --white: #FFF;
  --off-white: #F0F0F0;
  --light-grey: #c7c7c9;
  --grey: #9AA0A6;
  --dark-grey: #3f4047;
}

html {
  font-family: 'Muli', 'Alata', 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  background: var(--black);
  color: var(--white);
  /* letter-spacing: 1px; */
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  overflow: none;
  /* scrollbar-width: none; 
  -ms-overflow-style: none; */
}

/* ::-webkit-scrollbar {
  width: 0px;
  height: 0px;
  background: transparent;
} */

p, a, li {
  font-size: 15px;
  line-height: 24px;
  font-weight: 600;
}

a {
  text-decoration: none;
  color: var(--dark-grey);
}

h2, h3 {
 font-weight: 800;
}

h3 {
  font-size: 20px;
}

.logo {
  font-size: 20px;
  font-weight: 800;
}

.title {
  font-size: 9vw;
  color: var(--white);
  font-family: 'Vesper Libre', serif;
  letter-spacing: normal;
  font-weight: 900;
  line-height: 45px;
}

.sub-title {
  font-size: 18px;
  font-weight: 800;
  color: var(--grey);
  margin-top: 4px;
}

.page-title {
  line-height: 14vw;
}

.page-sub-title {
  font-size: 5vw;
  font-weight: 800;
  color: var(--grey);
  margin-bottom: 16px;
}

.section-padding {
  padding: 80px 0;
}

.content {
  width: 85%;
  max-width: 1200px;
  margin: auto;
}

@media screen and (min-width: 600px) {
  .logo {
    font-size: 22px;
  }

  .title {
    font-size: 40px;
  }

  .section-padding {
    padding: 100px 0;
  }

  .page-title {
    font-size: 60px;
    line-height: 90px;
    max-width: 950px;
  }

  .page-sub-title {
    font-size: 24px;
    margin-bottom: 24px;
  }

  .cards-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 4vw;
  }
}

@media screen and (min-width: 1100px) {
  .cards-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 3vw;
  }
}

@media screen and (min-width: 1200px) {
  .page-title {
    font-size: 70px;
    line-height: 100px;
    max-width: 1200px;
  }
}
</style>
