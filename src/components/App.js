import React from 'react';
import './../css/App.css'
import BuyNow from './../pages/BuyNow';
import Page404 from './../pages/Page404';
import MainPage from './../pages/MainPage';
import Product from './../pages/Product';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { useState } from 'react';


const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


function App() {

  const [DisNone , SetDisNone] = useState("DisNone");  

  const [itemF , setFItem] = useState("BuyNow !");  
  const [itemS , setS2Item] = useState("Shopping Cart");  
  const [itemT , setTItem] = useState("Contact Us");    
  const [itemC , setCItem] = useState("About Us");      

  const [count , setcount] = useState("Buy Now !"); 

  function RouteName(event) {

    console.log(event.item.props.names);
    setcount(event.item.props.names);

    if (event.item.props.names == "BuyNow !") {
      <Link href="/BuyNow"  to="/BuyNow"></Link>

  }
}

return(
  <Router>

<Layout>
    <Header class="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={'1'}>

        <Menu.Item onClick={RouteName} key="1" names ="BuyNow !">{itemF}</Menu.Item>                   
        <Menu.Item onClick={RouteName} key="2" names ="Shopping Cart">{itemS} </Menu.Item>
        <Menu.Item onClick={RouteName} key="3" names ="Contact Us">{itemT}</Menu.Item>
        <Menu.Item onClick={RouteName} key="4" names ="About Us">{itemC}</Menu.Item>        

      </Menu>
    </Header>
    <Layout>
     
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1" icon={<UserOutlined />} title="Shoe">
            <Menu.Item key="1">option1</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<LaptopOutlined />} title="T-Shirt">
            <Menu.Item key="5">option5</Menu.Item>
            <Menu.Item key="6">option6</Menu.Item>
            <Menu.Item key="7">option7</Menu.Item>
            <Menu.Item key="8">option8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<NotificationOutlined />} title="jewelry">
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>{count}</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >

        <Switch>
        <Route exact path="/" component={MainPage} />                  
          <Route path="/BuyNow" component={BuyNow} />
          <Route path="/Product" component={Product} />          
          <Route path="*" component={Page404} />
					 
				</Switch>

        </Content>
      </Layout>
    </Layout>
  </Layout>


  </Router>

  )};

export default App;