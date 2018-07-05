import Vue from 'vue'
import Router from 'vue-router'
import Employees from './Employees'
import Keys from './Keys'
import Main from './Main'
import Units from './Units'

Vue.use(Router)

const routes = [].concat(
  Employees,
  Keys,
  Main,
  Units
)

export default new Router({
  mode: 'history',
  routes
})
