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
            <h1 class="page-sub-title">Hello</h1>
            <h2 class="title page-title">I'm Charlotte, <br>and I'm a frontend web developer.</h2>

            <div class="page-text">
              <p>On a typical day, you will find me crafting websites and user interfaces, and helping brands perfect their online presence.</p>
              <p>Right now I'm mainly working with Vue, Nuxt, GraphQL, GraphCMS, HTML, CSS (SCSS) and vanilla JavaScript (ES6+).</p>
              <p>Outside of work, I'm usually either writing music, playing video games, or obsessing over my two bundles of joy... aka my cats.</p>
              <p>
                If you'd like to find out more about me, you can  
                <router-link to="/contact">get in touch</router-link> 👋🏻
              </p>
            </div>
          </div>

          <div 
            v-if="page === '/work'" 
            key="work"
            class="header-text">
            <h1 class="page-sub-title">Work</h1>
            <h2 class="title page-title">Take a look at some of projects I've been working on recently.</h2>
            <!-- <work-cards-container /> -->
          </div>

          <div 
            v-if="page === '/contact'" 
            key="contact"
            class="header-text contact">
            <h1 class="page-sub-title">Contact</h1>
            <h2 class="title page-title">Have any enquiries, or just want to say hello?</h2>

            <div class="page-text">
              <p>You can send me an email at <a href="mailto:hello@charlotterushen.com">hello@charlotterushen.com</a></p>
              <p>Or you can follow me on <a href="https://github.com/crushen" target="_blank">GitHub</a>, <a href="https://twitter.com/charlotterushen" target="_blank">Twitter</a>, <a href="https://codepen.io/charlotterushen" target="_blank">Codepen</a> or <a href="https://www.linkedin.com/in/charlotte-rushen" target="_blank">LinkedIn</a>.</p>
            </div>
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
import workCardsContainer from '@/components/work/WorkCardsContainer';

export default {
  components: {
    pageLoader,
    workCardsContainer
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
  mounted() {
    if(this.$route.params.slug) {
      this.slug = this.$route.params.slug;
    }

    setTimeout(() => {
      this.header.transform = 'scale(1)';
      this.header.opacity = 1;
      this.pageLoader.transform = 'scale(1.5)';
      this.pageLoader.opacity = 0;
    }, 2500)

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
  min-height: 100vh;
  transition: 0.6s;
}

.header-text {
  padding-top: 160px;
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

.page-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 32px 0 0 0;
}

.page-text a {
  color: var(--white);
  border-bottom: solid white 2px;
}

.page-text p {
  margin-bottom: 32px;
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
  /* fill: var(--green); */
  fill: var(--purple);
}

.project {
  fill: var(--blue);
}

.contact {
  /* fill: var(--purple); */
  fill: var(--green);
}

.work .circ-1 {
  transform: translate3d(200px, 200px, 0) scale(0.7);
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

@media screen and (min-width: 600px) {
  .content {
    height: 100vh;
    display: flex;
    align-items: center;
  }

  .header-text {
    padding-top: 50px;
  }

  .header-enter,
  .header-leave-to {
    transform: translateX(50px);
  }

  .page-text a, .page-text p {
    line-height: 30px;
    font-size: 22px;
  }

  .page-text p:first-of-type {
    margin-bottom: 20px;
  }
}
</style>
