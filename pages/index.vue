<template>
  <div class="container">
    <landing />
    <skills />
  </div>
</template>

<script>
import landing from '@/components/home/Landing';
import skills from '@/components/home/Skills';

export default {
  components: {
    landing,
    skills
  }
}
</script>