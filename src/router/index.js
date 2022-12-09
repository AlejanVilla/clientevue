import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import HomePView from '../views/HomePostView.vue';
import CreateView from '../views/CreateView.vue';
import EditView from '../views/EditView.vue';
import CreatePView from '../views/CreatePostView';
import EditPView from '../views/EditPostView';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/homep',
    name: 'homep',
    component: HomePView
  },

  {
    path: '/create',
    name: 'create',   
    component: CreateView
  },

  {
    path: '/edit/:id',
    name: 'edit',   
    component: EditView
  },

  {
    path: '/createp',
    name: 'createp',   
    component: CreatePView
  },

  {
    path: '/editp/:id',
    name: 'editp',   
    component: EditPView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
