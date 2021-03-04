import React, { useState, useEffect } from 'react';
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { newsChanged } from '../actions/actions';
import NewsService from '../service/news-service';

const { TextArea } = Input;

const SinglePageNews = (props) => {
    const { itemId, news, newsChangedd } = props;
    const newsService = new NewsService();
    const { getComment } = newsService;

    const [elem, setElem] = useState({
        postId: '',
        email: '',
        name: '',
        body: ''
    });

    useEffect(() => {
        const obj = news.find(item => item.id === itemId);
        if(obj.isAddedNews) {
            setElem(obj)
        } else {
            getComment(itemId)
            .then(data => setElem({
                postId: data.postId,
                email: data.email,
                name: data.name,
                body: data.body
            }))
        }
    }, []);


    const handleEvent = (e) => {
        setElem({
            ...elem,
            [e.target.name]: e.target.value
        })
    };

    const updateNews = () => {
        const obj = news.findIndex(item => item.id === itemId);
        newsChangedd(news, elem, obj)
    };

    return (
        <div>
            <Input type="text" onChange={handleEvent} placeholder="default size" name="postId" value={elem.postId} prefix={<UserOutlined/>} />
            <Input onChange={handleEvent} name="email" placeholder="Basic usage" value={elem.email}/>
            <TextArea onChange={handleEvent} name="name" rows={2} value={elem.name}/>
            <TextArea onChange={handleEvent} name="body" rows={2} value={elem.body}/>
            <Link to="/news/"><Button onClick={updateNews} type="primary">Submit</Button></Link>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        news: state.news
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        newsChangedd: (news, elem, itemId) => dispatch(newsChanged(news, elem, itemId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SinglePageNews);
