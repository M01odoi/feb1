import * as React from 'react';

const Home = ({ currentUser }:{currentUser?:string}) => {
  return (<>
      <h1>HOME</h1>
      {currentUser && <div>Welcome home, {currentUser}!</div>}
    </>
  );
};

export default Home;