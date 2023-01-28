import { Outlet } from 'react-router-dom';

import Header from '../header/Header';
import WithModals from '../common/modals/WithModals';
import { ModalContextProvider } from '../../contexts/modal.context';
import Toasts from '../common/Toasts';

const StandardLayout = () => {
  return (
    <>
      <ModalContextProvider>
        <WithModals>
          <Header />
          <div className="h-[calc(100vh_-_64px)] overflow-y-auto px-16 py-8">
            <Outlet />
          </div>
          <Toasts />
        </WithModals>
      </ModalContextProvider>
    </>
  );
};

export default StandardLayout;
