<template>
  <svg
    id="tablet-bg"
    :class="{ 'work': (page === '/work'),
              'contact': (page === '/contact'),
              'project': (page === '/work/meahe-design') }" 
    xmlns="http://www.w3.org/2000/svg"
    width="100%" 
    height="100%">
    <transition-group 
      name="list" 
      tag="g">
      <circle class="items circ circ-1" key="circ-1" cy="140" :cx="innerWidth - 450" r="120"/>
      <circle class="items circ circ-2" key="circ-2" cy="250" :cx="innerWidth - 150" :r="innerWidth / 8"/>

      <circle class="items circ circ-small-1" key="circ-3" cy="500" :cx="innerWidth - 550" r="50"/>
      <circle class="items circ circ-small-2" key="circ-4" cy="700" :cx="innerWidth - 300" r="50"/>
      <circle class="items circ circ-small-4" key="circ-6" cy="900" :cx="innerWidth - 600" r="50"/>
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
  fill: var(--orange);
  position: absolute;
  z-index: 0;
}

.circ-small-1, .circ-small-3, .circ-small-4 {
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
  fill: var(--green);
}

.work .circ-1 {
  transform: translate3d(150px, 400px, 0);
}

.contact .circ-1 {
  transform: translate3d(-50px, 150px, 0) scale(0.9);
}

.work .circ-2 {
  transform: translate3d(-100px, -70px, 0) scale(0.8);
}

.contact .circ-2 {
  transform: translate3d(100px, 350px, 0) scale(0.8);
}

.work .circ-small-1 {
  transform: translate3d(-30px, -220px, 0);
  opacity: 1;
}

.work .circ-small-2 {
  transform: translate3d(-200px, 100px, 0);
  opacity: 0;
}

.contact .circ-small-2 {
  transform: translate3d(-200px, 50px, 0);
  opacity: 0;
}

.contact .circ-small-4 {
  transform: translate3d(100px, -200px, 0);
  opacity: 1;
}
</style>
