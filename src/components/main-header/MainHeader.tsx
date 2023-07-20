import React from 'react'
import logo from "./../../images/Logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./navs.css";
import icon from "./../../images/Icon.png";
import icon1 from "./../../images/Icon (1).png";
import icon2 from "./../../images/Icon (2).png";
import icon3 from "./../../images/Icon (3).png";
import dog from   "./../../images/dog1 1.png";
import pet1 from "./../../images/pets.png";
import pet2 from "./../../images/pet.png";
import pet3 from "./../../images/canned-food.png";
import pet4 from "./../../images/shopping-bag.png";



const MainHeader = () => {
    return (
        <div className='main-head'>
            <div className='container'>
                <div className='navs-landing'>
                    <div className='navs'>
                        <nav className="navbar navbar-expand-lg">
                            <div className="container-fluid">
                                <a className="navbar-brand" href="#"><img src={logo} alt="" /></a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav m-auto mb-2 mb-lg-0 gap-3">
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Services</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Shop</a>
                                        </li> <li className="nav-item">
                                            <a className="nav-link" href="#">Blog</a>
                                        </li> <li className="nav-item">
                                            <a className="nav-link" href="#">Pages</a>
                                        </li>
                                    </ul>
                                    <form className="d-flex" role="search">
                                        <button className="btn " type="submit"><FontAwesomeIcon icon={faShoppingCart} />(1 item )</button>
                                    </form>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className='landing'>
                        <div className='landing-text'>
                            <div className='text-1'>
                                <span>We care for your pet</span>
                                <h1>We Help You Care for Animals with Nutrition</h1>
                                <p>All offers are subject to availability. Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Consectetur a erat nam at. Potenti nullam ac tortor vitae purus faucibus ornare.</p>
                            </div>
                            <div className='text-2'>
                                <div className="text-2-grid">
                                    <img src={icon} alt="" />
                                    <div className='grid-text'>
                                        <h3>Trust & Safety</h3>
                                        <p>Velit euismod pellentes</p>
                                    </div>
                                </div>
                                <div className="text-2-grid">
                                    <img src={icon1} alt="" />
                                    <div className='grid-text'>
                                        <h3>Support</h3>
                                        <p>Egestas quis ipsum velit </p>
                                    </div>
                                </div>
                                <div className="text-2-grid">
                                    <img src={icon2} alt="" />
                                    <div className='grid-text'>
                                        <h3>Discounts </h3>
                                        <p>Bibendum ut tristique </p>
                                    </div>
                                </div>
                                <div className="text-2-grid">
                                    <img src={icon3} alt="" />
                                    <div className='grid-text'>
                                        <h3>Guarantee</h3>
                                        <p>Convallis tellus id interdum </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='landing-img'>
                            <img src={dog} alt="" />
                        </div>
                    </div>
                </div>
                <div className='landing-footer'>
                    <ul className='landing-foot'>
                        <li className='foot-1'>
                            <img src={pet1} alt="" />
                            <div className='foot-text'>
                                <h3>120+</h3>
                                <p>Sutisfide Cliens</p>
                            </div>
                        </li>
                        <li className='foot-1'>
                            <img src={pet2} alt="" />
                            <div className='foot-text'>
                                <h3>20+</h3>
                                <p>Years Experience</p>
                            </div>
                        </li>
                        <li className='foot-1'>
                            <img src={pet3} alt="" />
                            <div className='foot-text'>
                                <h3>70+</h3>
                                <p>Brands Available</p>
                            </div>
                        </li>
                        <li className='foot-1'>
                            <img src={pet4} alt="" />
                            <div className='foot-text'>
                                <h3>200+</h3>
                                <p>Products for pets</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MainHeader;