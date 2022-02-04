import React from 'react';
import DoYouHaveAcc from '../components/DoYouHaveAcc';
import '../home.css'

const Home = ({ currentUser }) => {
  return (<>
    <h1>HOME</h1>
    {currentUser && <div>Welcome home, {currentUser}!</div>}
    </>
    // <DoYouHaveAcc/>
    );
    };

    export default Home;