import { Switch } from '@headlessui/react'

interface DarkThemeToggleButtonProps {
  isDarkTheme: boolean;
  toggleDarkTheme: () => void;
}

export default function DarkThemeToggleButton({isDarkTheme, toggleDarkTheme} : DarkThemeToggleButtonProps) {
 
  return (
    <Switch.Group>
      <div className="absolute top-4 right-4 md:top-4 md:right-8 items-end">
        <Switch.Label className="mr-4 text-dark-text_secondary">Dark theme</Switch.Label>
        <Switch
          checked={isDarkTheme}
          onChange={toggleDarkTheme}
          className={`${
            isDarkTheme ? 'bg-brand-300' : 'bg-dark-surface_secondary-300'
          } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-dark-surface_primary`}
        >
          <span
            className={`${
              isDarkTheme ? 'translate-x-6' : 'translate-x-1'
            } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
          />
        </Switch>
      </div>
    </Switch.Group>
  )
}