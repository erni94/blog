import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRout = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.rootReducer.isLoggedIn);
  

  if (!isLoggedIn) {
    return <Navigate to={'/sign-in'} />;
  }

  return children;
};

export default PrivateRout;
