import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Landing from '../Components/Landing/Landing'
import House from '../Components/House/House'

export default (
    <HashRouter>
        <Switch>
            <Route exact path='/' component={Landing}/>
            <Route path='/house' component={House}/>
        </Switch>
    </HashRouter>
)