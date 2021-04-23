import React, { useContext } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import DataTable from '../views/Home/Home'
import Login from '../views/Login/Login'
import { UserContext } from '../contexts/UserContext'
import Menu from '../components/Menu/Menu'
import MercadolibreRuta1 from '../views/MercadolibreRuta1/MercadolibreRuta1'

const Routes: React.FC = () => {
  const { user } = useContext(UserContext)

  return (
    <Router>
      {user && <Menu />}
      <Switch>
        {user && <Route path="/home" component={DataTable} />}
        {user && <Route path="/mercadolibre/ruta1" component={MercadolibreRuta1} />}
        {!user && <Route path="/" component={Login} />}
      </Switch>
    </Router>
  )
}

export default Routes
