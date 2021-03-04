import React, { useState } from 'react';
import { Input, Tooltip, Space, Button } from 'antd';
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';
import { Redirect } from 'react-router-dom';
import { withRouter } from "react-router-dom";


const Login = ({history}) => {
    const [user, setUser] = useState({username: '', password: ''});

    const onChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    };

    const onLogin = () => {
        if(user.username === 'Admin' && user.password === '12345') {
            localStorage.setItem('onLoggined', true);
            history.push('/profile/')
        } else {
            alert('Username or password entered incorrectly!')
        }
    };

    if (localStorage.onLoggined) {
        return <Redirect to='/profile/'/>
    }

    return (
        <div className='wrapper'>
            <div className='login-form'>
                <Input
                    placeholder="Enter your username"
                    onChange={onChange}
                    value={user.username}
                    name='username'
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    suffix={
                        <Tooltip title="Extra information">
                        <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                        </Tooltip>
                    }
                />
                <Space direction="vertical">
                    <Input.Password placeholder="input password" name='password' onChange={onChange} value={user.password}/>
                </Space>
                <Button onClick={onLogin} type="primary">Submit</Button>
            </div>
        </div>
    )
};

export default withRouter(Login);
