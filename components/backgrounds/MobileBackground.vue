<template>
  <svg
    id="mobile-bg"
    :class="{ 'work': (page === '/work'),
              'contact': (page === '/contact'),
              'project': (page === '/work/meahe-design') }" 
    xmlns="http://www.w3.org/2000/svg">
    <transition-group 
      name="list" 
      tag="g">
      <circle class="items circ circ-1" key="circ-1" cy="100" :cx="innerWidth - 100" r="80"/>
      <circle class="items circ circ-2" key="circ-2" cy="280" :cx="innerWidth - 80" r="40"/>

      <circle class="items circ circ-small-1" key="circ-3" cy="20" :cx="innerWidth - 280" r="30"/>
      <circle class="items circ circ-small-2" key="circ-4" cy="150" :cx="innerWidth - 280" r="30"/>
      <circle class="items circ circ-small-3" key="circ-6" cy="40" cx="50" r="30"/>
    </transition-group>
  </svg>
</template>

<script>
export default {
  props: ['page'],
  data() {
    return {
      innerWidth: null
    }
  },
  mounted() {
    this.innerWidth = window.innerWidth;
    window.addEventListener('resize', () => {
      this.innerWidth = window.innerWidth;
    });
  }
}
</script>

<style scoped>
svg {
  width: 100%;
  min-height: 100vh;
  fill: var(--orange);
  position: absolute;
  z-index: 0;
}

.circ-small-1, .circ-small-3 {
  opacity: 0;
}

.items,
.list-move {
  transition: 1s;
}

.list-leave-work {
  position: absolute;
}

.work {
  fill: var(--purple);
}

.contact {
  fill: var(--blue);
}

.work .circ-1 {
  transform: translate3d(80px, 120px, 0) scale(0.9);
}

.contact .circ-1 {
  transform: translate3d(-185px, 180px, 0) scale(0.9);
}

.work .circ-2 {
  transform: translate3d(-50px, 30px, 0) scale(0.6);
}

.contact .circ-2 {
  transform: translate3d(20px, 0px, 0) scale(0.5);
}

.work .circ-small-1 {
  transform: translate3d(70px, 70px, 0) scale(1.2);
  opacity: 1;
}

.work .circ-small-2 {
  transform: translate3d(-50px, 50px, 0);
  opacity: 0;
}

.contact .circ-small-2 {
  transform: translate3d(200px, 50px, 0);
  opacity: 0;
}

.contact .circ-small-3 {
  transform: translate3d(30px, 50px, 0);
  opacity: 1;
}
</style>
