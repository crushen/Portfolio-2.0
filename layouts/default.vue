<template>
  <div>
    <page-loader/>
    <my-nav />
    <page-header />
    <nuxt />
    <!-- <my-footer /> -->
  </div>
</template>

<script>
import pageLoader from '@/components/PageLoader';
import myNav from '@/components/nav/Nav';
import pageHeader from '@/components/PageHeader';
import myFooter from '@/components/Footer';

export default {
  components: {
    pageLoader,
    myNav,
    pageHeader,
    myFooter
  },
  mounted() {
    window.scrollTo(0,0);
  }
}
</script>

<style>
:root {
  --black: #3a4154;
  --white: #FFF;
  --off-white: #ededed;
  --light-grey: #e8e8ed;
  --grey: #9AA0A6;
  --dark-grey: #3f4047;

  --orange: #FFA69E;
  --green: #B8F2E6;
  --blue: #9ed4db;
  --purple: #c4a5c9;
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
  overflow-x: hidden;
  padding: 0;
  margin: 0;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

p, a, li {
  /* font-size: 15px;
  line-height: 24px; */
  line-height: 24px;
  font-size: 16px;
  font-weight: 400;
}

a {
  color: var(--white);
  text-decoration: none;
  font-weight: 800;
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
  font-size: 32px;
  line-height: 40px;
  color: var(--white);
  /* font-family: 'Catamaran', sans-serif; */
  letter-spacing: normal;
  font-weight: 900;
  text-shadow: 2px 0px 0px rgba(0, 0, 0, 0.6);
}

.sub-title {
  font-size: 18px;
  font-weight: 800;
  color: var(--grey);
  margin-top: 4px;
}

.page-sub-title {
  font-size: 5vw;
  font-weight: 800;
  color: var(--white);
  margin-bottom: 16px;
  text-shadow: 2px 0px 0px rgba(0, 0, 0, 0.6);
}

.content {
  width: 85%;
  max-width: 1300px;
  margin: auto;
}

.header-text {
  padding-top: 20vh;
  position: relative;
  z-index: 5;

  width: 85%;
  max-width: 1300px;
  margin: auto;
}

.page-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 32px 0 0 0;
}

.page-text p {
  margin-bottom: 32px;
}

button.page-link {
  font-family: 'Muli', 'Alata', 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: white;
  background: none;
  border: 3px solid white;
  border-radius: 100px;
  padding: 10px 24px;
}

@media screen and (min-width: 600px) {
  .logo {
    font-size: 22px;
  }

  .title {
    font-size: 40px;
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

  .header-text {
    /* padding-top: 260px; */
  }

  .page-text a, .page-text p {
    line-height: 30px;
    font-size: 22px;
  }

  .page-text p:first-of-type {
    margin-bottom: 20px;
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
    /* font-size: 70px;
    line-height: 100px; */
    max-width: 1300px;
  }
}
</style>
