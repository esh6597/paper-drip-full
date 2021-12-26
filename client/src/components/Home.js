import React from 'react';
import { baseUrl } from '../shared/baseUrl';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Loading } from './Loading';

function Splash() {
    return (
        <div className="splash">
            <img 
                src={baseUrl + 'media/images/blue-corsage-bag.jpg'} 
                className="header"
                style={{
                    objectFit: 'cover',
                    margin: 0
                }}
            />
        </div>
    );
}

function Welcome() {
    return (
        <div className="welcome col-lg-7 col-12">
            <h1>Welcome</h1>
            <p>
                Thanks for stopping by! Paper Drip is a personal passion project I started about origami
                to work on my web development skills, but I really hope it motivates you to discover and
                 enjoy this hobby as much as I do.
            </p>
            <p>
                Check out the <Link to='/about'>about page</Link> for more information!
            </p>
            <p>
                Here to learn, or just new? Browse my <Link to='/blog'>blog </Link>
                 to learn more about origami, or even fold something new! Now 
                that you've read this, you have to.
            </p>
            <p>
                I'll be waiting.
            </p>
        </div>
    );
}

function NewsLetter() {
    return (
        <div className="col-12 col-lg-5 newsletter">
            <div>
                <h3>Latest News</h3>
                <p>Live feed not available yet; coming soon after I learn some back-end technologies!</p>
            </div>
        </div>
    );
}

function Featured(props) {
    if (props.articles.isLoading || props.items.isLoading) {
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

    const featuredItems = props.items.items.filter(item => item.featured);
    const featuredArticles = props.articles.articles.filter(article => article.featured);
    const featured = featuredItems.concat(featuredArticles);
    
    const featuredDisplay = featured.map(cardItem => {
        return (
            <div className="col-12 col-sm-6 col-md-4">
                <Link to={cardItem.image2 ? `/shop/${cardItem.id}` : `/blog/${cardItem.id}`}>
                    <Card>
                        <Card.Img
                            variant="top"
                            src={baseUrl + cardItem.image}
                        />
                        <Card.Body>
                            <Card.Title>{cardItem.name}</Card.Title>
                            <Card.Text>{cardItem.summary.length > 150 ? 
                                cardItem.summary.slice(0,150).trim() + '...'
                                : cardItem.summary
                            }</Card.Text>
                        </Card.Body>
                    </Card>
                </Link>
            </div>
        );
    });

    return (
        <React.Fragment>
            <div className="row featured d-flex justify-content-center">
                {featuredDisplay}
            </div>
        </React.Fragment>
    );
}

function Sections() {
    return (
        <div className="sections">
            <div className="row d-flex justify-content-center">
                <div className="col-12 col-sm-6 col-md-4 mx-0">
                    <Link to="/about">
                        <Card>
                            <Card.Img variant="top" src={baseUrl + 'media/images/about.png'} />
                            <Card.Title>About</Card.Title>
                            <Card.Body>
                                <Card.Text>Learn about the site and its author, see some other things I've done, or contact me.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                </div>
                <div className="col-12 col-sm-6 col-md-4">
                    <Link to="/blog">
                        <Card>
                            <Card.Img variant="top" src={baseUrl + 'media/images/blog.png'} />
                            <Card.Title>Blog</Card.Title>
                            <Card.Body>
                                <Card.Text>Learn about origami's history, future, or even its unconventional applications! 
                                    You can also find all of my tutorials here.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                </div>
                <div className="col-12 col-sm-6 col-md-4">
                    <Link to="/shop">
                        <Card>
                            <Card.Img variant="top" src={baseUrl + 'media/images/shop.png'} />
                            <Card.Title>Shop</Card.Title>
                            <Card.Body>
                                <Card.Text>Want to support me directly? Feel free to browse some of the origami-related 
                                    art I've made! This section barely exists, so don't expect much.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                </div>
            </div>
        </div>
    );
}

function Home(props) {
    return (
        <div>
            <Splash />
            <div className='container'>
                <div className="row">
                    <Welcome />
                    <NewsLetter />
                </div>
                <div className="row featured">
                    <h3>Featured</h3>
                </div>
                <Featured
                    articles={props.articles}
                    items={props.items}
                />
                <div className="row no-gutter sections">
                    <h3>Sections</h3>
                </div>
                <Sections />
            </div>
        </div>
    );
}

export default Home;