import { Outlet } from 'react-router-dom';

const AuthPage = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="mt-20 w-[400px]">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthPage;
