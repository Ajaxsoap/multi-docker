import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <div>
      i'm some other page!
      <Link to="/">Go to home</Link>
    </div>
  );
};