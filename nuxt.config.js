const projects = [
  {
    title: 'Meahė Design',
    subTitle: "Taiwanese creative design company that's based in London.",
    thumbnail: 'meahe-logo.png',
    slug: 'meahe-design'
  },
  {
    title: 'Chord Progressions',
    subTitle: 'An app that randomly generates chord progressions.',
    thumbnail: 'guitar.jpg',
    slug: 'chord-progressions'
  },
  {
    title: 'Emma Kate Parkinson',
    subTitle: 'Online portfolio for a UI/UX Designer and Creative.',
    thumbnail: 'emma-logo.png',
    slug: 'emma-kate-parkinson'
  }
]

let dynamicRoutes = () => {
 return new Promise(resolve => {
   resolve(projects.map(item => `work/${item.slug}`))
 })
}

export default {
  mode: 'universal',
  head: {
    title: 'Charlotte Rushen',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Catamaran:400,700|Vesper+Libre:900&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Alata&display=swap" rel="stylesheet' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Catamaran:400,700|Vesper+Libre:900&display=swap' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css' }
    ]
  },
  generate: {
    routes: dynamicRoutes
  },
  plugins: [],
  buildModules: [],
  build: {
    extend (config, ctx) {
    }
  },
  modules: [],
}
