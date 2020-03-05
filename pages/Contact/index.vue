<template>
  <div>
    <!-- <section id="contact-page">
      <div class="content">
        <h1 class="page-sub-title">Contact</h1>
        <h2 class="title page-title">Have any enquiries, or just want to say hello?</h2>
      </div>
    </section> -->

    <section class="section-padding contact">
      <contact-info class="content"/>
    </section>
    
  </div>
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
#contact-page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.contact {
  background: var(--off-white);
  color: var(--dark-grey);
}
</style>
