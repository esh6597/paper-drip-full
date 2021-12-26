import React from 'react';
import { Link } from 'react-router-dom';

import { BsFillHouseFill, BsFillInfoCircleFill,
    BsFillFileEarmarkTextFill, BsFillHandbagFill,
    BsFillTelephoneFill, BsEnvelopeFill, BsInfoCircleFill } from 'react-icons/bs';
import { TiSocialGithub, TiSocialInstagram, 
    TiSocialLinkedin, TiSocialYoutube } from "react-icons/ti";

function Footer(props) {
    return (
        <footer className="footer">
            <div className="row d-flex justify-content-around">             
                <div className="col-8 col-md-5 text-center site-links">
                    <h5 className="footer-title">Site Links</h5>
                        <div className="links">
                            <Link to='/home'>
                                <BsFillHouseFill size="40px"/><br />
                                Home
                            </Link>
                        
                            <Link to='/about'>
                                <BsFillInfoCircleFill size="40px"/><br />
                                About
                            </Link>
                        
                            <Link to='/blog'>
                                <BsFillFileEarmarkTextFill size="40px"/><br />
                                Blog
                            </Link>
                        
                            <Link to='/shop'>
                                <BsFillHandbagFill size="40px"/><br />
                                Shop
                            </Link>
                        </div>
                    <p className="m-0">The Bee Movie script belongs to its writers: Jerry Seinfeld, Spike Feresten, Barry Marder, and Andy Robin.</p>
                </div>
                <div className="col-6 col-md-4 text-center socials">
                    <h5 className="footer-title">Social</h5>
                    <p>Note: none of these links work here.</p>
                        <div className="social-icons">
                            <a href="">
                                <TiSocialGithub 
                                    size="40px"
                                />
                            </a>
                            <a href="">
                                <TiSocialInstagram
                                    size="40px"
                                />
                            </a>
                            <a href="">
                                <TiSocialLinkedin
                                    size="40px"
                                />
                            </a>
                            <a href="">
                                <TiSocialYoutube
                                    size="40px"
                                />
                            </a>
                        </div>
                    <br />
                    <h5 className="footer-title">Contact Me</h5>
                    <a href="">
                        <BsFillTelephoneFill size="20px" /><h6> 1-234-567-8901</h6>
                    </a>
                    <br /><br />
                    <a href="">
                        <BsEnvelopeFill size="20px" /><h6> dummy@email.com</h6>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;