import EmployeesIndexPage from '../pages/Employees/Index'
import EmployeesEditPage from '../pages/Employees/Edit'
import EmployeesNewPage from '../pages/Employees/New'

const Routes = [{
  path: '/employees',
  component: EmployeesIndexPage
}, {
  path: '/employees/:id/edit',
  component: EmployeesEditPage
}, {
  path: '/employees/new',
  component: EmployeesNewPage
}]

export default Routes
