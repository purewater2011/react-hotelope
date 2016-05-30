/**
 * Created by Eric-mac on 16/5/30.
 */
import React, { PropTypes } from 'react'
import { Row, Col, Affix } from 'antd';
import { Link } from 'react-router'
import Charts01 from '../components/Charts01'
import { fetchdata } from '../services'
import { empty } from '../../utils/Utils'

export default class Charts extends React.Component{

    constructor(props, context){
        super(props, context)
        this.state = {data:[], fetchtime:0}
    }

    componentDidMount(){
        this.fetchdata(this.props.params.id)
    }

    fetchdata(key){
        switch (key){
            case 'order' :
                const { order } = require('../services/order')
                order.then(json => this.setState({data:json, fetchtime:new Date().valueOf()}))
                break;
            case 'stores' :
                const { stores } = require('../services/stores')

                stores.then(json => this.setState({data:json, fetchtime:new Date().valueOf()}))
                break;
            case 'user' :
                const { user } = require('../services/users')
                user.then(json => this.setState({data:json, fetchtime:new Date().valueOf()}))
                break;
            case 'trade' :
                const { trade } = require('../services/trade')
                trade.then(json => this.setState({data:json, fetchtime:new Date().valueOf()}))
                break;
        }
    }

    render(){
        const { fetchtime, current } = this.props
        if(fetchtime > this.state.fetchtime){
            this.fetchdata(current)
        }
        return(
            <Charts01 {...this.state} />
        )
    }
}