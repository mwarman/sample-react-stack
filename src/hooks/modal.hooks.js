import { useContext } from 'react';

import { ModalContext } from '../contexts/modal.context';

/**
 * A hook which returns the current value of the `ModalContext` React Context.
 * The hook provides access to the context value and the functions to mutate it.
 *
 * Usage:
 * ```
 * const {modalOptions, setModalOptions} = useModalContext();
 * ```
 * @returns The current `ModalContext` value.
 */
export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModalContext hook must be used within a ModalContextProvider');
  }

  return context;
};
