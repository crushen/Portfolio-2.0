<template>
  <div class="container">
    <p class="logo">charlotte rushen.</p>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

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