<template>
  <section class="content">
    <!-- <div 
      v-for="(project, index) in projects"
      :key="project.slug"
      class="circle"
      :class="{active: isActive === index}"
      @click="isActive = index">
      <p>{{ project.title }}</p>
    </div>  -->
  </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
  head() {
    return {
      title: 'Charlotte Rushen - Work',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Take a look at some of projects I've been working on recently."
        }
      ]
    }
  },
  data() {
    return {
      isActive: false
    }
  },
  computed: {
    ...mapState(['projects'])
  }
}
</script>

<style scoped>

section {
  margin-top: 150px;
  position: relative;
  z-index: 10;
}

.circle {
  width: 300px;
  height: 300px;
  border-radius: 500px;
  background: var(--purple);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
}

.circle:nth-child(1) {
  width: 170px;
  height: 170px;
}

.circle:nth-child(3) {
  width: 240px;
  height: 240px;
}

.circle.active {
  transform: scale(1.3);
}

p {
  font-weight: 800;
}
</style>