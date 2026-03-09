import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="logo">
                <h1>ClipMeister</h1>
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
            <div className="auth">
                <button>Login</button>
                <button>Sign Up</button>
            </div>
        </header>
    );
};

export default Header;