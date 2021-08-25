import React, { useState } from 'react'
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  ForkOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';


export const DashboardScreen = ({ children, keySelected }) => {
  const [collapsed, setCollapsed] = useState(true)
  const { Header, Sider, Content } = Layout;

  const toggle = () => {
    setCollapsed(!collapsed)
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
            <Link to='/' style={{ textDecoration: 'none' }}>
              Filas
          </Link>
          </Menu.Item>

          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            <Link to='/screen' style={{ textDecoration: 'none' }}>
              Pantallas
          </Link>

          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
              </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: toggle,
          })}
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
