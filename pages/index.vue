<template>
  <div class="container">
    <landing />
    <skills />
    <work />
  </div>
</template>

<script>
import landing from '@/components/home/Landing';
import skills from '@/components/home/Skills';
import work from '@/components/home/Work';

export default {
  components: {
    landing,
    skills,
    work
  }
}
</script>