import React, { Component, useState } from 'react';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './Loading';
import Card from 'react-bootstrap/Card';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom'

function ShopLoader(props) {

    if (props.isLoading) {  // Catch errors
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

    let items = props.items;

    if (props.under5) {
        items = items.filter(item => item.price <= 5);
    }
    
    if (props.bad) {
        items = items.filter(item => item.tags.includes('bad'));
    }

    if (props.cool) {
        items = items.filter(item => item.tags.includes('cool'));
    }

    items = items.sort((itemA, itemB) => compare(itemA, itemB, props.sort));

    function compare(itemA, itemB, sortType) {
        if (sortType === 'date-oldest') {
            if (itemB.id >= itemA.id) {
                return -1;
            } else {
                return 1;
            }
        } else if (sortType === 'date-newest') {
            if (itemB.id >= itemA.id) {
                return 1;
            } else {
                return -1;
            }
        } else if (sortType === 'price-highest') {
            if (itemB.price >= itemA.price) {
                return 1;
            } else {
                return -1;
            }
        } else if (sortType === 'price-lowest') {
            if (itemB.price >= itemA.price) {
                return -1;
            } else {
                return 1;
            }
        }
    }
    
    items = items.map(item => {
        return (
            <div key={item.id} className="col-12 col-md-6 col-lg-4">
                <Link to={`shop/${item.id}`}>
                    <Card>                    
                        <Card.Img variant="top" src={baseUrl + item.image} />
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>{item.summary.length > 150 ? 
                                item.summary.slice(0,150).trim() + '...'
                                : item.summary
                            }</Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <p className="bottom">$ {item.price.toFixed(2)}</p>
                        </Card.Body>
                    </Card>
                </Link>
            </div>
        );
    });

    return (
        <React.Fragment>
            {items.length > 0 ? items : 'Sorry, no results were found!'}
        </React.Fragment>
    );
}

class Shop extends Component {
    constructor(props) {
        super(props);

        this.state = {
            under5: false,
            bad: false,
            cool: false,
            sort: 'date-oldest'
        };

        this.filterUnder5 = this.filterUnder5.bind(this);
        this.filterBad = this.filterBad.bind(this);
        this.filterCool = this.filterCool.bind(this);
    }

    filterUnder5() {
        this.setState({under5: !this.state.under5});
    }

    filterBad() {
        this.setState({bad: !this.state.bad});
    }

    filterCool() {
        this.setState({cool: !this.state.cool});
    }

    changeSort = event => {
        this.setState({sort: event.target.value});
    };

    render() {
        return (
            <div className="shop">
                <div className="header">
                    <h2>Shop</h2>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 tag">
                            <p>
                                Looking for a specific item? Feel free to use the filter tags below, 
                                or the search bar above to browse through the whole website!
                            </p>
                            <p>
                                WARNING: Do not buy anything from me.
                            </p>
                            <p>
                                Searching for tags:{' '}
                                {this.state.under5 ? '# $5 or Less ' : ''}
                                {this.state.bad ? '# Really Bad ' : ''}
                                {this.state.cool ? '# Wow, cool!' : ''}
                            </p>
                        </div>                     
                    </div>
                    <div className="row control">
                        <div className="col-12 col-md-6" style={{textAlign: 'center'}}>
                            <ToggleButton
                                id='under5'
                                type='checkbox'
                                variant='outline-primary'
                                checked={this.state.under5}
                                onClick={this.filterUnder5}
                            >
                                $5 or Less
                            </ToggleButton>{' '}
                            <ToggleButton
                                id='bad'
                                type='checkbox'
                                variant='outline-primary'
                                checked={this.state.bad}
                                onClick={this.filterBad}
                            >
                                Really Bad
                            </ToggleButton>{' '}
                            <ToggleButton
                                id='cool'
                                type='checkbox'
                                variant='outline-primary'
                                checked={this.state.cool}
                                onClick={this.filterCool}
                            >
                                Cool! :)
                            </ToggleButton>
                        </div>
                        <div className="col-12 col-md-6" style={{textAlign: 'center'}} id='sort'>
                            <p>Sort by: </p>
                            <Form>
                                <Form.Control
                                    aria-label='Shop Sort'
                                    as='select'
                                    onChange={this.changeSort}
                                >
                                    <option value='date-oldest'>Date (oldest first)</option>
                                    <option value='date-newest'>Date (newest first)</option>
                                    <option value='price-highest'>Price (highest first)</option>
                                    <option value='price-lowest'>Price (lowest first)</option>
                                </Form.Control>
                            </Form>
                        </div>
                    </div>
                    <div className="row">
                        <ShopLoader 
                            isLoading={this.props.items.isLoading}
                            errMess={this.props.items.errMess}
                            items={this.props.items.items}
                            under5={this.state.under5}
                            bad={this.state.bad}
                            cool={this.state.cool}
                            sort={this.state.sort}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Shop;