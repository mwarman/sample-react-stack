/**
 * The `Icon` React component.
 * @module components/common/icons/Icon
 */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faAngleDown,
  faAngleUp,
  faArrowDown,
  faArrowLeft,
  faArrowRight,
  faArrowUp,
  faArrowRightFromBracket,
  faChevronLeft,
  faChevronRight,
  faCircleNotch,
  faEllipsisVertical,
  faListCheck,
  faMagnifyingGlass,
  faMinus,
  faMoon,
  faNotdef,
  faRotate,
  faSun,
  faTriangleExclamation,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

/**
 * Returns the icon component matching the supplied name.
 * @param {string} name The icon name.
 * @returns {JSXElement} The icon.
 */
const selectIcon = (name) => {
  switch (name) {
    case 'angle-down':
      return faAngleDown;
    case 'angle-up':
      return faAngleUp;
    case 'arrow-down':
      return faArrowDown;
    case 'arrow-left':
      return faArrowLeft;
    case 'arrow-right':
      return faArrowRight;
    case 'arrow-right-from-bracket':
      return faArrowRightFromBracket;
    case 'arrow-up':
      return faArrowUp;
    case 'chevron-left':
      return faChevronLeft;
    case 'chevron-right':
      return faChevronRight;
    case 'circle-notch':
      return faCircleNotch;
    case 'ellipsis-vertical':
      return faEllipsisVertical;
    case 'list-check':
      return faListCheck;
    case 'magnifying-glass':
      return faMagnifyingGlass;
    case 'minus':
      return faMinus;
    case 'moon':
      return faMoon;
    case 'rotate':
      return faRotate;
    case 'sun':
      return faSun;
    case 'triangle-exclamation':
      return faTriangleExclamation;
    case 'xmark':
      return faXmark;
    default:
      return faNotdef;
  }
};

/**
 * The `Icon` component renders an icon. Wraps the `FontAwesomeIcon` component.
 * @function
 * @param {Object} props The component properties.
 * @param {string} props.name The icon name.
 * @param {*} [props....props] Any additional properties added to the icon
 * element.
 * @returns {JSXElement} JSX
 * @see {@link https://fontawesome.com/v6/docs/web/use-with/react/style Icon Styling with React}
 * @example
 *  <Icon name="circle-notch" spin className="inline-block" />
 */
const Icon = ({ name, ...props }) => {
  return <FontAwesomeIcon icon={selectIcon(name)} {...props} />;
};

export default Icon;
