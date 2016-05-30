/**
 * Created by Eric-mac on 16/5/27.
 */
import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import classnames from 'classnames'
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu

const menus = [
    {issub:'1',keys:'sub1',icon:'mail',text:'门店统计',menus:[{keys:'1',text:'图表',link:'/chart'},{keys:'2',text:'菜单',link:'/menu'}]},
    {issub:'1',keys:'sub2',icon:'appstore',text:'订单统计',menus:[{keys:'11',text:'选项11',link:'/#'},{keys:'12',text:'选项12',link:'/#'},{issub:'1',keys:'sub3',text:'三级导航', menus:[{keys:'22',text:'选项22',link:'/#'}]}]},
    {issub:'1',keys:'sub4',icon:'setting',text:'用户统计',menus:[{keys:'31',text:'选项1',link:'/#'},{keys:'32',text:'选项2',link:'/#'}]},
]

export default class MenuBar extends React.Component{

    constructor(props, context){
        super(props, context)
        this.state = {
            current: '1',
            openKeys: []
        }
        this.handleClick = this.handleClick.bind(this)
        this.onToggle = this.onToggle.bind(this)
    }

    handleClick(e) {
        this.setState({
            current: e.key,
            openKeys: e.keyPath.slice(1),
        });
    }

    onToggle(info) {
        this.setState({
            openKeys: info.open ? info.keyPath : info.keyPath.slice(1),
        });
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
        return(
            <Menu onClick={this.handleClick.bind(this)}

                  openKeys={this.state.openKeys}
                  onOpen={this.onToggle}
                  onClose={this.onToggle}
                  selectedKeys={[this.state.current]}
                  mode="inline">
                    {menus.map((menu, i) =>
                        this.rendermenu(menu)
                    )}
            </Menu>
        )
    }
}

