import merge from 'lodash/merge';

/**
 * Default validation options.
 */
const DEFAULT_OPTIONS = {
  abortEarly: false,
  stripUnknown: true,
};

/**
 * Synchronously validate an object.
 * @param {Object} schema A Yup Schema.
 * @param {Object} value The object to be validated.
 * @param {Object} [options] Optional. Yup validation options.
 * @returns The validated object with defaults applied.
 * @throws A `ValidationError` if validation is not successful.
 */
export const validateSync = (schema, value, options = {}) => {
  const validateOptions = merge({}, DEFAULT_OPTIONS, options);
  return schema.validateSync(value, validateOptions);
};
