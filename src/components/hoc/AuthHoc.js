import { Navigate } from 'react-router-dom';

const AuthHoc = (props) => {
  const {isAuth,children} = props;
  if (!isAuth){
    return <Navigate to='/login'/>
  }
  return children;
}

export default AuthHoc;