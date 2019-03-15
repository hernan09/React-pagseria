import React ,{Component} from 'react'
import { Menu, Icon } from 'antd';
import { Affix } from 'antd';

import {Link} from 'react-router-dom'

const SubMenu = Menu.SubMenu;


class Meenu extends Component {
    constructor(props){
        super(props)
        this.state={

        }

    }


    render(){

        return(
            <Affix offsetTop={0} style={{ width: "100%"}} onChange={affixed => console.log(affixed)}>
                <Menu style={{ backgroundColor: "black", color: "white" }}

                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                >
                    <Menu.Item key="mail">
                        <Link  to="/"></Link>Home
        </Menu.Item>
                    <Menu.Item key="app" >
                        <Link  to="/about"></Link>About
        </Menu.Item>
                    <SubMenu title={<span className="submenu-title-wrapper"><Icon type="setting" />Navigation Three - Submenu</span>}>


                    </SubMenu>
                    <Menu.Item key="2" >
                        <Icon type="appstore" />Navigation three
                   </Menu.Item>
                </Menu>

            </Affix>


        )
    }
}

export default Meenu