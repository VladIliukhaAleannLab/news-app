import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button, Tooltip, Layout } from 'antd';
import { connect } from 'react-redux';
import { EditOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import NewsService from '../service/news-service';
import { newsLoaded, newsAdd } from '../actions/actions';

const News = (props) => {
    const { news, newsLoaded } = props;
    const { Content } = Layout;
    const newsService = new NewsService();
    const { getData } = newsService;
    let element = null;
    let add = null;

    useEffect(() => {
        getData()
        .then(news => {
            newsLoaded(news)
        })
    }, [news]);

    if (news && localStorage.onLoggined) {
        element = news.map((item, idx) => {
            const { id } = item;
            return <div key={idx} className="site-layout-content">
                    <div>
                        <ul>
                            <li><span>Post id:</span> {item.postId}</li>
                            <li><span>Email:</span> {item.email}</li>
                            <li><span>Name:</span> {item.name}</li>
                            <li><span>News:</span> {item.body}</li>
                        </ul>
                        <Link to={`/news/${id}`}>
                            <Tooltip title="edit">
                                <Button type="primary" shape="circle" icon={<EditOutlined />} />
                            </Tooltip>
                        </Link>
                    </div>
                </div>
        });
    } else if (news) {
        element = news.map((item, idx) => {
            return <div key={idx} className="site-layout-content">
                    <div>
                        <ul>
                            <li><span>Post id:</span> {item.postId}</li>
                            <li><span>Email:</span> {item.email}</li>
                            <li><span>Name:</span> {item.name}</li>
                            <li><span>News:</span> {item.body}</li>
                        </ul>
                    </div>
                </div>
        });
    }

    if (localStorage.onLoggined) {
        add = <Link to='/add-news/'>
                    <Button type="primary" block>
                        Add News
                    </Button>
              </Link>
    }

    return (
        <Layout className="layout">
            <Content style={{ padding: '10px 50px' }}>
                <div>
                    {add}
                    {element}
                </div>
            </Content>
        </Layout>
    )
};

const mapStateToProps = (state) => {
    return {
        news: state.news
    }
};

const mapDispatchToProps =  (dispatch) => {
    return {
        newsLoaded: (news) => dispatch(newsLoaded(news)),
        newsAdd: (data, length) => dispatch(newsAdd(data, length))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(News);
