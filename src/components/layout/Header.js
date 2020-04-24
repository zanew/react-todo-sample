import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
          <h1>TodoList</h1>
          <Link style={linkStyle} to="/">Home</Link> |  <Link style={linkStyle} to="/about">About</Link>
        </header>
    );
}


const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
};

// const appears to be the standard for immutable variables in React
const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
};

// you have to export every functional component that you use
export default Header;
