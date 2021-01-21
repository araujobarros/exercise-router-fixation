import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h2> Home </h2>
    <p> My awesome Home component </p>
    <Link to='/About'>About</Link> <br /> 
    <Link to='/Users'>Users</Link>
  </div>
);

export default Home;