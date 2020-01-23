<template>
  <div>
    <navbar />
    <nuxt />
  </div>
</template>

<script>
import navbar from '@/components/nav/Navbar';

export default {
  components: {
    navbar
  }
}
</script>

<style>
:root {
  --black: #242529;
  --white: #FFF;
  --light-grey: #c7c7c9;
  --grey: #9AA0A6;
  --dark-grey: #3f4047;
}

html {
  font-family: 'Alata', 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  background: var(--black);
  color: var(--white);
  letter-spacing: 1px;
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
}

p {
  line-height: 24px;
}

a {
  text-decoration: none;
  color: var(--white);
}

.title {
  font-size: 10vw;
  color: var(--white);
  font-family: 'Vesper Libre', serif;
  letter-spacing: normal;
  font-weight: 900;
  line-height: 45px;
}

.sub-title {
  font-size: 18px;
  color: var(--grey);
  margin-top: 4px;
}

.section-padding {
  padding-top: 80px;
}

.content {
  width: 90%;
  margin: auto;
}
</style>
