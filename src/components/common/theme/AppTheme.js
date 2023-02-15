import { useGetPreferences } from '../../../hooks/preferences.hooks';

const AppTheme = ({ children }) => {
  const { data: preferences } = useGetPreferences();

  return (
    <div id="theme" className={preferences.theme}>
      <div className="bg-white text-slate-700 dark:bg-slate-900 dark:text-slate-300/70">
        {children}
      </div>
    </div>
  );
};

export default AppTheme;
