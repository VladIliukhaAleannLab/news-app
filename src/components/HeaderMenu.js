import React from 'react';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';

export default function HeaderMenu() {
    const { Header } = Layout;
    return(
        <Layout>
            <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal">
                    <Menu.Item key="1"><Link to='/'>Dashboard</Link></Menu.Item>
                    <Menu.Item key="2"><Link to='/news/'>News</Link></Menu.Item>
                    <Menu.Item key="3"><Link to='/profile/'>Profile</Link></Menu.Item>
                    <Menu.Item key="4"><Link to='/login/'>Login</Link></Menu.Item>
                </Menu>
            </Header>
        </Layout>
    )
};
