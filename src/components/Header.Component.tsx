import React from "react";

import { BrowserRouter as Router, Link } from "react-router-dom";
import { ReactComponent as Logo } from '../bear.svg';

import './header.styles.scss';

function Header(): JSX.Element {
    return (
      <Router>
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='/home'>
                    HOME
                </Link>
                <Link className='option' to='/about'>
                    ABOUT
                </Link>
                <Link className='option' to='/contact'>
                    CONTACT
                </Link>
            </div>
        </div>
      </Router>
    );
  }
  
  export default Header;