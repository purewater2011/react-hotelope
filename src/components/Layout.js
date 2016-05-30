/**
 * Created by Eric-mac on 16/5/27.
 */
import React, { PropTypes } from 'react'
import classnames from 'classnames'
import { Row, Col } from 'antd';
import MenuBar from './MenuBar'

export default class Layout extends React.Component{

    render(){
        return(
            <div>
                <Row type="flex" justify="start" style={{height:50,backgroupcolor:'#ff0'}}>
                    <Col span="24">行业板块运营标题</Col>
                </Row>
                <Row type="flex" justify="start">
                    <Col span="4">
                        <MenuBar />
                    </Col>
                    <Col span="20">内容显示</Col>
                </Row>
            </div>
        )
    }
}