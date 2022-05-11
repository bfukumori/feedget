import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bell, List, X } from 'phosphor-react'
import logo from '../../assets/logo.svg'
import logoSm from '../../assets/logo-small.svg'
import DarkThemeToggleButton from '../DarkThemeToggleButton/DarkThemeToggleButton'

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Profile', href: '#', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

interface HeaderProps {
  isDarkTheme: boolean;
  toggleDarkTheme: () => void;
}

export function Header({isDarkTheme, toggleDarkTheme}:HeaderProps) {
  return (
    <Disclosure as="nav" className="bg-dark-surface_primary">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-dark-text_primary hover:text-dark-text_secondary hover:bg-dark-surface_secondary-300 focus:outline-none transition-colors focus:ring-2 focus:ring-offset-2 focus:focus:ring-offset-dark-surface_primary focus:ring-brand-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <X className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <List className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src={logoSm}
                    alt="NLW"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src={logo}
                    alt="NLW"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-dark-surface_secondary-300 text-dark-text_primary' : 'text-dark-text_secondary hover:bg-dark-surface_secondary-500 hover:text-dark-text_primary',
                          'px-3 py-2 rounded-md text-sm font-medium transition-colors focus:ring-2 focus:ring-offset-2 focus:focus:ring-offset-dark-surface_primary focus:ring-brand-500 focus:outline-none'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="bg-dark-surface_secondary-300 p-1 rounded-full text-dark-text_secondary hover:text-dark-text_primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:focus:ring-offset-dark-surface_primary focus:ring-brand-500 transition-colors"
                >
                  <span className="sr-only">View notifications</span>
                  <Bell className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative z-10">
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:focus:ring-offset-dark-surface_primary focus:ring-brand-500">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://github.com/bfukumori.png"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className={classNames( 'dark:bg-dark-surface_secondary-300 bg-light-surface_primary origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 focus:outline-none')}>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-light-surface_secondary-500 dark:bg-dark-surface_secondary-500' : '', 'block px-4 py-2 text-sm dark:text-dark-text_primary text-light-text_primary')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-light-surface_secondary-500 dark:bg-dark-surface_secondary-500' : '', 'block px-4 py-2 text-sm dark:text-dark-text_primary text-light-text_primary')}
                            title='Dark Theme Button'
                          >
                            <DarkThemeToggleButton isDarkTheme={isDarkTheme} toggleDarkTheme={toggleDarkTheme} />
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-light-surface_secondary-500 dark:bg-dark-surface_secondary-500' : '', 'block px-4 py-2 text-sm dark:text-dark-text_primary text-light-text_primary')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-dark-surface_secondary-300 text-dark-text_primary' : 'text-dark-text_secondary hover:bg-dark-surface_secondary-500 hover:text-dark-text_primary',
                    'block px-3 py-2 rounded-md text-base font-medium transition-colors'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
