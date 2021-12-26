import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { baseUrl } from '../shared/baseUrl';
import { Link } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ContactForm(props) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNum, setPhone] = useState('');
    const [feedback, setFeedback] = useState('');

    const handleSubmit = (event, firstName, lastName, email, phoneNum, feedback) => {
        event.preventDefault();
        console.log('Thanks for your feedback!');
        console.log(firstName, lastName, email, phoneNum, feedback);

        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setFeedback('');
    }

    return (
        <React.Fragment>
            <Form
                noValidate
                onSubmit={e => handleSubmit(e, firstName, lastName, email, phoneNum, feedback)}
            >
                <div className="row">
                    <div className="col-12 col-md-6">
                        <Form.Group controlId="firstName" as={Row}>
                            <Form.Label column sm={3}>First Name</Form.Label>
                            <Col sm={9}>
                                <Form.Control
                                    as='input'
                                    type='text'
                                    value={firstName}
                                    onChange={e => setFirstName(e.target.value.toString())}
                                />
                            </Col>
                        </Form.Group>
                    </div>
                    <div className="col-12 col-md-6">
                        <Form.Group controlId="lastName" as={Row}>
                            <Form.Label column sm={3}>Last Name</Form.Label>
                            <Col sm={9}>
                                <Form.Control
                                    as='input'
                                    type='text'
                                    value={lastName}
                                    onChange={e => setLastName(e.target.value.toString())}
                                />
                            </Col>
                        </Form.Group>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-7">
                        <Form.Group controlId="email" as={Row}>
                            <Form.Label column sm={3}>Email</Form.Label>
                            <Col sm={9}>
                                <Form.Control
                                    as='input'
                                    type='email'
                                    value={email}
                                    onChange={e => setEmail(e.target.value.toString())}
                                />
                            </Col>
                        </Form.Group>
                    </div>
                    <div className="col-12 col-md-5">
                        <Form.Group controlId="phoneNum" as={Row}>
                            <Form.Label column sm={3}>Phone</Form.Label>
                            <Col sm={9}>
                                <Form.Control
                                    as='input'
                                    type='tel'
                                    value={phoneNum}
                                    onChange={e => setPhone(e.target.value.toString())}
                                />
                            </Col>
                        </Form.Group>
                    </div>
                </div>
    
                <div className="row">
                    <div className="col-12">
                        <Form.Group controlId="feedback">
                            <Form.Label>Your Message</Form.Label>
                            <Form.Control
                                as='textarea'
                                value={feedback}
                                onChange={e => setFeedback(e.target.value.toString())}
                            />
                        </Form.Group>
                    </div>
                </div>
                
                <Form.Group>
                    <Button
                        type="submit"
                    >
                        Submit
                    </Button>
                </Form.Group>
            </Form>
        </React.Fragment>
    );
}

function About(props) {
    return (
        <div>
            <div className="header about">
                <h2>About</h2>
            </div>
            <div className="container about-body">
                <div className="row">
                    <div className="col-12 col-md-5">
                        <img src={baseUrl + 'media/images/me.jpg'} className="me" />
                    </div>
                    <div className="col-12 col-md-7">
                        <h3>What the Heck is Paper Drip?</h3>
                        <p>
                            Paper Drip was originally created to practice and eventually showcase my web development 
                            capabilities. I wanted to make a website about origami because this hobby has affected 
                            nearly all aspects of my life in the way I approach problems and learn.
                        </p>
                        <p>
                            Origami has an extremely rich culture rooted Japanese history. The intricacy and care that 
                            are required for more advanced origami has kept the art not only relevant, but also crucial 
                            in our global environment. Today we use models derived from origami to design medical 
                            equipment, satellites, and drones.
                        </p>
                        <p>
                            This project was created through Node.js and React. It is publicly available through this 
                            <a href="https://github.com/esh6597/paperdrip"> Github link.</a>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-7">
                        <h3>About Me</h3>
                        <p style={{fontStyle: 'italic'}}>
                            "A jack of all trades is a master of none, but oftentimes better than a master of one."<br />
                            --Someone important probably, but I can't find who
                        </p>
                        <p>
                            I'm an eclectic clown from Rockville, MD currently living in Tucson, AZ. I love learning but also often 
                            enjoy its pitfalls--if I'm not coding you can definitely catch me sinking hundreds of hours into drawing, 
                            gaming, paper crafts, useless science documentaries, and Wikipedia.
                        </p>
                        <p>
                            Ex-artist, ex-athlete, ex-competitive gamer, ex-store owner, ex-girl: all of my wildly different skills combine to make an absolute 
                            mess of a person. Portfolio links coming soon.
                        </p>                  
                    </div>
                    <div className="col-12 col-md-5">
                        <img src={baseUrl + 'media/images/clown-roses.png'} className="me" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h3>Contact Me</h3>
                        <p>
                            Note: this form currently does nothing, but type away to
                             your heart's content.                             
                        </p>
                        <ContactForm />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h3>Like what you see? Check out these sister websites!</h3>
                        <p>Links are currently in progress; expect some jankiness.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4">
                        <a href="https://www.youtube.com/channel/UCqsDIfnb7emiIXvb3VXpHVA">
                            <Card>
                                <Card.Img variant="top" src={baseUrl + 'media/images/youtube.png'} />
                                <Card.Title>Youtube</Card.Title>
                                <Card.Body>
                                    <Card.Text>Why sift through wordy blog posts when you can watch all of my tutorials for free on Youtube?</Card.Text>
                                </Card.Body>
                            </Card>
                        </a>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <a href="">
                            <Card>
                                <Card.Img variant="top" src={baseUrl + 'media/images/patreon.png'} />
                                <Card.Title>Patreon</Card.Title>
                                <Card.Body>
                                    <Card.Text>Directly support the expansion of this website with just $5 on Patreon and reap SWEET 
                                        benefits while you're at it.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </a>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <a href="">
                            <Card>
                                <Card.Img variant="top" src={baseUrl + 'media/images/portfolio.png'} />
                                <Card.Title>Portfolio</Card.Title>
                                <Card.Body>
                                    <Card.Text>Hiring, or just curious? Check out my non-origami creations 
                                        here. Note: website currently doesn't exist.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;