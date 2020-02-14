<template>
  <div>
    <section :id="project.slug">
      <div class="content">
        <div class="project-title">
          <h1 class="page-sub-title">{{ project.title }}</h1>
          <h2 class="title page-title">{{ project.subTitle }}</h2>
        </div>
      </div>
    </section>

    <img :src="`/${project.thumbnail.url}`" :alt="project.thumbnail.alt">

    <section class="project-description section-padding">
      <div class="content">
        <div class="row">
          <h3>Detail</h3>
          <div class="text">
            <p>{{ project.description }}</p>
          </div>
        </div>
        <div class="row">
          <h3>Stack</h3>
          <div class="text">
            <p>In this project I used:</p>
            <ul>
              <li
                v-for="li in project.stack"
                :key="li">
                {{ li }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  head() {
    return {
      title: `Charlotte Rushen - ${this.project.title}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.project.subTitle
        }
      ]
    }
  },
  data() {
    return {
      slug: this.$route.params.slug
    }
  },
  computed: {
    ...mapState(['data']),
    project() {
      return this.data.find(item => item.slug === this.slug);
    }
  }
}
</script>

<style scoped>
.project-title {
  height: 70vh;
  max-width: 1180px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-top: 100px;
}

img {
  width: 100%;
  transform: translateY(10px);
  position: relative;
  z-index: 0;
}

.project-description {
  background: var(--off-white);
  color: var(--dark-grey);
}

h3 {
  font-size: 20px;
  color: var(--black);
  margin-bottom: 16px;
}

.row:not(:last-of-type) {
  margin-bottom: 50px;
}

ul {
  list-style-position: inside;
}

li {
  font-size: 14px;
  line-height: 24px;
}
</style>
