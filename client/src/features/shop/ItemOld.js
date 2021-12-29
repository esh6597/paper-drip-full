import React, { Component, useState } from 'react';
import { baseUrl } from '../shared/baseUrl';
import { connect } from 'react-redux';

import { Loading } from './Loading';
import { BsFillPlusCircleFill, BsFillDashCircleFill,
    BsFillHandThumbsUpFill, BsFillHandThumbsDownFill } from 'react-icons/bs';

function Item(props) {

    const [tempQuantity, setQuantity] = useState(1);
    const handleChange = (value) => {
        setQuantity(value);
    }

    const handleSubtract = () => {
        if (tempQuantity < 1) {
            console.log('Sorry, you can\'t subtract any more');
            setQuantity(0);
        } else {
            setQuantity(tempQuantity - 1);
        }
    }

    const handleAddition = () => {
        setQuantity(tempQuantity + 1); //Quantity filter coming soon
    }                                  //so you can't add more than available

    const handleSubmit = (event) => {
        event.preventDefault();
        if (tempQuantity < 1) {
            console.log('Sorry, you added nothing.');
        } else {
            props.updateCart(props.mainItem.id, tempQuantity);
            console.log(`Added ${tempQuantity} ${props.mainItem.name}`);
            setQuantity(1);
        }
    }

    const itemLoader = () => {
        if (props.items.isLoading) {
            return (
                <Loading />
            );
        }
        if (props.items.errMess) {
            return (
            <div className="col">
                <p>{props.items.errMess}</p>
            </div>
            );
        }
        return(
            <React.Fragment>
                <div className="col-12">
                    <h1>{props.mainItem.name}</h1>
                </div>
                <div className="col-12 col-md-6 item-image">
                    <img src={baseUrl + props.mainItem.image} />
                </div>
                <div className="col-12 col-md-6">
                    <p>{props.mainItem.summary}</p>
                    <p>$ {props.mainItem.price.toFixed(2)}</p>
                    <form onSubmit={handleSubmit}>
                        <div className="d-flex justify-content-between">
                            <div>
                                <BsFillDashCircleFill 
                                    onClick={handleSubtract}
                                />
                                <input 
                                    type="text" 
                                    value={tempQuantity} 
                                    onChange={e => handleChange(e.target.value)}
                                    className="number-display"
                                />
                                <BsFillPlusCircleFill
                                    onClick={handleAddition}
                                />
                            </div>
                            <div className="submit">
                                <input 
                                    type="submit" 
                                    value="Add to Cart" 
                                    className="btn btn-primary"
                                />
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-12 col-md-6">
                    <h3>Description</h3>
                    <p>{props.mainItem.text 
                        ? props.mainItem.text 
                        : 'Sorry, nothing here yet!'}</p>
                </div>
            </React.Fragment>
        );
    }

    const reviewLoader = () => {
        if (props.reviews.isLoading) {
            return (
                <Loading />
            );
        }
        if (props.reviews.errMess) {
            return (
            <div className="col">
                <p>{props.reviews.errMess}</p>
            </div>
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

        return(
            <React.Fragment>
                {props.mainReviews.map(review => {
                    return(
                        <div>
                            <h4>{review.name}</h4>
                            <p>
                                {review.rating}
                                {review.rating > 1 ? ' Stars' : ' Star'}
                            </p>
                            <p>
                                {review.summary}
                            </p>
                            <p>
                                by {review.author}{' '}{parseDate(review.date)}
                            </p>
                            <p>
                                {review.likes} out of {review.likes + review.dislikes} people found this review helpful.
                            </p>
                            <p>
                                Did this review help you? Sorry, you can't tell me yet.
                            </p>
                        </div>
                    );
                })}
            </React.Fragment>
        );
    }

    return(
        <div className="container item">
            <div className="row">
                {itemLoader()}
                <div className="col-12 col-md-6">
                    <h3>Reviews</h3>
                    {reviewLoader()}
                </div>
            </div>
        </div>
    );
}

export default Item;