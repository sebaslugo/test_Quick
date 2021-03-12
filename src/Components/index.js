import React from 'react'
import { Route, Switch, Redirect, withRouter } from "react-router-dom";

import Login from './Login'
import Home from './Home'
import Mantenimiento from './404'

const role = sessionStorage.getItem('role')
    
    const PrivateRoute = ({component: Component, ...rest}) => {

        return (
      
            // Show the component only when the user is logged in
            // Otherwise, redirect the user to /signin page
            <Route {...rest} render={props => (
              role === 'Administrador' || role === 'Coordinador'  ?
                    <Component {...props}  />
                : <Redirect to={`/login`} />
            )} />
        );
      };

export default function () {

    return (
        <Switch>
            <Route exact path="/">
                <Redirect to="/login"/>
            </Route>
            <Route path='/login'>
                <Login/>
            </Route>
            <PrivateRoute path='/home' component={() => <Home/>}/>

            <PrivateRoute exact path={'/mantenimiento'} component={() => <Mantenimiento/>}/>

        </Switch>
    )
}