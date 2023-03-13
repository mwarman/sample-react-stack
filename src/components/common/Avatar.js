/**
 * The `Avatar` React component.
 * @module components/common/Avatar
 */

import classNames from 'classnames';
import trim from 'lodash/trim';

/**
 * Color options and their corresponding CSS classes.
 */
const colorOptions = {
  blue: 'bg-blue/70 text-white/80',
  green: 'bg-green/70 text-white/80',
  orange: 'bg-orange/70 text-white/80',
  purple: 'bg-violet/70 text-white/80',
  red: 'bg-red/70 text-white/80',
  slate: 'bg-slate/70 text-white/80',
  yellow: 'bg-yellow/70 text-white/80',
};

/**
 * Returns the CSS classes for a color.
 * @param {string} name A color name.
 * @returns {string} The classes which correspond to the color.
 */
const getColorClasses = (name) => {
  const colors = Object.keys(colorOptions);
  const color = colorOptions[colors[name.length % colors.length]];
  return color;
};

/**
 * The `Avatar` component renders a colored user avatar which displays the
 * user's initial. Renders when `name` value is passed.
 * @function
 * @param {Object} props The component properties.
 * @param {string} [props.className] Optional additional classes applied to the avatar element.
 * @param {string} [props.name=''] Optional. A name. Must be provided to render.
 * @returns {JSXElement} JSX
 * @example
 * <Avatar name='Bob' />
 * // renders Avatar for Bob
 * <Avatar name='' />
 * // renders null
 */
const Avatar = ({ className, name = '' }) => {
  const avatarName = trim(name);

  if (avatarName) {
    const colorClasses = getColorClasses(avatarName);

    return (
      <div
        className={classNames(
          'flex h-10 w-10 items-center justify-center rounded-full text-xl font-bold uppercase',
          colorClasses,
          className,
        )}
        title={avatarName}
        data-testid="avatar"
      >
        <span>{avatarName.charAt(0)}</span>
      </div>
    );
  }

  return null;
};

export default Avatar;
