import { Outlet } from "react-router-dom";

const AuthPage = () => {
  return (
    <div className="flex h-[calc(100vh_-_64px)] w-screen items-center justify-center">
      <div className="h-1/2 w-1/2">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthPage;
