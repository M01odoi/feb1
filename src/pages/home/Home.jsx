import React from 'react';
import './home.css'

const Home = ({ currentUser }) => {
  console.log(currentUser);
  return (<>
      <h1>HOME</h1>
      {currentUser && <div>Welcome home, {currentUser}!</div>}
    </>
  );
};

export default Home;