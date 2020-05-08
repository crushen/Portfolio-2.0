<template>
  <div class="page-loader" :style="pageLoader">
    <p class="logo" :style="logo">charlotte rushen.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageLoader: {
        background: 'var(--black)'
      },
      logo: {
        opacity: 1,
        transform: 'scale(1)'
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.logo.transform = 'scale(1.5)';
      this.logo.opacity = 0;
      this.pageLoader.background = 'transparent';
    }, 2500)
  }
}
</script>

<style scoped>
.page-loader {
  width: 100%;
  height: 100vh;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.6s;
}

.logo {
  transition: 0.6s;
  animation: rainbow 0.8s linear infinite;
}

p {
  font-size: 24px;
}

@keyframes rainbow {
  0% {
    color: var(--orange);
  }
  25% {
    color: var(--green);
  }
  50% {
    color: var(--blue);
  }
  75% {
    color: var(--purple);
  }
  100% {
    color: var(--orange);
  }
}
</style>
