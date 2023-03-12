/**
 * Hooks to interact with the `ModalContext`.
 * @module hooks/modal
 * @see {@link contexts/modal}
 */

import { useContext } from 'react';

import { ModalContext } from '../contexts/modal.context';

/**
 * Hook which returns the current value of the `ModalContext` and the functions
 * to mutate the context value.
 * @function
 * @returns {Object} The current `ModalContext` value and the functions to mutate it.
 * @example
 * const {modalOptions, setModalOptions} = useModalContext();
 */
export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModalContext hook must be used within a ModalContextProvider');
  }

  return context;
};
