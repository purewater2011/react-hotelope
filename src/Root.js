import React, { Component, PropTypes } from 'react';
import { Redirect, Route, Router, browserHistory } from 'react-router'
import fetch from 'isomorphic-fetch';
//import {awaitFetch} from '../utils/Utils';
import * as components from './components';
import * as container from './container';

const {
    Layout,
    MenuBar,
    Charts01
    } = components

const {
    App
    } = container

function getRootChildren(props){
    const rootChildren = [
        <div>
            {renderRoutes()}
        </div>
    ]

    //if (__DEVTOOLS__) {
    //    const DevTools = require('../utils/DevTools').default
    //    rootChildren.push(<DevTools key="devtools" />)
    //}

    return rootChildren
}

function renderRoutes(){
    return(
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <Route path="/menu" component={MenuBar} />
                <Route path="/chart" component={Charts01} />
            </Route>
        </Router>
    )
}
export default class Root extends React.Component{

    render(){
        return(
            <div>{getRootChildren(this.props)}</div>
        )
    }
}