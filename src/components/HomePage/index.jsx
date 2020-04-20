import React from 'react';

import './style.less';

const HomePage = (props) => {
  return (
    <div className='home-page'>
      <h1 className='title'>Welcome back!</h1>
      <p>Your email: {props.email}</p>
    </div>
  );
};

 export default HomePage;
