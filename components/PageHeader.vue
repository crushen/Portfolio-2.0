<template>
  <div>
    <header>
      <background class="background" :page="page" :style="fadeIn"/>

      <div class="page-headers" :style="scaleIn">
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
import background from '@/components/headers/Background';
import home from '@/components/headers/Home';
import work from '@/components/headers/Work';
import contact from '@/components/headers/Contact';


export default {
  components: {
    background,
    home,
    work,
    contact
  },
  data() {
    return {
      scaleIn: {
        opacity: 0,
        transform: 'scale(1.5)'
      },
      fadeIn: {
        opacity: 0,
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
      this.scaleIn.transform = 'scale(1)';
      this.scaleIn.opacity = 1;
      this.fadeIn.opacity = 1;
    }, 2500)
  }
}
</script>

<style scoped>
header {
  min-height: 100vh;
  transition: 0.6s;
}

.page-headers {
  transition: 0.6s;
}

.background {
  transition: opacity 0.6s;
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
