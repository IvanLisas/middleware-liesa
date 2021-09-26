import React, { useContext } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'
import DataTable from '../views/DataTable/DataTable'
import Login from '../views/Login/Login'
import Menu from '../components/Menu/Menu'
import CategoriesSelector from '../views/CategoriesSelector/CategoriesSelector'
import ProductForm from '../views/ProductForm/ProductDetail'

const Routes: React.FC = () => {
  const { user } = useContext(UserContext)

  return (
    <Router>
      {user && (
        <Menu>
          <Switch>
            <Route path="/mercadolibre/ruta1" component={CategoriesSelector} />
            <Route path="/productDetail/:id" component={ProductForm} />
            <Route path="/catalogo" component={DataTable} />
            <Route path="/" component={DataTable} />
          </Switch>
        </Menu>
      )}
      {!user && <Route path="/" component={Login} />}
    </Router>
  )
}

export default Routes
