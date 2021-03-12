import React from 'react'
import { Route, Switch, Redirect, withRouter } from "react-router-dom";

import Login from './Login'
import Home from './Home'
import Mantenimiento from './404'

const role = sessionStorage.getItem('role')
    

export default function () {

    return (
        <Switch>
            <Route exact path="/">
                <Redirect to="/login"/>
            </Route>
            <Route path='/login'>
                <Login/>
            </Route>
            <Route path='/home' component={() => <Home/>}/>

            <Route path={'/mantenimiento'} component={() => <Mantenimiento/>}/>

        </Switch>
    )
}