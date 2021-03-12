import React from 'react'
import { Route, Switch, Redirect } from "react-router-dom";
import List from './List'
import Category from './Category'



export default function () {

    const role = sessionStorage.getItem('role')
    
    const PrivateRoute = ({component: Component, ...rest}) => {

        if(role === 'Administrador') {

            return (
                <Route {...rest} render={props => (<Component {...props}  />)} /> 
            )
        } else if (role === 'Coordinador') {
            return (
                <Route {...rest} render={props => (<Redirect to='/mantenimiento'  />)} /> 
            )
        } else {
            return (
                <Route {...rest} render={props => (<Redirect to='/login'  />)} /> 
            )
        }
      };
    return (
        <Switch>
            <PrivateRoute  exact path={'/home/list'} component={() => <List/>}/>  
            <PrivateRoute path={'/home/category'} component={() => <Category/>}/>            
            <Redirect to={'/home/list'}/>
        </Switch>
    )
}