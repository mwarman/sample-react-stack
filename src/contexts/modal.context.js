import React, { useMemo, useState } from 'react';
import merge from 'lodash/merge';

/** Default ModalOptions value */
const DEFAULT_OPTIONS = {
  modal: '',
  props: {},
};

/** React context for ModalOptions. Controls the display of Modal components. */
export const ModalContext = React.createContext();

/**
 * The `ModalContextProvider` component returns the React Context `Provider`
 * for the `ModalContext`.
 * @param {Object} props The component properties.
 * @returns JSX
 */
export const ModalContextProvider = (props) => {
  const [options, setOptions] = useState(DEFAULT_OPTIONS);

  /**
   * Sets the value of `ModalOptions`. When called with a `null` value,
   * the `ModalOptions` are set to the default value.
   * @param {Object} options A `ModalOptions` object value to set.
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
