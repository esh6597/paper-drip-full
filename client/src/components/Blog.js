import React, { useState } from 'react';
import { baseUrl } from '../shared/baseUrl';
import { Link } from 'react-router-dom';

import { Loading } from './Loading';
import Card from 'react-bootstrap/Card';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

function BlogLoader(props) {
    if (props.isLoading) {
        return (
            <Loading />
        );
    }
    if (props.errMess) {
        return (
        <div className="col">
            <p>{props.errMess}</p>
        </div>
        );
    }

    if (props.tag === 'all') {
        const articles = props.articles.map(article => {
            return (
                <div key={article.id} className="col-12 col-md-6 col-lg-4">
                    <Link to={`blog/${article.id}`}>
                        <Card>
                            <Card.Img variant="top" src={baseUrl + article.image} />
                            <Card.Body>
                                <Card.Title>{article.name}</Card.Title>
                                <Card.Text>{article.summary.length > 150 ? 
                                    article.summary.slice(0,150).trim() + '...'
                                    : article.summary
                                }</Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <p className="bottom">{article.tag.toUpperCase()}</p>
                            </Card.Body>
                        </Card>
                    </Link>
                </div>
            );
        });
    
        return (
            <React.Fragment>
                {articles}
            </React.Fragment>
        );
    } else {
        const filtered = props.articles.filter(article => article.tag === props.tag);
        const articles = filtered.map(article => {
            return (
                <div key={article.id} className="col-12 col-md-6 col-lg-4">
                    <Card>
                        <Card.Img variant="top" src={baseUrl + article.image} />
                        <Card.Body>
                            <Card.Title>{article.name}</Card.Title>
                            <Card.Text>{article.summary.length > 150 ? 
                                article.summary.slice(0,150).trim() + '...'
                                : article.summary
                            }</Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <p className="bottom">{article.tag.toUpperCase()}</p>
                        </Card.Body>
                    </Card>
                </div>
            );
        });

        return (
            <React.Fragment>
                {articles}
            </React.Fragment>
        );
    }
}

function Blog(props) {
    const [tag, setValue] = useState('all');
    const handleChange = (val) => {
        setValue(val);
    }

    return (
        <div className="blog">
            <div className="header">
                <h2>Blog</h2>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 tag">
                        <p>
                            Looking for a specific article? Feel free to use the filter tags below, 
                            or the search bar above to browse through the whole website!
                        </p>
                        <p>
                            Tag being filtered: {tag.toUpperCase()}
                        </p>
                        <ToggleButtonGroup
                            type='radio'
                            value={tag}
                            onChange={handleChange}
                            defaultValue='all'
                            name='tag-toggle'
                            className='blog'
                        >
                            <ToggleButton 
                                id='tag-all' 
                                value='all' 
                                name="tag-toggle"
                                variant='outline-primary'
                            >
                                All
                            </ToggleButton>
                            <ToggleButton 
                                id='tag-tutorial' 
                                value='tutorial' 
                                name="tag-toggle"
                                variant='outline-primary'
                            >
                                Tutorials
                            </ToggleButton>
                            <ToggleButton 
                                id='tag-info' 
                                value='info' 
                                name="tag-toggle"
                                variant='outline-primary'
                            >
                                Informational
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </div>                        
                </div>
                <div className="row">
                    <BlogLoader 
                        isLoading={props.articles.isLoading}
                        errMess={props.articles.errMess}
                        articles={props.articles.articles}
                        handleFilter={() => this.handleChange()}
                        tag={tag}
                    />
                </div>
            </div>
        </div>
    );
}

export default Blog;