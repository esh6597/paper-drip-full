import React, { Component } from 'react';

import variables from '../variables.module.scss';

import { Routes, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Sidebar from 'react-sidebar';
import { Link } from 'react-router-dom';

import Toolbar from './Toolbar';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Blog from './Blog';
import Shop from './Shop';
import Item from './Item';
import Article from './Article';

import { fetchArticles, fetchItems, 
    fetchReviews, fetchComments,
    updateCart, removeCartItem, emptyCart,
    postComment } from '../redux/ActionCreators';

import { BsList } from 'react-icons/bs';
import Button from '@restart/ui/esm/Button';

const mapStateToProps = state => {
    return {
        articles: state.articles,
        items: state.items,
        comments: state.comments,
        reviews: state.reviews,
        cart: state.cart
    };
};

const mapDispatchToProps = {
    fetchArticles: () => (fetchArticles()),
    fetchItems: () => (fetchItems()),
    fetchReviews: () => (fetchReviews()),
    fetchComments: () => (fetchComments()),
    updateCart: (itemId, quantity) => (updateCart(itemId, quantity)),
    removeCartItem: (itemId) => (removeCartItem(itemId)),
    emptyCart: () => (emptyCart()),
    postComment: (articleId, author, summary) => (postComment(articleId, author, summary))
};

class UI extends Component {

    constructor(props) {
        super(props);

        this.state = {
            sidebarOpen: false
        }

        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    componentDidMount() {
        this.props.fetchArticles();
        this.props.fetchItems();
        this.props.fetchReviews();
        this.props.fetchComments();
    }

    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }

    toggleSidebar() {
        this.setState({ sidebarOpen: !this.state.sidebarOpen })
    }

    render() {
        const HomePage = () => {

            return (
                <Home 
                    articles={this.props.articles}
                    items={this.props.items}
                />
            );
        };

        const ItemWithId = ({match}) => {
            return(
                <Item 
                    mainItem={this.props.items.items.filter(item => item.id === +match.params.itemId)[0]}
                    mainReviews={this.props.reviews.reviews.filter(review => review.itemId === +match.params.itemId)}
                    items={this.props.items}
                    reviews={this.props.reviews}
                    updateCart={this.props.updateCart}
                />
            );
        };

        const ArticleWithId = ({match}) => {
            return(
                <Article 
                    mainArticle={this.props.articles.articles.filter(article => article.id === +match.params.articleId)[0]}
                    mainComments={this.props.comments.comments.filter(comment => comment.articleId === +match.params.articleId)}
                    articles={this.props.articles}
                    comments={this.props.comments}
                    postComment={this.props.postComment}
                />
            );
        };

        return (
            <div>
                <Toolbar 
                    items={this.props.items.items}
                    cart={this.props.cart}
                    updateCart={this.props.updateCart}
                    removeCartItem={this.props.removeCartItem}
                    emptyCart={this.props.emptyCart}
                />
                <Sidebar
                    sidebar={
                        <div className='sidebar'>
                            <Link className="nav-link" to="/home">
                                <p>Home</p>
                            </Link>
                            <Link className="nav-link" to="/about">
                                About
                            </Link>
                            <Link className="nav-link" to="/blog">
                                Blog
                            </Link>
                            <Link className="nav-link" to="/shop">
                                Shop
                            </Link>
                        </div>
                    }
                    shadow={false}
                    open={this.state.sidebarOpen}
                    onSetOpen={this.onSetSidebarOpen}
                    styles={{
                        sidebar: { 
                            background: variables.colorWarm,
                            padding: 0,
                            transition: "transform .2s ease-in-out",
                            WebkitTransition: "-webkit-transform .2s ease-in-out"
                        } 
                    }}
                >
                    <Button onClick={() => this.toggleSidebar()} className='sidebarButton'>
                        <BsList style={{fontSize: 32}} />
                    </Button>
                    <div className='content'>
                        <Routes>
                            <Route exact path='/home'>
                                <HomePage />
                            </Route>
                            <Route exact path='/about' render={() => <About />} />
                            <Route exact path='/blog' render={() => <Blog articles={this.props.articles} />} />
                            <Route path='/blog/:articleId' component={ArticleWithId} />
                            <Route exact path='/shop' render={() => <Shop items={this.props.items} />} />
                            <Route path='/shop/:itemId' component={ItemWithId} />
                            <Redirect to='/home' />
                        </Routes>
                        <Footer />
                    </div>
                </Sidebar>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UI));