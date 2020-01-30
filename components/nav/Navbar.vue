<template>
  <header>
    <nuxt-link to="/">
      <h1>logo.</h1>
    </nuxt-link>
    <div class="nav-button">
      <div class="nav-line"></div>
      <div class="nav-line"></div>
      <div class="nav-line"></div>
    </div>
  </header>
</template>

<style scoped>
header {
  padding: 4px 16px;
  background: var(--black);
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-button {
  height: 18px;
  width: 25px;
  cursor: pointer;
}

.nav-line {
  width: 100%;
  height: 3px;
  background: var(--white);
}

.nav-line:not(:last-of-type) {
  margin-bottom: 4px;
}
</style>