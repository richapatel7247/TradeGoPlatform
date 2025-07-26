import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function PrivateRoute() {
  const isauth = useSelector((state) => state.user.isauth);
  return isauth ? <Outlet /> : <Navigate to="/" replace />;
}