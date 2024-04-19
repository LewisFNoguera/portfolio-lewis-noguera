import { createRouter, createMemoryHistory } from 'vue-router'
import { ExperiencePage, HomePage, ProjectsPage, SkillsPage, ContactPage } from '../pages'
import { Layout } from '../layout'

const router = createRouter({
  routes: [
    {
      path: '/',
      name: 'main',
      redirect: '/home',
      component: Layout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomePage
        },
        {
          path: '',
          name: 'projects',
          component: ProjectsPage
        },
        {
          path: '',
          name: 'experience',
          component: ExperiencePage
        },
        {
          path: '',
          name: 'skills',
          component: SkillsPage
        },
        {
          path: '',
          name: 'contact',
          component: ContactPage
        }
      ]
    }
  ],
  history: createMemoryHistory(),
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    } else {
      return { top: 0 }
    }
  }
})
export default router
