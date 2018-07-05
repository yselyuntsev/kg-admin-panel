import IndexPage from '../pages/Index'
import ConfigurationPage from '../pages/Configuration'
import LoginPage from '../pages/Login'

const Routes = [{
  path: '/',
  component: IndexPage
}, {
  path: '/configuration',
  component: ConfigurationPage
}, {
  path: '/login',
  component: LoginPage
}]

export default Routes
