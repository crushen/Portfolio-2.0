<template>
  <div>
    <page-loader :style="pageLoader"/>
    
    <header :style="header">
      
      <background :page="page" />

      <div class="content">
        <transition 
          name="header" 
          mode="out-in">
          <div 
            v-if="page === '/'" 
            key="home"
            class="header-text">
            <home />
          </div>

          <div 
            v-if="page === '/work'" 
            key="work"
            class="header-text">
            <work />
          </div>

          <div 
            v-if="page === '/contact'" 
            key="contact"
            class="header-text contact">
            <contact />
          </div>

          <!-- <div 
            v-if="page === '/work/meahe-design'" 
            key="meahe"
            class="header-text">
            <h1 class="page-sub-title">Meahė Design</h1>
            <h2 class="title page-title">Taiwanese creative design company based in London.</h2>
          </div> -->
        </transition>
      </div>
    </header>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import pageLoader from '@/components/PageLoader';
import background from '@/components/headers/Background';
import home from '@/components/headers/Home';
import work from '@/components/headers/Work';
import contact from '@/components/headers/Contact';

export default {
  components: {
    pageLoader,
    background,
    home,
    work,
    contact
  },
  data() {
    return {
      slug: null,
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



@media screen and (min-width: 600px) {
  .header-text {
    padding-top: 260px;
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
