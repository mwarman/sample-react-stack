import { Outlet } from "react-router-dom";

import Header from "../header/Header";

const StandardPage = () => {
  return (
    <>
      <Header />
      <div className="h-[calc(100vh_-_80px)] overflow-y-auto">
        <Outlet />
      </div>
    </>
  );
};

export default StandardPage;
