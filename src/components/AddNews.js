import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { newsAdd } from '../actions/actions';

const AddNews = (props) => {
    const { newsAdd } = props;
    const { TextArea } = Input;
    const [elem, setElem] = useState({
        postId: '',
        email: '',
        name: '',
        body: ''
    });

    const handleEvent = (e) => {
        setElem({
            ...elem,
            [e.target.name]: e.target.value
        })
    };

    const addNews = () => {
        newsAdd(elem)
    };

    return (
        <div>
            <Input type="text" onChange={handleEvent} placeholder="default size" name="postId" value={elem.postId} prefix={<UserOutlined/>} />
            <Input onChange={handleEvent} name="email" placeholder="Basic usage" value={elem.email}/>
            <TextArea onChange={handleEvent} name="name" rows={2} value={elem.name}/>
            <TextArea onChange={handleEvent} name="body" rows={2} value={elem.body}/>
            <Link to="/news/"><Button onClick={addNews} type="primary">Submit</Button></Link>
        </div>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        newsAdd: (elem) => dispatch(newsAdd(elem))
    }
};

export default connect(null, mapDispatchToProps)(AddNews);
