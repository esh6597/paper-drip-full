/*
  As of right now this is the 'main' component; it includes the sidebar,
    header and footer. You'll notice that there's also an index.js and
    App.js; those are just entry points. This may change later on.
*/

import React, { useEffect, useState } from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';

//Components
import Toolbar from './Toolbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Blog from './Blog';
import Shop from './Shop';
import Item from './Item';
import Article from './Article';

//Redux
import { connect, useSelector, useDispatch } from 'react-redux';
import { fetchArticles, fetchItems, 
  fetchReviews, fetchComments,
  updateCart, removeCartItem, emptyCart,
  postComment } from '../redux/ActionCreators';

//Cosmetic
import Sidebar from 'react-sidebar';
import { BsList } from 'react-icons/bs';
import Button from '@restart/ui/esm/Button';


function UI() {
  //Redux store values--replaces mapStateToProps
  const articles = useSelector(state => state.articles);
  const items = useSelector(state => state.items);
  const comments = useSelector(state => state.comments);
  const reviews = useSelector(state => state.reviews);
  const cart = useSelector(state => state.cart);


  //Hook to dispatch actions to our redux store;
  //  replaces mapDispatchToProps
  //  Name words are flipped here to avoid name collision; they're
  //  flipped back to import names in component attributes below.
  //  This is arbitrary; but I went with this route for consistency.
  const dispatch = useDispatch();

  const articlesFetch = () => dispatch(fetchArticles());
  const itemsFetch = () => dispatch(fetchItems());
  const reviewsFetch = () => dispatch(fetchReviews());
  const commentsFetch = () => dispatch(fetchComments());

  const cartUpdate = (itemId, quantity) => dispatch(updateCart(itemId, quantity));
  const cartItemRemove = (itemId) => dispatch(removeCartItem(itemId));
  const cartEmpty = () => dispatch(emptyCart());

  const commentPost = (articleId, author, summary) => dispatch(postComment(articleId, author, summary));


  //Replaces componentDidMount
  useEffect(() => {
    articlesFetch();
    itemsFetch();
    reviewsFetch();
    commentsFetch();
  //Only runs on first render for performance via empty array
  }, []);

  //State hooks
  const [sidebarOpen, sidebarToggle] = useState(false);
  const toggleSidebar = sidebarToggle(!sidebarOpen);

  
  //RENDER: breaking down components into their own constants
  //  for readability that makes sense; see return statement at
  //  bottom for overview

  //Navbar that uses Toolbar component
  const Navbar = () => {
    return (
      <Toolbar 
        items={items.items}
        cart={cart}
        updateCart={cartUpdate}
        removeCartItem={cartItemRemove}
        emptyCart={cartEmpty}
      />
    );
  };

  //Pass store to sidebar
  //Sidebar is formatted through SCSS variables
  const SidebarMenu = () => {
    return(
      <React.Fragment>
        <Sidebar 
          sidebarOpen={sidebarOpen}
        />
      </React.Fragment>
    );
  };

  //Pass store to homepage
  const HomePage = () => {
    return (
      <Home 
        articles={articles}
        items={items}
      />
    );
  };

  //Match individual article
  const ArticleWithId = ({match}) => {
    return(
      <Article 
        mainArticle={articles.articles.filter(article => article.id === +match.params.articleId)[0]}
        mainComments={comments.comments.filter(comment => comment.articleId === +match.params.articleId)}
        articles={articles}
        comments={comments}
        postComment={commentPost}
      />
    );
  };

  //Match individual store item
  const ItemWithId = ({match}) => {
    return(
      <Item 
        mainItem={items.items.filter(item => item.id === +match.params.itemId)[0]}
        mainReviews={reviews.reviews.filter(review => review.itemId === +match.params.itemId)}
        items={items}
        reviews={reviews}
        updateCart={cartUpdate}
      />
    );
  };


  //Compile all components
  return(
    <React.Fragment>
      <Navbar />

      <SidebarMenu />
      <Button
        onClick={() => toggleSidebar()}
        className='sidebarButton'
      >
        <BsList style={{fontSize: 32}} />
      </Button>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='about' element={<About />} />
        <Route path='blog' element={<Blog articles={articles} />} />
        <Route path='blog/:articleId' element={<ArticleWithId />} />
        <Route path='shop' element={<Shop items={items} />} />
        <Route path='shop/:itemId' element={<ItemWithId />} />
      </Routes>

      <Footer />
    </React.Fragment>
  );
}

//Null values for connect since there are no class components
//  Connect used for subscribing to the store only
export default connect(null, null)(UI);