import { Outlet } from 'react-router-dom';

import Header from '../header/Header';
import WithModals from '../common/modals/WithModals';
import Toasts from '../common/Toasts';

const StandardLayout = () => {
  return (
    <>
      <Header />
      <div className="h-[calc(100vh_-_64px)] overflow-y-auto px-16 py-8">
        <WithModals>
          <Outlet />
        </WithModals>
      </div>
      <Toasts />
    </>
  );
};

export default StandardLayout;
