<template>
  <section id="contact" class="section-padding">
    <div class="content">
      <h2 class="title">Contact</h2>
      <contact-info />
    </div>
  </section>
</template>

<script>
import ContactInfo from '@/components/ContactInfo';

export default {
  components: {
    ContactInfo
  }
}
</script>

<style scoped>
#contact {
  background: var(--off-white);
  color: var(--dark-grey);
}

h2 {
  color: var(--black);
}

.social {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
}

h3 {
  color: var(--black);
  margin: 24px 0 6px 0;
}

a {
  color: var(--dark-grey);
  line-height: 30px;
}

@media screen and (min-width: 1100px) {
  h2 {
    margin-bottom: 50px;
  }
}
</style>