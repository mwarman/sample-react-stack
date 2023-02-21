import Icon from '../icons/Icon';

import { useGetPreferences, useUpdatePreferences } from '../../../hooks/preferences.hooks';
import { Themes } from '../../../utils/constants';

const ThemeToggle = () => {
  const { data: preferences } = useGetPreferences();
  const { mutate: updatePreferences } = useUpdatePreferences();

  const toggleTheme = () => {
    const theme = preferences.theme === Themes.Dark ? Themes.Light : Themes.Dark;
    updatePreferences({ theme });
  };

  if (preferences?.theme === Themes.Dark) {
    return (
      <Icon
        name="moon"
        title="Switch to light theme"
        fixedWidth
        className="cursor-pointer"
        onClick={toggleTheme}
      />
    );
  } else {
    return (
      <Icon
        name="sun"
        title="Switch to dark theme"
        fixedWidth
        className="cursor-pointer text-amber-light"
        onClick={toggleTheme}
      />
    );
  }
};

export default ThemeToggle;
