import React, { useState } from 'react'
import { Layout, Menu, Button, Row } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  ForkOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../actions/auth';


export const DashboardScreen = ({ children, keySelected }) => {
  const [collapsed, setCollapsed] = useState(true)
  const { Header, Sider, Content } = Layout;
  const dispatch = useDispatch()

  const toggle = () => {
    setCollapsed(!collapsed)
  }

  const handleLogout = () => {
    dispatch(startLogout())
  }
  

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[keySelected]}
        >

          <Menu.Item key="1" icon={<ForkOutlined />}>
            <Link to='/queues'>
              Filas
          </Link>
          </Menu.Item>

          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            <Link to='/screen'>
              Pantallas
          </Link>

          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            <Link to='/printer'>
              Impresora
          </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <Row justify='space-between' align='middle'>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })
            }
            <Button
              type='primary'
              danger
              style={{ 'marginRight': 20 }}
              icon={
                <LogoutOutlined
                  style={{ 'display': 'flex', 'justifyContent': 'center' }}
                />}
                onClick={handleLogout}
            />
          </Row>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,

          }}
        >

          {children}

        </Content>
      </Layout>
    </Layout>
  )
}
