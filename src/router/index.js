import { createRouter, createWebHistory } from 'vue-router';
import UserLogin from '../components/UserLogin.vue';
import UserRegister from '../components/UserRegister.vue';
import DiscussionForum from '../components/DiscussionForum.vue';
import HomePage from '../components/HomePage.vue';

const routes = [
  { path: '/login', component: UserLogin },
  { path: '/register', component: UserRegister },
  { path: '/forum', component: DiscussionForum },
  { path: '/', component: HomePage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
