<template>
  <header>
    <svg 
      :class="{ 'active': (page === '/work') }" 
      xmlns="http://www.w3.org/2000/svg"
      width="100%" 
      height="100%">
      <transition-group 
        name="list" 
        tag="g">
        <circle class="items circ" key="circ" cx="30" cy="570" r="80"/>
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
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      slug: null
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
}


svg {
  fill: #a8dadc;
  position: absolute;
  z-index: 0;
}

.items,
.list-move {
  transition: 0.7s;
  transition-timing-function: cubic-bezier(0,1.15,1,.99);
}

.list-leave-active {
  position: absolute;
}

.active {
  fill: #e63946;
}

.active .circ {
  transform: translate3d(30px, 0, 0) scale(0.5);
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

@media screen and (min-width: 600px) {
  .header-enter,
  .header-leave-to {
    transform: translateX(50px);
  }
}
</style>
