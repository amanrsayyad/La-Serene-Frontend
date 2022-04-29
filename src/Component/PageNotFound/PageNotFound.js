import React from 'react';
import './PageNotFound.css';
import { Link } from 'react-router-dom';
import notfound from '../../Assets/notfound.svg';

const PageNotFound = () => {
  return (
    <div className="notfoundpage">
        <img src={notfound} />
        <p>You are entering a wrong url please return to 
        <Link to="/">  Home</Link></p>
    </div>
  )
}

export default PageNotFound;