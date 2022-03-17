import { useContext } from 'react';
import { AuthContext } from '../../Context/auth.context';
import { Navigate } from 'react-router-dom';

function Locked({ children }) {
  const { loggedIn, isLoading } = useContext(AuthContext);

  if (isLoading) return <p>Loading...</p>;

  if (!loggedIn) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
}

export default Locked;