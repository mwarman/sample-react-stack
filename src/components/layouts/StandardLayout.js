import { Outlet } from 'react-router-dom';

import Header from '../header/Header';
import Toasts from '../common/Toasts';

const StandardPage = () => {
  return (
    <>
      <Header />
      <div className="h-[calc(100vh_-_64px)] overflow-y-auto px-16 py-8">
        <Outlet />
      </div>
      <Toasts />
    </>
  );
};

export default StandardPage;
