import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/api/v1/institutions',
    name: 'Institucion',    
    component: () => import(/* webpackChunkName: "institucion" */ '../views/Institucion.vue')
  },
  {
    path: '/api/v1/institutions/:id',
    name: 'InstitucionPorID',    
    component: () => import(/* webpackChunkName: "institucionporid" */ '../views/InstitucionPorID.vue')
  },
  {
    path: '/api/v1/volunteers/:id',
    name: 'VoluntarioPorID',    
    component: () => import(/* webpackChunkName: "voluntarioporid" */ '../views/VoluntarioPorID.vue')
  },
  {
    path: '/api/v1/volunteers/byAbility/:id',
    name: 'VoluntariosPorHabilidad',    
    component: () => import(/* webpackChunkName: "voluntariosporhabilidad" */ '../views/VoluntariosPorHabilidad.vue')
  },
  {
    path: '/api/v1/volunteers/byEmergency/:id',

    name: 'VoluntariosPorEmergencia',    
    component: () => import(/* webpackChunkName: "voluntariosporemergencia" */ '../views/VoluntariosPorEmergencia.vue')
  },
  {
    path: '/api/v1/volunteers',
    name: 'volunteer',    
    component: () => import(/* webpackChunkName: "volunteer" */ '../views/Voluntario.vue')
  },
  {
    path: '/api/v1/abilities',
    name: 'abilities',    
    component: () => import(/* webpackChunkName: "abilities" */ '../views/Habilidad.vue')
  },
  {
    path: '/api/v1/new/volunteer',
    name: 'newVolunteer',    
    component: () => import(/* webpackChunkName: "newvolunteer" */ '../views/NewVoluntario.vue')
  },
  {
    path: '/api/v1/emergencies',
    name: 'emergencies',    
    component: () => import(/* webpackChunkName: "emergencies" */ '../views/Emergencia.vue')
  },
  {
    path: '/api/v1/new/emergencies',
    name: 'newEmergencies',    
    component: () => import(/* webpackChunkName: "newvolunteer" */ '../views/NewEmergencia.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
