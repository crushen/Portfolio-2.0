<template>
  <section id="work">
    <div class="cards-container">
      <!-- <work-card
        v-for="project in projects"
        :key="project.title"
        :cardImage="project.thumbnail.url"
        :cardTitle="project.title"
        :cardText="project.subTitle"
        :slug="project.slug">
      </work-card> -->
      <div 
        v-for="project in projects"
        :key="project.title"
        class="project">
        <router-link
          :to="`/work/${project.slug}`">
          &#9830; {{ project.title }}
        </router-link>
        <p>{{ project.subTitle }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import workCard from '@/components/work/WorkCard';

export default {
  components: {
    workCard
  },
  head() {
    return {
      title: 'Charlotte Rushen - Work',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Take a look at some of projects I've been working on recently."
        }
      ]
    }
  },
  data() {
    return {
      numberOfCards: null,
      innerWidth: null,
      projects: this.$store.state.data
    }
  }
}
</script>

<style scoped>
.cards-container {
  padding: 50px 0;
}

.project {
  margin-bottom: 40px;
  /* background: #313540;
  padding: 10px 12px;
  border-radius: 10px; */
}

.project a {
  font-size: 20px;
  color: var(--white);
  font-weight: bold;
  border-bottom: solid white 2px;
}

.project p {
  line-height: 28px;
  font-size: 18px;
  margin-top: 12px;
}



@media screen and (min-width: 600px) {
  .cards-container {
    padding: 100px 0;
  }
}

@media screen and (min-width: 1100px) {
  .content {
    display: block;
  }
}
</style>
