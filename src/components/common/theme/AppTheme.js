/**
 * The `AppTheme` React component.
 * @module components/common/theme/AppTheme
 */

import { useGetPreferences } from '../../../hooks/preferences.hooks';

/**
 * The `AppTheme` component applies application-wide theme styling
 * based upon user preferences.
 * @function
 * @param {Object} props The component properties.
 * @param {JSXElement} props.children The inner content, i.e. the application.
 * @returns {JSXElement} JSX
 * @example
 * <AppTheme>
 *  <RouterProvider router={router} />
 * </AppTheme>
 */
const AppTheme = ({ children }) => {
  const { data: preferences } = useGetPreferences();

  return (
    <div id="theme" className={preferences.theme}>
      <div className="bg-white text-slate-700 dark:bg-slate-900 dark:text-slate-light/70">
        {children}
      </div>
    </div>
  );
};

export default AppTheme;
