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

    <section class="project-description section-padding">
      <div class="content">
        <video autoplay loop class="header-image">
          <source :src="`/${project.video}`" type="video/mp4">
          Your browser does not support the video tag.
        </video>

        <div class="description-text">
          <div class="row">
            <p class="year">{{ project.year }}</p>
            <ul>
              <li
                v-for="li in project.stack"
                :key="li">
                {{ li }}
              </li>
            </ul>
          </div>

          <div class="row">
            <div class="text">
              <p v-html="project.description"></p>
            </div>

            <div class="links">
              <a 
                :href="project.website"
                target="_blank">
                See the website
              </a>
              <a 
                v-if="project.github"
                :href="project.github"
                target="_blank">
                See the code
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="content gallery">
        <img 
          v-for="(image, index) in project.images"
          :key="index"
          :src="`/${image.url}`" 
          :alt="image.alt"
          class="gallery-image">
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
  height: 80vh;
  max-width: 1180px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-top: 100px;
}

.section-padding {
  padding: 0 0 150px 0;
}

.project-description {
  background: var(--off-white);
  color: var(--dark-grey);
}

h3 {
  color: var(--black);
  margin-bottom: 16px;
}

.row:not(:last-of-type) {
  margin-bottom: 32px;
}

img {
  display: block;
  width: 100%;
  position: relative;
  z-index: 0;
}

video {
  width: 100%;
  transform: translateY(-50px);
}

.year {
  font-size: 22px;
  font-weight: 900;
}

ul {
  list-style-position: inside;
  list-style: none;
  margin-top: 16px;
  border-left: 1px solid var(--dark-grey);
  padding-left: 8px;
}

li {
  font-size: 14px;
  line-height: 20px;
}

.text p {
  font-size: 17px;
}

.links {
  margin-top: 32px;
}

.links a {
  display: block;
}

.gallery {
  transform: translateY(-100px);
}

.gallery-image:not(:first-of-type) {
  margin-top: 32px;
}

@media screen and (min-width: 600px) {
  video {
    max-width: 850px;
    margin: auto;
    transform: translateY(-100px);
  }

  .description-text {
    width: 75%;
    max-width: 850px;
    margin: 0 auto 100px auto;
    display: grid;
    grid-template-columns: 1fr 3fr;
  }

  .gallery {
    width: 75%;
    max-width: 850px;
    margin: auto;
    transform: translateY(-150px);
  }
}

@media screen and (min-width: 1100px) {}

</style>
