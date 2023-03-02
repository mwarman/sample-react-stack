/**
 * React context to manage application modal state.
 * @module contexts/modal
 */
/**
 * The ModalOptions object.
 * @typedef {Object} ModalOptions
 * @property {string} [modal=''] The name of the modal to show.
 * @property {Object} [props={}] A context object whose properties are passed to the active modal.
 * @example
 * const modalOptions = {
 *   modal: 'deleteTodo',
 *   props: {
 *    todoId: '1A2B3C4D',
 *   }
 * }
 */

import React, { useMemo, useState } from 'react';
import merge from 'lodash/merge';

/**
 * Default ModalOptions value.
 * @type ModalOptions
 */
const DEFAULT_OPTIONS = {
  modal: '',
  props: {},
};

/** React context for ModalOptions. Controls the display of Modal components. */
export const ModalContext = React.createContext();

/**
 * The `ModalContextProvider` component returns the React Context `Provider`
 * for the `ModalContext`.
 * @function
 * @param {Object} props The component properties.
 * @returns {JSXElement} A JSX element which serves as the React Context
 * provider for modals. Children may consume the context values with the
 * `useModalContext` hook.
 */
export const ModalContextProvider = (props) => {
  const [options, setOptions] = useState(DEFAULT_OPTIONS);

  /**
   * Sets the value of `ModalOptions`. When called with a `null` value,
   * the `ModalOptions` are set to the default value.
   * @function
   * @param {ModalOptions} options A `ModalOptions` object value to set.
   */
  const setModalOptions = (options) => {
    setOptions(merge({}, DEFAULT_OPTIONS, options));
  };

  /**
   * Memoize the context value to prevent unnecessary re-rendering of child
   * components.
   */
  const value = useMemo(() => ({ modalOptions: options, setModalOptions }), [options]);

  return <ModalContext.Provider value={value} {...props} />;
};
