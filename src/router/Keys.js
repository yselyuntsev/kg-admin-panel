import KeysIndexPage from '../pages/Keys/Index'
import KeysEditPage from '../pages/Keys/Edit'
import KeysNewPage from '../pages/Keys/New'

const Routes = [{
  path: '/keys',
  component: KeysIndexPage
}, {
  path: '/keys/:id/edit',
  component: KeysEditPage
}, {
  path: '/keys/new',
  component: KeysNewPage
}]

export default Routes
