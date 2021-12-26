import React, { Component, useState } from 'react';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './Loading';
import { BsFillPlusCircleFill, BsFillDashCircleFill,
    BsFillHandThumbsUpFill, BsFillHandThumbsDownFill } from 'react-icons/bs';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function CommentForm(props) {
    const [tempAuthor, setAuthor] = useState('');
    const [tempSummary, setSummary] = useState(''); // This is actually the main comment text; this is to stay consistent w variable names.

    const handleAuthor = (author) => {
        setAuthor(author);
    }

    const handleSummary = (summary) => {
        setSummary(summary);
    }

    const handleSubmit = (author, summary) => {
        props.postComment(props.mainArticle.id, author, summary);
        setAuthor('');
        setSummary('');
        console.log(tempAuthor, tempSummary);
    }

    return (
        <React.Fragment>
            <Form>
                <Form.Group controlId="author">
                    <Form.Label>Your Name: </Form.Label>
                    <Form.Control
                        type="text"
                        value={tempAuthor}
                        onChange={e => handleAuthor(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="comment">
                    <Form.Label>Comment:</Form.Label>
                    <Form.Control
                        as="textarea"
                        value={tempSummary}
                        onChange={e => handleSummary(e.target.value)}
                    />
                </Form.Group>
                <Button
                    onClick={() => handleSubmit(tempAuthor, tempSummary)}
                    variant="primary"
                >
                    Submit
                </Button>
            </Form>
        </React.Fragment>
    );
}

function Article(props) {

    const articleLoader = () => {
        if (props.articles.isLoading) {
            return (
                <Loading />
            );
        }
        if (props.articles.errMess) {
            return (
            <div className="col">
                <p>{props.articles.errMess}</p>
            </div>
            );
        }
        return(
            <React.Fragment>
                <div className="col-12 item-image">
                    <img src={baseUrl + props.mainArticle.image} />
                </div>
                <div className="col-12 col-sm-5 col-md-3 author">
                    <p>Written by Erin H</p>
                    <p>{parseDate(props.mainArticle.date)}</p>
                </div>
                <div className="col-12 col-sm-7 col-md-9 title">
                    <h1>{props.mainArticle.name}</h1>
                    <p>{props.mainArticle.summary}</p>
                </div>
                <div className="col-12">
                    <p>{props.mainArticle.text}</p>
                </div>
            </React.Fragment>
        );
    }

    const commentLoader = () => {
        if (props.comments.isLoading) {
            return (
                <Loading />
            );
        }
        if (props.comments.errMess) {
            return (
            <div className="col">
                <p>{props.comments.errMess}</p>
            </div>
            );
        }

        return(
            <React.Fragment>
                {props.mainComments.map(comment => {
                    return(
                        <div key={comment.id}>
                            <p>"{comment.summary}"</p>
                            <p>-- {comment.author}, {parseDate(comment.date)}</p>
                            <p>
                                {comment.likes}{' '}<BsFillHandThumbsUpFill />{' '}
                                {comment.dislikes}{' '}<BsFillHandThumbsDownFill />
                            </p>
                        </div>
                    );
                })}
            </React.Fragment>
        );
    }

    const parseDate = (dateString) => {
        const dateObject = new Date(dateString);
        const options = { month: 'long' };

        return (
            <React.Fragment>
                {new Intl.DateTimeFormat('en-US', options).format(dateObject)}
                {' '}{dateObject.getDate()}
                {', '}{dateObject.getFullYear()}
            </React.Fragment>
        );
    };

    console.log(JSON.stringify(props.mainArticle));

    return(
        <div className="container article">
            <div className="row">
                {articleLoader()}
            </div>
            <div className="row">
                <div className="col-12 col-md-6">
                    <h3>Comments</h3>
                    {commentLoader()}
                </div>
                <div className="col-12 col-md-6">
                    <h3>Add a Comment</h3>
                    <CommentForm 
                        postComment={props.postComment}
                        mainArticle={props.mainArticle}
                    />
                </div>
            </div>
        </div>
    );
}

export default Article;