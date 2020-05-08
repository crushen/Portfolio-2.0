<template>
  <svg 
    :class="{ 'work': (page === '/work'),
              'contact': (page === '/contact'),
              'project': (page === '/work/meahe-design') }" 
    xmlns="http://www.w3.org/2000/svg">
    <transition-group 
      name="list" 
      tag="g">
      <circle class="items circ circ-1" key="circ-1" cy="500" r="300"/>
      <circle class="items circ circ-2" key="circ-2" cy="200" :cx="innerWidth - 20" :r="innerWidth / 6"/>

      <circle class="items circ circ-small-1" key="circ-3" cy="200" cx="200" r="30"/>
      <circle class="items circ circ-small-2" key="circ-4" cy="700" cx="450" r="30"/>
      <circle class="items circ circ-small-3" key="circ-5" cy="300" cx="150" r="30"/>
      <circle class="items circ circ-small-4" key="circ-6" cy="900" cx="150" r="30"/>
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
  height: 850px;
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

.project {
  fill: var(--blue);
}

.contact {
  fill: var(--green);
}

.work .circ-1 {
  transform: translate3d(200px, 200px, 0) scale(0.7);
}

.project .circ-1 {
  transform: translate3d(500px, 100px, 0);
}

.contact .circ-1 {
  transform: translate3d(450px, -400px, 0) scale(0.9);
}

.work .circ-2 {
  transform: scale(0.6);
}

.project .circ-2 {
  transform: translate3d(-200px, -50px, 0);
}

.contact .circ-2 {
  transform: translate3d(-200px, 300px, 0);
}

.work .circ-small-1 {
  transform: translate3d(80px, 40px, 0);
  opacity: 1;
}

.work .circ-small-2 {
  transform: translate3d(200px, 50px, 0);
  opacity: 0;
}

.project .circ-small-2 {
  transform: translate3d(200px, 50px, 0);
  opacity: 0;
}

.contact .circ-small-2 {
  transform: translate3d(200px, 50px, 0);
  opacity: 0;
}

.project .circ-small-3 {
  transform: scale(1.2) translate3d(-100px, -50px, 0);
  opacity: 1;
}

.contact .circ-small-4 {
  transform: translate3d(100px, -200px, 0);
  opacity: 1;
}
</style>
