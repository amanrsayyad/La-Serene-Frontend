import React from 'react';
import { Link } from 'react-router-dom';
import './Book.css';

const Book = () => {
  return (
    <div className="book__btn">
        <Link to="/Executive">
            Book Now
        </Link>
    </div>
  )
}

export default Book;