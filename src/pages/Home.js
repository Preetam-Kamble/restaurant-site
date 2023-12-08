import React from 'react';
import Layout from '../components/Layout/Layout';
import {Link} from "react-router-dom";
import Banner from '../images/bgimage.jpg';
import "../styles/HomeStyles.css";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{backgroundImage:`url(${Banner})`}}>
        <div className="headerContainer">
          <h1>Welcome to our Restaurant-Website</h1>
          <p>Best food in india</p>
          <Link to="/menu">
          <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
