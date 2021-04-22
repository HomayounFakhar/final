import React from 'react';
import './../css/App.css'
import BuyNow from './../pages/BuyNow';
import Page404 from './../pages/Page404';
import MainPage from './../pages/MainPage';
import Product from './../pages/Product';
import Login from './../pages/Login';

import firebase from '../pages/firebase';

//
import AboutMe from './../pages/AboutMe'
import Storage from './../context/Storage'
//

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Layout, Menu, Breadcrumb, Typography } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { useState } from 'react';


const { Text ,Title}  = Typography;
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function App() {
    
  // Menu Items
  const [itemF , setFItem] = useState("BuyNow !");  
  const [itemS , setS2Item] = useState("Shopping Cart");  
  const [itemT , setTItem] = useState("Contact Us");    
  const [itemC , setCItem] = useState("About Us");    
  const [itemL , setitemL] = useState("Login");      

  const [count , setcount] = useState("Buy Now !"); 

  // Addressing
  function RouteName(event) {
    setcount(event.item.props.names);
  }

return(

  <Router>
   
   <Storage>
   <Layout>
    <Header class="header">

      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={'1'}>

        <Menu.Item href="/Product" type="primary" onClick={RouteName} key="1" names ="BuyNow !">{itemF}
        <Link to="/BuyNow"></Link>
        </Menu.Item> 
        <Menu.Item onClick={RouteName} names ="Shopping Cart">{itemS} 
        <Link to="/Product"></Link>
        </Menu.Item>      
        <Menu.Item onClick={RouteName} names ="Contact Us">{itemT}
        <Link to="/ContactUs"></Link>
        </Menu.Item>
        <Menu.Item onClick={RouteName} names ="About Me">{itemC}
        <Link to="/AboutMe"></Link>
        </Menu.Item>        
        <Menu.Item onClick={RouteName} names ="Login">{itemL}
        <Link to="/Login"></Link>
        </Menu.Item>    
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
          <SubMenu key="Sub1" icon={<UserOutlined />} title="My Favorite List">
            <Menu.Item key="1">Product Name 1</Menu.Item>
            <Menu.Item key="2">Product Name 2</Menu.Item>
            <Menu.Item key="3">Product Name 3</Menu.Item>
            <Menu.Item key="4">Product Name 4</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<NotificationOutlined />} title="News">
            <Menu.Item key="5">Sale Is Comming !</Menu.Item>
            <Menu.Item key="6">Hire in Our Web Store</Menu.Item>
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
          <Route exact path="/BuyNow" component={BuyNow} />
          <Route exact path="/AboutMe" component={AboutMe} />          
          <Route exact path="/Login" component={Login} />             
          <Route path="/Product" component={Product} />          
          <Route path="*" component={Page404} />
					 
				</Switch>

        </Content>
      </Layout>
    </Layout>
  </Layout>

  </Storage> 
  </Router>

  )};

export default App;