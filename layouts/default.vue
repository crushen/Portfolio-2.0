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
  --background: #242529;
  --text: #FFF;
}

html {
  font-family: 'Alata', 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
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

a {
  text-decoration: none;
  color: var(--text);
}

.content {
  width: 90%;
  margin: auto;
}
</style>
