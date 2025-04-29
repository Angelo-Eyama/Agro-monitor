// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import PerformanceView from '../views/PerformanceView.vue';
import Dashboard from '../views/Dashboard.vue';
import SensorView from '../views/SensorView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Dashboard,
  },
  {
    path: '/performance',
    name: 'Performance',
    component: PerformanceView,
  },
    {
        path: '/sensor',
        name: 'Sensor',
        component: SensorView,
    },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
