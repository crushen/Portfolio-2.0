import projects from '../static/projects.json';

export const state = () => ({
  page: 'index',
  data: projects
})

export const mutations = {
  updatePage(state, pageName) {
    state.page = pageName;
  }
}
