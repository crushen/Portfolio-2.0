<template>
  <section class="pages">
    <mobile-background class="background" :page="page" :style="fadeIn"/>

    <div class="page" :style="scaleIn">
      <transition name="slide" mode="out-in">
        <home v-if="page === '/'" key="home"/>

        <work v-if="page === '/work'" key="work"/>

        <contact v-if="page === '/contact'" key="contact" />
      </transition>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';
import mobileBackground from '@/components/backgrounds/MobileBackground';
import home from '@/components/pages/Home';
import work from '@/components/pages/Work';
import contact from '@/components/pages/Contact';


export default {
  components: {
    mobileBackground,
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
.pages {
  min-height: 100vh;
  transition: 0.6s;
}

.page {
  transition: 0.6s;
}

.background {
  transition: opacity 0.6s;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: 0.7s;
  transition-timing-function: cubic-bezier(0,1.15,1,.99);
}

@media screen and (min-width: 600px) {
  .slide-enter,
  .slide-leave-to {
    transform: translateX(50px);
  }
}
</style>
