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
  }
}
</script>