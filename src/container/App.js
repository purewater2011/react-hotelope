/**
 * Created by Eric-mac on 16/5/30.
 */
import React, { PropTypes } from 'react'
import { Row, Col } from 'antd';
import MenuBar from '../components/MenuBar'

export default class App extends React.Component{

    render(){
        return(
            <div>
                <Row type="flex" justify="start" style={{height:50,backgroupcolor:'#ff0'}}>
                    <Col span="24">行业板块-微酒店运营</Col>
                </Row>
                <Row type="flex" justify="start">
                    <Col span="4">
                        <MenuBar />
                    </Col>
                    <Col span="20">
                        {this.props.children}
                    </Col>
                </Row>
            </div>
        )
    }
}