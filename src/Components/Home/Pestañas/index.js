import React from 'react'
import { Route, Switch, Redirect } from "react-router-dom";
import List from './List'
import Category from './Category'



export default function () {

    const role = sessionStorage.getItem('role')
    
    const PrivateRoute = ({component: Component, ...rest}) => {

        return (
      
            // Show the component only when the user is logged in
            // Otherwise, redirect the user to /signin page
            <Route {...rest} render={props => (
              role === 'Administrador' ?
                    <Component {...props}  />
                : <Redirect to={`/mantenimiento`} />
            )} />
        );
      };
    return (
        <Switch>
            <PrivateRoute  exact path={'/home/list'} component={() => <List/>}/>  
            <PrivateRoute path={'/home/category'} component={() => <Category/>}/>            
            <Redirect to={'/home/list'}/>
        </Switch>
    )
}