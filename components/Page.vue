<template>
  <section class="pages">
    <mobile-background 
      v-if="innerWidth <= 600"
      class="background" 
      :page="page" 
      :style="fadeIn"/>

    <tablet-background 
      v-else-if="innerWidth > 600 && innerWidth < 1200"
      class="background" 
      :page="page" 
      :style="fadeIn"/>

    <desktop-background 
      v-else-if="innerWidth >= 1200"
      class="background" 
      :page="page" 
      :style="fadeIn"/>

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
import tabletBackground from '@/components/backgrounds/TabletBackground';
import desktopBackground from '@/components/backgrounds/DesktopBackground';
import home from '@/components/pages/Home';
import work from '@/components/pages/Work';
import contact from '@/components/pages/Contact';

export default {
  components: {
    mobileBackground,
    tabletBackground,
    desktopBackground,
    home,
    work,
    contact
  },
  data() {
    return {
      innerWidth: null,
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
    }, 2500);

    this.innerWidth = window.innerWidth;
    window.addEventListener('resize', () => {
      this.innerWidth = window.innerWidth;
    });
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
