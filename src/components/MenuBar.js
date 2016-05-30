/**
 * Created by Eric-mac on 16/5/27.
 */
import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import classnames from 'classnames'
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu

const menus = [
    {issub:'1',keys:'sub1',icon:'mail',text:'门店统计',menus:[{keys:'stores',text:'趋势图',link:'/chart/stores'}]},
    {issub:'1',keys:'sub2',icon:'appstore',text:'订单统计',menus:[{keys:'order',text:'趋势图',link:'/chart/order'}]},
    {issub:'1',keys:'sub4',icon:'setting',text:'用户统计',menus:[{keys:'user',text:'趋势图',link:'/chart/user'}]},
    {issub:'1',keys:'sub5',icon:'mail',text:'交易统计',menus:[{keys:'trade',text:'趋势图',link:'/chart/trade'}]},
]

export default class MenuBar extends React.Component{

    constructor(props, context){
        super(props, context)
        //this.state = {
        //    current: '1',
        //    openKeys: []
        //}
        this.handleClick = this.handleClick.bind(this)
        this.onToggle = this.onToggle.bind(this)
    }

    handleClick(e) {
        this.props.handleMenuClick(e)
        //this.setState({
        //    current: e.key,
        //    openKeys: e.keyPath.slice(1),
        //});
    }

    onToggle(info) {
        this.props.handleMenuToggle(info)
        //this.setState({
        //    openKeys: info.open ? info.keyPath : info.keyPath.slice(1),
        //});
    }


    renderitem(item){
        const result = []
        item.map((value)=>{
                if(value.issub){
                    result.push(this.rendersubmenu(value))
                }else{
                    result.push(<Menu.Item key={value.keys}><Link to={value.link}>{value.text}</Link></Menu.Item>)
                }
            }
        )
        return result
    }

    rendersubmenu(submenu){
        return(
            <SubMenu key={submenu.keys} title={<span><Icon type={submenu.icon} /><span>{submenu.text}</span></span>}>
                {this.rendermenu(submenu.menus)}
            </SubMenu>
        )
    }

    rendermenu(menu){
        if(menu.issub){
            return(this.rendersubmenu(menu))
        }else{
            return(this.renderitem(menu))
        }
    }


//style={{ width: 240 }}
    render(){
        const { state } = this.props
        return(
            <Menu onClick={this.handleClick}

                  openKeys={state.openKeys}
                  onOpen={this.onToggle}
                  onClose={this.onToggle}
                  selectedKeys={[state.current]}
                  mode="inline">
                    {menus.map((menu, i) =>
                        this.rendermenu(menu)
                    )}
            </Menu>
        )
    }
}

