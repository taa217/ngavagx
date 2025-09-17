import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { useAppStore } from '../../stores/useAppStore';
import { ROUTES } from '../../constants';

const MobileMenu: React.FC = () => {
  const { sidebarOpen, setSidebarOpen, isAuthenticated, user, logout } = useAppStore();

  const close = () => setSidebarOpen(false);
  const handleLogout = () => {
    logout();
    close();
  };

  return (
    <Transition.Root show={sidebarOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50 md:hidden" onClose={setSidebarOpen}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/40" />
        </Transition.Child>

        <div className="fixed inset-0 flex">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-200 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-200 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="relative mr-16 flex w-80 max-w-full flex-1">
              <div className="flex grow flex-col gap-y-2 overflow-y-auto bg-white px-4 pb-6 pt-4 shadow-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">N</span>
                    </div>
                    <span className="text-lg font-bold text-gray-900">NhavaGX</span>
                  </div>
                  <button
                    onClick={close}
                    className="p-2 rounded-md text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    aria-label="Close menu"
                  >
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <nav className="mt-4">
                  <ul className="space-y-1">
                    <li>
                      <Link to={ROUTES.HOME} onClick={close} className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100">
                        Home
                      </Link>
                    </li>
                    <li>
                      <a href="#how-it-works" onClick={close} className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100">
                        How it works
                      </a>
                    </li>
                    <li>
                      <a href="#fees" onClick={close} className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100">
                        Fees
                      </a>
                    </li>
                    <li>
                      <a href="#faq" onClick={close} className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100">
                        FAQ
                      </a>
                    </li>
                    <li>
                      <Link to={ROUTES.ABOUT} onClick={close} className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link to={ROUTES.CONTACT} onClick={close} className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>

                <div className="mt-4 border-t border-gray-200 pt-4">
                  {isAuthenticated && user ? (
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3 px-3">
                        <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                          <span className="text-primary-700 font-medium text-sm">{user.name.charAt(0).toUpperCase()}</span>
                        </div>
                        <span className="text-sm text-gray-700">{user.name}</span>
                      </div>
                      <Link to={ROUTES.DASHBOARD} onClick={close} className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100">
                        Dashboard
                      </Link>
                      <button onClick={handleLogout} className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-left text-base font-medium text-gray-700 hover:bg-gray-50">
                        Logout
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {/* Temporarily disabled navigation to login */}
                      {/* <Link to={ROUTES.LOGIN} onClick={close} className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"> */}
                      <button onClick={(e) => e.preventDefault()} className="w-full rounded-md px-3 py-2 text-left text-base font-medium text-gray-700 hover:bg-gray-100" aria-disabled>
                        Login
                      </button>
                      {/* </Link> */}
                      {/* Temporarily disabled navigation to register */}
                      {/* <Link to={ROUTES.REGISTER} onClick={close} className="block rounded-md bg-primary-600 px-3 py-2 text-base font-medium text-white hover:bg-primary-700"> */}
                      <button onClick={(e) => e.preventDefault()} className="w-full rounded-md bg-primary-600 px-3 py-2 text-left text-base font-medium text-white hover:bg-primary-700" aria-disabled>
                        Get Started
                      </button>
                      {/* </Link> */}
                    </div>
                  )}
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default MobileMenu;


