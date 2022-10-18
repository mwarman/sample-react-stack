import { Outlet } from 'react-router-dom';

const AuthPage = () => {
  return (
    <div className="flex h-[calc(100vh_-_64px)] w-screen items-center justify-center">
      <div className="h-3/4 w-[400px]">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthPage;
