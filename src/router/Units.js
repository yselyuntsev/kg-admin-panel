import UnitsIndexPage from '../pages/Units/Index'
import UnitsEditPage from '../pages/Units/Edit'
import UnitsNewPage from '../pages/Units/New'
import UnitsShowPage from '../pages/Units/Show'

const Routes = [{
  path: '/units',
  component: UnitsIndexPage
}, {
  path: '/units/new',
  component: UnitsNewPage
}, {
  path: '/units/:id/new',
  component: UnitsNewPage
}, {
  path: '/units/:id/edit',
  component: UnitsEditPage
}, {
  path: '/units/:id',
  component: UnitsShowPage,
  children: [{
    path: 'show',
    component: UnitsShowPage
  }]
}]

export default Routes
