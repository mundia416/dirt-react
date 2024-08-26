import React from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation';
type Props = {
    navigationOptions?: {
        name: string,
        href: string,
    }[]

    userNavigationOptions?: {
        name: string,
        href: string
    }[],
    children: any,
    user: {
        name: string,
        email: string,
        imageUrl?: string
    },
    logoSrc: string,
}

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}



export default function StackedLayout({
    navigationOptions,
    userNavigationOptions,
    user,
    logoSrc,
    children }: Props) {



    const pathname = usePathname();
    console.log({ pathname })

    return (
        <>
            <div className="min-h-full">
                <Disclosure as="nav" className="border-b border-gray-200 bg-white">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 justify-between">
                            <div className="flex">
                                <div className="flex flex-shrink-0 items-center">
                                    <img
                                        alt="Company Name"
                                        src={logoSrc}
                                        className="block h-8 w-auto lg:hidden"
                                    />

                                    <img
                                        alt="Company Name"
                                        src={logoSrc}
                                        className="hidden h-8 w-auto lg:block"
                                    />
                                </div>
                                <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                                    {navigationOptions?.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            aria-current={pathname === item.href ? 'page' : undefined}
                                            className={classNames(
                                                pathname === item.href
                                                    ? 'border-indigo-500 text-gray-900'
                                                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                                                'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium',
                                            )}
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <div className="hidden sm:ml-6 sm:flex sm:items-center">


                                {/* Profile dropdown */}
                                <Menu as="div" className="relative ml-3">
                                    <div>
                                        <MenuButton className="relative flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                            <span className="absolute -inset-1.5" />
                                            <span className="sr-only">Open user menu</span>

                                            {user.imageUrl ?
                                                <img alt="" src={user.imageUrl} className="h-8 w-8 rounded-full" />
                                                :
                                                <UserCircleIcon
                                                    className='h-8 w-8'
                                                />
                                            }
                                        </MenuButton>
                                    </div>
                                    <MenuItems
                                        transition
                                        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                    >
                                        {userNavigationOptions?.map((item) => (
                                            <MenuItem key={item.name}>
                                                <a href={item.href} className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                                                    {item.name}
                                                </a>
                                            </MenuItem>
                                        ))}
                                    </MenuItems>
                                </Menu>
                            </div>
                            <div className="-mr-2 flex items-center sm:hidden">
                                {/* Mobile menu button */}
                                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                                    <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                                </DisclosureButton>
                            </div>
                        </div>
                    </div>

                    <DisclosurePanel className="sm:hidden">
                        <div className="space-y-1 pb-3 pt-2">
                            {navigationOptions?.map((item) => (
                                <DisclosureButton
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    aria-current={pathname === item.href ? 'page' : undefined}
                                    className={classNames(
                                        pathname === item.href
                                            ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                                            : 'border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800',
                                        'block border-l-4 py-2 pl-3 pr-4 text-base font-medium',
                                    )}
                                >
                                    {item.name}
                                </DisclosureButton>
                            ))}
                        </div>
                        <div className="border-t border-gray-200 pb-3 pt-4">
                            <div className="flex items-center px-4">
                                <div className="flex-shrink-0">
                                    {user.imageUrl ?
                                        <img
                                            alt="" src={user.imageUrl || ''}
                                            className="h-10 w-10 rounded-full" />

                                        :
                                        <UserCircleIcon
                                            className='h-8 w-8'
                                        />
                                    }

                                </div>
                                <div className="ml-3">
                                    <div className="text-base font-medium text-gray-800">{user.name}</div>
                                    <div className="text-sm font-medium text-gray-500">{user.email}</div>
                                </div>

                            </div>
                            <div className="mt-3 space-y-1">
                                {userNavigationOptions?.map((item) => (
                                    <DisclosureButton
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                                    >
                                        {item.name}
                                    </DisclosureButton>
                                ))}
                            </div>
                        </div>
                    </DisclosurePanel>
                </Disclosure>

                <div className="py-10">
                    <header>
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">Dashboard</h1>
                        </div>
                    </header>
                    <main>
                        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">{children}</div>
                    </main>
                </div>
            </div>
        </>
    )
}
