<template>
  <div>
    <page-loader :style="pageLoader"/>
    
    <header :style="header">

      <background :page="page" />

      <div class="content">
        <transition 
          name="header" 
          mode="out-in">

          <home v-if="page === '/'" key="home"/>

          <work v-if="page === '/work'" key="work"/>

          <contact v-if="page === '/contact'" key="contact" />
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
    ...mapState(['page', 'data'])
    // project() {
    //   return this.data.find(item => item.slug === this.slug);
    // }
  },
  mounted() {
    setTimeout(() => {
      this.header.transform = 'scale(1)';
      this.header.opacity = 1;
      this.pageLoader.transform = 'scale(1.5)';
      this.pageLoader.opacity = 0;
    }, 2500)
  }
}
</script>

<style scoped>
header {
  min-height: 100vh;
  transition: 0.6s;
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
