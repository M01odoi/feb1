import React, { useState } from 'react';
import Login from '../Login';
import Signup from '../Signup';

const DoYouHaveAcc = () => {
  const [renderComponent, setRenderComponent] = useState({
      firstButton: <button onClick={() => {
        haveAcc(true)
      }}>
        Yes
      </button>, secondButton: <button onClick={() => {
        haveAcc(false)
      }}>No
      </button>, sign: null
    }
  )

  function haveAcc(haveAcc) {
    if (haveAcc) {
      setRenderComponent({
        firstButton: null, secondButton:null, sign: <Login login="admin@gmail.com" password="admin"/> });
    } else {
      setRenderComponent({
        firstButton: null, secondButton:null, sign:
          <Signup name="Alex" email="alex@gmail.com" password="1234" confpass="1234"/>
      });
    }
  }

  console.log(renderComponent);
  return (<>
    {renderComponent.firstButton}
    {renderComponent.secondButton}
    {renderComponent.sign}
  </>)
}


export default DoYouHaveAcc;