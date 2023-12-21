import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import mainlogo from '../../assets/coding-language.png';
import pro from '../../assets/image/web.png'
import king from '../../assets/image/king.png'
import diamond from '../../assets/image/diamond.png'
import home from '../../assets/image/home.png'
import book from '../../assets/image/book.png'
import admin from '../../assets/manager.png';

import './navbar.css';
// import Login from '../../containers/login/login';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <Router>
        <div>
        <div className="bit_navbar">
            <div className="bit_navbar-links">
                <div className="bit_navbar-links_logo">
                    <img alt="logo" src={mainlogo} style={{ height: 60, width: 60, marginLeft: 8 }} />
                    {/* <img src={logo} /> */}
                </div>
                <div className="bit_navbar-links_container">
                    {/* <p><a href="/home"><img alt="logo" src={home} style={{ height: 20, width: 20, marginRight: 4 }} /> Home</a></p> */}
                    {/* <p><a href="/problem"><img alt="logo" src={pro} style={{ height: 18, width: 18, marginRight: 4 }} />Problems</a></p> */}
                    {/* <p><a href="/leadboard"><img alt="logo" src={king} style={{ height: 18, width: 18, marginRight: 4 }} />LeaderBoard</a></p> */}
                    {/* <p><a href="/shop"><img alt="logo" src={diamond} style={{ height: 18, width: 18, marginRight: 4 }} />Shop</a></p> */}
                    {/* <p><a href="/library"><img alt="logo" src={book} style={{ height: 20, width: 20, marginRight: 4 }} />Library</a></p> */}
                    <Link to={'/home'} ><p><img alt="logo" src={home} style={{ height: 20, width: 20, marginRight: 4 }} /> Home</p></Link>
                    <Link to={"/problems"}><p><img alt="logo" src={pro} style={{ height: 18, width: 18, marginRight: 4 }} />Problems</p></Link>
                    <Link to="/leadboard"><p><img alt="logo" src={king} style={{ height: 18, width: 18, marginRight: 4 }} />LeaderBoard</p></Link>
                    <Link to={'/shop'}><p><img alt="logo" src={diamond} style={{ height: 18, width: 18, marginRight: 4 }} />Shop</p></Link>
                    <Link to={'/library'}><p><img alt="logo" src={book} style={{ height: 20, width: 20, marginRight: 4 }} />Library</p></Link>
                </div>
            </div>
            <div className="bit_navbar-sign">
                {/* <p>Sign-in</p> */}
                {/* <p><a href="/signin">Sign in</a></p> */}
                {/* <button type="button">Sign up</button> */}
                {/* <a href="/signup"><button>SignUp</button></a> */}
                <Link to={'/admin'}><p>Admin</p></Link>
                <Link to={'/signup'}><button>SignUp</button></Link>
            </div>
            <div className="bit_navbar-menu">
            {toggleMenu
                ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                        <div className="bit_navbar-menu_container scale-up-center">
                        <div className="bit_navbar-menu_conatiner-links">
                        {/* <p><a href="/home"><img alt="logo" src={home} style={{ height: 20, width: 20, marginRight: 4 }} /> Home</a></p>
                        <p><a href="/problem"><img alt="logo" src={pro} style={{ height: 18, width: 18, marginRight: 4 }} />Problems</a></p>
                        <p><a href="/leadboard"><img alt="logo" src={king} style={{ height: 18, width: 18, marginRight: 4 }} />LeaderBoard</a></p>
                        <p><a href="/shop"><img alt="logo" src={diamond} style={{ height: 18, width: 18, marginRight: 4 }} />Shop</a></p>
                        <p><a href="/library"><img alt="logo" src={book} style={{ height: 20, width: 20, marginRight: 4 }} />Library</a></p> */}
                        <Link to={'/home'} ><p><img alt="logo" src={home} style={{ height: 20, width: 20, marginRight: 4 }} /> Home</p></Link>
                        <Link to={"/problems"}><p><img alt="logo" src={pro} style={{ height: 18, width: 18, marginRight: 4 }} />Problems</p></Link>
                        <Link to="/leadboard"><p><img alt="logo" src={king} style={{ height: 18, width: 18, marginRight: 4 }} />LeaderBoard</p></Link>
                        <Link to={'/shop'}><p><img alt="logo" src={diamond} style={{ height: 18, width: 18, marginRight: 4 }} />Shop</p></Link>
                        <Link to={'/library'}><p><img alt="logo" src={book} style={{ height: 20, width: 20, marginRight: 4 }} />Library</p></Link>
                    </div>
                    <div className="bit_navbar-menu_container-links-sign">
                        {/* <p>Sign in</p>
                        <button type="button">Sign up</button> */}
                        <Link to={'/admin'}><p className='admin'>Admin</p></Link>
                        <Link to={'/signup'}><button>SignUp</button></Link>
                    </div>
                    </div>
                    )}
            </div>
        </div>
      

        </div>
        </Router>
    )
}

export default Navbar;