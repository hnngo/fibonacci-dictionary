import React from 'react';
import { Link } from 'react-router-dom';

const NewPage = () => {
  return (
    <div>
      Other page
      <Link to="/">
        Back to home page
      </Link>
    </div>
  )
};

export default NewPage;
