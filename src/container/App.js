/**
 * Created by Eric-mac on 16/5/30.
 */
import React, { PropTypes } from 'react'
import { Row, Col, Affix } from 'antd';
import { Link } from 'react-router'
import MenuBar from '../components/MenuBar'
//import { fetchdata } from '../services'

export default class App extends React.Component{
    //初始化
    constructor(props, context){
        super(props, context)
        this.state = {
            current: '1',
            openKeys: [],
            data:[{}],
            fetchtime: new Date().valueOf()
        }
        this.handleMenuClick = this.handleMenuClick.bind(this)
        this.handleMenuToggle = this.handleMenuToggle.bind(this)
    }
    //菜单点击事件
    handleMenuClick(e){
        this.setState({
            current: e.key,
            openKeys: e.keyPath.slice(1),
            fetchtime: new Date().valueOf()
        });
    }

    handleMenuToggle(info){
        this.setState({
            openKeys: info.open ? info.keyPath : info.keyPath.slice(1),
        });
    }


    render(){
        const props = {handleMenuClick: this.handleMenuClick, handleMenuToggle: this.handleMenuToggle, state: this.state}
        return(
            <div>
                <Affix>
                    <Row type="flex" justify="start" style={{height:50,backgroupcolor:'#ff0'}} align="top">
                        <Col span="24"><Link to="/"><h1>行业板块-微酒店运营</h1></Link></Col>
                    </Row>
                </Affix>
                <Row type="flex" justify="start">
                    <Col span="4">
                        <MenuBar {...props} />
                    </Col>
                    <Col span="20">
                        {this.props.children && React.cloneElement(this.props.children, this.state)}
                    </Col>
                </Row>
            </div>
        )
    }
}