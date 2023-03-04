/**
 * The `Label` React  component.
 * @module components/common/forms/Label
 */

import classNames from 'classnames';

/**
 * The `Label` component renders a styled form field label element.
 * @function
 * @param {Object} props The component properties.
 * @param {JSXElement} props.children The inner content. The label value.
 * @param {string} [props.className] Optional additional classes applied to the label element.
 * @param {*} [props....props] Any additional properties added to the label element.
 * @returns {JSXElement} JSX
 * @example
 * <Label htmlFor="usernameField">Username</Label>
 */
const Label = ({ children, className, ...props }) => {
  if (props.htmlFor) {
    return (
      <label className={classNames('text-sm font-bold', className)} {...props}>
        {children}
      </label>
    );
  }

  return null;
};

export default Label;
