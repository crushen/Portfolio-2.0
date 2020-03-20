<template>
  <div>
    <page-loader :style="pageLoader"/>
    
    <header :style="header">
      <svg 
        :class="{ 'work': (page === '/work'),
                  'contact': (page === '/contact'),
                  'project': (page === '/work/meahe-design') }" 
        xmlns="http://www.w3.org/2000/svg"
        width="100%" 
        height="100%">
        <transition-group 
          name="list" 
          tag="g">
          <circle class="items circ circ-1" key="circ-1" cy="600" r="300"/>
          <circle class="items circ circ-2" key="circ-2" cy="200" :cx="innerWidth - 20" :r="innerWidth / 5"/>

          <circle class="items circ circ-small-1" key="circ-3" cy="200" cx="200" r="30"/>
          <circle class="items circ circ-small-2" key="circ-4" cy="700" cx="450" r="30"/>
          <circle class="items circ circ-small-3" key="circ-5" cy="300" cx="150" r="30"/>
          <circle class="items circ circ-small-4" key="circ-6" cy="900" cx="150" r="30"/>
        </transition-group>
      </svg>

      <div class="content">
        <transition 
          name="header" 
          mode="out-in">
          <div 
            v-if="page === '/'" 
            key="home"
            class="header-text">
            <h1 class="page-sub-title">Frontend Developer</h1>
            <h2 class="title page-title">Website and web app development, helping brands perfect their online presence.</h2>
          </div>
          <div 
            v-if="page === '/work'" 
            key="work"
            class="header-text">
            <h1 class="page-sub-title">Work</h1>
            <h2 class="title page-title">Take a look at some of projects I've been working on recently.</h2>
          </div>
          <div 
            v-if="page === '/contact'" 
            key="contact"
            class="header-text">
            <h1 class="page-sub-title">Contact</h1>
            <h2 class="title page-title">Have any enquiries, or just want to say hello?</h2>
          </div>
          <div 
            v-if="page === '/work/meahe-design'" 
            key="meahe"
            class="header-text">
            <h1 class="page-sub-title">Meahė Design</h1>
            <h2 class="title page-title">Taiwanese creative design company that's based in London.</h2>
          </div>
        </transition>
      </div>
    </header>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import pageLoader from '@/components/PageLoader';

export default {
  components: {
    pageLoader
  },
  data() {
    return {
      slug: null,
      number: 100,
      innerWidth: null,
      header: {
        opacity: 0,
        transform: 'scale(1.5)'
      },
      pageLoader: {
        opacity: 1,
        transform: ''
      }
    }
  },
  computed: {
    ...mapState(['page', 'data']),
    project() {
      return this.data.find(item => item.slug === this.slug);
    }
  },
  methods: {
    delay(el) {

    }
  },
  created() {
    if(this.$route.params.slug) {
      this.slug = this.$route.params.slug;
    }
    setTimeout(() => {
      this.header.transform = 'scale(1)';
      this.header.opacity = 1;
      this.pageLoader.transform = 'scale(1.5)';
      this.pageLoader.opacity = 0;
    }, 2500)
  },
  mounted() {
    this.innerWidth = window.innerWidth;
    window.addEventListener('resize', () => {
      this.innerWidth = window.innerWidth;
    });
  },
  watch: {
    '$route'(route) {
      if(route.params.slug) {
        this.slug = this.$route.params.slug;
      } else {
        this.slug = null;
      }
    }
  }
}
</script>

<style scoped>
header {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  transition: 0.6s;
}

.header-text {
  position: relative;
  z-index: 5;
}

.header-enter,
.header-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.header-enter-active,
.header-leave-active {
  transition: 0.7s;
  transition-timing-function: cubic-bezier(0,1.15,1,.99);
}

/* SVG'S */
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
  /* transition-timing-function: cubic-bezier(0,1.15,1,.99); */
}

.list-leave-work {
  position: absolute;
}

.work {
  fill: var(--green);
}

.project {
  fill: var(--blue);
}

.contact {
  fill: var(--purple);
}

.work .circ-1 {
  transform: translate3d(200px, 200px, 0);
}

.project .circ-1 {
  transform: translate3d(500px, 100px, 0);
}

.contact .circ-1 {
  transform: translate3d(450px, -500px, 0) scale(0.9);
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
  transform: translate3d(80px, 0, 0);
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

@media screen and (min-width: 600px) {
  .header-enter,
  .header-leave-to {
    transform: translateX(50px);
  }
}
</style>
