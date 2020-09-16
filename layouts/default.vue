<template>
  <div>
    <page-loader/>
    <my-nav />
    <page />
    <nuxt />
  </div>
</template>

<script>
import pageLoader from '@/components/PageLoader';
import myNav from '@/components/nav/Nav';
import page from '@/components/Page';

export default {
  components: {
    pageLoader,
    myNav,
    page
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
  --blue: #92ced6;
  --purple: #c4a5c9;
}

html {
  font-family: 'Muli', 'Alata', 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  background: var(--black);
  color: var(--white);
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
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}

p, a, li {
  line-height: 24px;
  font-size: 16px;
  font-weight: 400;
}

a {
  color: var(--white);
  text-decoration: none;
  font-weight: 800;
  transition: 0.2s;
}

a:hover {
  text-decoration: underline;
}

h2, h3 {
 font-weight: 800;
}

.logo {
  font-size: 18px;
  font-weight: 800;
}

.title {
  font-size: 32px;
  line-height: 40px;
  color: var(--white);
  letter-spacing: normal;
  font-weight: 900;
  text-shadow: 2px 0px 0px rgba(0, 0, 0, 0.8);
}

.sub-title {
  font-size: 18px;
  font-weight: 800;
  color: var(--grey);
  margin-top: 4px;
}

.page-sub-title {
  font-size: 18px;
  font-weight: 800;
  color: var(--white);
  margin-bottom: 16px;
  text-shadow: 2px 0px 0px rgba(0, 0, 0, 0.8);
}

.content {
  width: 85%;
  max-width: 1300px;
  margin: auto;
}

.header-text {
  padding: 20vh 0 10vh 0;
  position: relative;
  z-index: 5;
  min-height: 100vh;
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
  transition: 0.2s;
}

button.page-link:hover {
  background: var(--orange);
  border: 3px solid var(--orange);
  color: var(--black);
}

@media screen and (min-width: 340px) {
  .header-text {
    padding: 5vh 0 0 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}

@media screen and (min-width: 600px) {
  .logo {
    font-size: 20px;
  }

  .title {
    font-size: 38px;
    line-height: 50px;
  }
  
  .page-sub-title {
    font-size: 20px;
  }

  p, a, li {
    line-height: 26px;
    font-size: 18px;
  }

  .page-text p:first-of-type {
    margin-bottom: 28px;
  }

  button.page-link {
    line-height: 26px;
    font-size: 18px;
    margin-top: 28px;
  }
}

@media screen and (min-width: 1200px) {
  .logo {
    font-size: 22px;
  }

  .title {
    font-size: 46px;
    line-height: 58px;
  }
  
  .page-sub-title {
    font-size: 22px;
  }

  p, a, li {
    line-height: 32px;
    font-size: 20px;
  }

  .page-text p:first-of-type {
    margin-bottom: 32px;
  }

  button.page-link {
    line-height: 32px;
    font-size: 20px;
    margin-top: 32px;
  }
}
</style>
