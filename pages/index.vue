<template>
  <div class="container">
    <landing />
    <skills />
    <work />
    <contact />
  </div>
</template>

<script>
import landing from '@/components/home/Landing';
import skills from '@/components/home/Skills';
import work from '@/components/home/Work';
import contact from '@/components/home/Contact';

export default {
  components: {
    landing,
    skills,
    work,
    contact
  },
  transition: {
    enterActiveClass: 'animated slideInRight faster',
    leaveActiveClass: 'animated slideOutRight faster',
    mode: 'out-in'
  },
  head() {
    return {
      title: 'Charlotte Rushen - Home',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Frontend Developer - Website and web app development, helping brands perfect their online presence."
        }
      ]
    }
  }
}
</script>
