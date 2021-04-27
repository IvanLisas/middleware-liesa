import React, { useContext } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import DataTable from '../views/DataTable/DataTable'
import Login from '../views/Login/Login'
import { UserContext } from '../contexts/UserContext'
import Menu from '../components/Menu/Menu'
import CategoriesSelector from '../views/CategoriesSelector/CategoriesSelector'

const Routes: React.FC = () => {
  const { user } = useContext(UserContext)

  return (
    <Router>
      {user && <Menu />}
      <Switch>
        {user && <Route path="/mercadolibre/ruta1" component={CategoriesSelector} />}
        {user && <Route path="/" component={DataTable} />}
        {!user && <Route path="/" component={Login} />}
      </Switch>
    </Router>
  )
}

export default Routes
