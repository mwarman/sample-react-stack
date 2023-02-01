import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
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
  faNotdef,
  faRotate,
  faTriangleExclamation,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

const selectIcon = (name) => {
  switch (name) {
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
    case 'rotate':
      return faRotate;
    case 'triangle-exclamation':
      return faTriangleExclamation;
    case 'xmark':
      return faXmark;
    default:
      return faNotdef;
  }
};

const Icon = ({ name, ...props }) => {
  return <FontAwesomeIcon icon={selectIcon(name)} {...props} />;
};

export default Icon;