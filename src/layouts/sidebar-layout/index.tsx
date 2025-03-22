'use client'
import React, { } from 'react'
import { useState } from 'react'
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
} from '@headlessui/react'
import {
    Bars3Icon,
    BellIcon,
    Cog6ToothIcon,
    UserCircleIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, ChevronRightIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { usePathname } from 'next/navigation';
import { Text } from '@mundia/dirt-react'


export type NavItemProps = {
    //the name of the nav item, showing on the navigation list
    name: string,
    href: string,
    //an icon from @headlessui/react. i.e icon={FolderIcon}
    icon: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
        title?: string;
        titleId?: string;
    } & React.RefAttributes<SVGSVGElement>>,
    //optional sub-items for collapsible navigation
    subItems?: {
        name: string,
        href: string
    }[]
}


type NavItemsGroup = {
    navigationOptions?: NavItemProps[]
    heading?: string
}

type Props = {
    navigationGroups?: NavItemsGroup[]
    userDropdownOptions?: {
        name: string,
        //an optional href to redirect to a different page
        href?: string
        //an optional onClick listener to perform an action when a user dropdown option is clicked
        onClick?: () => void
    }[],
    children: any,
    user: {
        name: string,
        imageUrl?: string
    },
    sidebar?: 'wide' | 'thin'
    logoSrc?: string,
    settingsNavItem?: {
        name?: string
        href?: string
        // onClick?: () => void
        icon?: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
            title?: string;
            titleId?: string;
        } & React.RefAttributes<SVGSVGElement>>
    },
    // change the content of where there is a search bar
    customHeaderContent?: React.ReactNode
    showNotificationIcon?: boolean
    xmarkPadding?: string
    logoPadding?: string
}



function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export default function SidebarLayout({
    navigationGroups,
    userDropdownOptions,
    user,
    logoSrc,
    children,
    sidebar = 'wide',
    customHeaderContent,
    showNotificationIcon = true,
    settingsNavItem,
    xmarkPadding = 'pt-5',
    logoPadding = ''
}: Props) {

    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [expandedItems, setExpandedItems] = useState<{[key: string]: boolean}>({})
    const pathname = usePathname();

    const toggleExpand = (itemName: string) => {
        setExpandedItems(prev => ({
            ...prev,
            [itemName]: !prev[itemName]
        }));
    };

    const isSubItemActive = (item: NavItemProps) => {
        if (!item.subItems) return false;
        return item.subItems.some(subItem => subItem.href === pathname);
    };

    return (
        <>

            <div>
                <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 lg:hidden">
                    <DialogBackdrop
                        transition
                        className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
                    />

                    <div className="fixed inset-0 flex">
                        <DialogPanel
                            transition
                            className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
                        >
                            <TransitionChild>
                                <div className={`absolute left-full top-0 flex w-16 justify-center ${xmarkPadding} duration-300 ease-in-out data-[closed]:opacity-0`}>
                                    <button type="button" onClick={() => setSidebarOpen(false)} className="-m-2.5 p-2.5">
                                        <span className="sr-only">Close sidebar</span>
                                        <XMarkIcon aria-hidden="true" className="h-6 w-6 text-white" />
                                    </button>
                                </div>
                            </TransitionChild>
                            {/* Sidebar component, swap this element with another sidebar if you like */}
                            <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 ring-1 ring-white/10">
                                <div className={`flex h-16 shrink-0 items-center ${logoPadding}`}>

                                    {logoSrc &&
                                        <>
                                            <img
                                                alt="Company Name"
                                                src={logoSrc}
                                                className="block h-8 w-auto "
                                            />
                                        </>
                                    }
                                </div>
                                <nav className="flex flex-1 flex-col">
                                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                        {navigationGroups?.map(({ navigationOptions, heading }, index) => (
                                            <li key={index}>
                                                {heading && <div className="text-xs font-semibold leading-6 text-gray-400">{heading}</div>}
                                                <ul role="list" className="-mx-2 space-y-1">
                                                    {navigationOptions?.map((item) => (
                                                        <li key={item.name}>
                                                            {item.subItems ? (
                                                                <>
                                                                    <button
                                                                        onClick={() => toggleExpand(item.name)}
                                                                        className={classNames(
                                                                            isSubItemActive(item)
                                                                                ? 'bg-gray-800 text-white'
                                                                                : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                                                                            'group flex w-full justify-between gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                                                                        )}
                                                                    >
                                                                        <div className="flex gap-x-3">
                                                                            <item.icon aria-hidden="true" className="h-6 w-6 shrink-0" />
                                                                            {item.name}
                                                                        </div>
                                                                        <ChevronRightIcon 
                                                                            className={`h-5 w-5 transform transition-transform duration-200 ease-in-out ${
                                                                                expandedItems[item.name] ? 'rotate-90' : ''
                                                                            }`} 
                                                                        />
                                                                    </button>
                                                                    {expandedItems[item.name] && (
                                                                        <ul className="mt-1 pl-8 space-y-1">
                                                                            {item.subItems.map((subItem) => (
                                                                                <li key={subItem.name}>
                                                                                    <a
                                                                                        onClick={() => setSidebarOpen(false)}
                                                                                        href={subItem.href}
                                                                                        className={classNames(
                                                                                            pathname === subItem.href
                                                                                                ? 'bg-gray-800 text-white'
                                                                                                : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                                                                                            'block rounded-md py-2 pl-2 text-sm',
                                                                                        )}
                                                                                    >
                                                                                        {subItem.name}
                                                                                    </a>
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    )}
                                                                </>
                                                            ) : (
                                                                <a
                                                                    onClick={() => setSidebarOpen(false)}
                                                                    href={item.href}
                                                                    className={classNames(
                                                                        pathname === item.href
                                                                            ? 'bg-gray-800 text-white'
                                                                            : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                                                                        'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                                                                    )}
                                                                >
                                                                    <item.icon aria-hidden="true" className="h-6 w-6 shrink-0" />
                                                                    {item.name}
                                                                </a>
                                                            )}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </li>
                                        ))}

                                        {
                                            settingsNavItem &&
                                            <li className="mt-auto">
                                                <a
                                                    // onClick={settingsNavItem.onClick}
                                                    href={settingsNavItem.href ? settingsNavItem.href : '/settings'}
                                                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                                                >
                                                    <Cog6ToothIcon aria-hidden="true" className="h-6 w-6 shrink-0" />
                                                    {settingsNavItem.name ? settingsNavItem.name : 'Settings'}
                                                </a>
                                            </li>
                                        }

                                    </ul>
                                </nav>
                            </div>
                        </DialogPanel>
                    </div>
                </Dialog>

                {/* Static sidebar for desktop */}
                <div className={`hidden lg:fixed lg:inset-y-0 lg:z-40 lg:flex ${sidebar === 'thin' ? 'lg:w-24' : 'lg:w-72'} lg:flex-col`}>
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4">
                        <div className="flex h-16 shrink-0 items-center">
                            {logoSrc &&
                                <>
                                    <img
                                        alt="Company Name"
                                        src={logoSrc}
                                        className="block h-8 w-auto"
                                    />

                                </>
                            }
                        </div>
                        <nav className="flex flex-1 flex-col">
                            <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                {navigationGroups?.map(({ navigationOptions, heading }, index) => (

                                    <li key={index}>
                                        {heading && <div className="text-xs font-semibold leading-6 text-gray-400">{heading}</div>}
                                        <ul role="list" className="-mx-2 space-y-1">
                                            {navigationOptions?.map((item) => (
                                                sidebar === 'thin' ?
                                                    <li key={item.name}>
                                                        <a
                                                            href={item.href}
                                                            className={classNames(
                                                                pathname === item.href || isSubItemActive(item)
                                                                    ? 'bg-gray-800 text-white' 
                                                                    : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                                                                'group flex flex-col items-center justify-center gap-x-3 rounded-md p-3 text-sm font-semibold leading-6',
                                                            )}
                                                        >
                                                            <item.icon aria-hidden="true" className="h-6 w-6 shrink-0" />
                                                            <Text
                                                                color
                                                                className={`hover:text-gray-100 ${pathname === item.href || isSubItemActive(item) ? 'text-gray-100' : 'text-gray-200'}`}
                                                                type='text-small'
                                                            >{item.name}</Text>
                                                        </a>
                                                    </li>
                                                    :
                                                    <li key={item.name}>
                                                        {item.subItems ? (
                                                            <>
                                                                <button
                                                                    onClick={() => toggleExpand(item.name)}
                                                                    className={classNames(
                                                                        isSubItemActive(item)
                                                                            ? 'bg-gray-800 text-white'
                                                                            : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                                                                        'group flex w-full justify-between gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                                                                    )}
                                                                >
                                                                    <div className="flex gap-x-3">
                                                                        <item.icon aria-hidden="true" className="h-6 w-6 shrink-0" />
                                                                        {item.name}
                                                                    </div>
                                                                    <ChevronRightIcon 
                                                                        className={`h-5 w-5 transform transition-transform duration-200 ease-in-out ${
                                                                            expandedItems[item.name] ? 'rotate-90' : ''
                                                                        }`} 
                                                                    />
                                                                </button>
                                                                {expandedItems[item.name] && (
                                                                    <ul className="mt-1 pl-8 space-y-1">
                                                                        {item.subItems.map((subItem) => (
                                                                            <li key={subItem.name}>
                                                                                <a
                                                                                    href={subItem.href}
                                                                                    className={classNames(
                                                                                        pathname === subItem.href
                                                                                            ? 'bg-gray-800 text-white'
                                                                                            : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                                                                                        'block rounded-md py-2 pl-2 text-sm',
                                                                                    )}
                                                                                >
                                                                                    {subItem.name}
                                                                                </a>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                )}
                                                            </>
                                                        ) : (
                                                            <a
                                                                href={item.href}
                                                                className={classNames(
                                                                    pathname === item.href
                                                                        ? 'bg-gray-800 text-white'
                                                                        : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                                                                    'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                                                                )}
                                                            >
                                                                <item.icon aria-hidden="true" className="h-6 w-6 shrink-0" />
                                                                {item.name}
                                                            </a>
                                                        )}
                                                    </li>
                                            ))}
                                        </ul>
                                    </li>
                                ))}

                                {
                                    settingsNavItem &&
                                    <li className="mt-auto">
                                        <a
                                            // onClick={settingsNavItem.onClick}
                                            href={settingsNavItem.href ? settingsNavItem.href : '/settings'}
                                            className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                                        >
                                            <Cog6ToothIcon aria-hidden="true" className="h-6 w-6 shrink-0" />
                                            {settingsNavItem.name ? settingsNavItem.name : 'Settings'}
                                        </a>
                                    </li>
                                }
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className={`${sidebar === 'thin' ? 'lg:pl-24' : 'lg:pl-72'}`}>
                    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
                        <button type="button" onClick={() => setSidebarOpen(true)} className="-m-2.5 p-2.5 text-gray-700 lg:hidden">
                            <span className="sr-only">Open sidebar</span>
                            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                        </button>

                        {/* Separator */}
                        <div aria-hidden="true" className="h-6 w-px bg-gray-900/10 lg:hidden" />

                        <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">

                            {customHeaderContent ?
                                <div className="relative flex flex-1">
                                    {customHeaderContent}
                                </div>
                                :
                                <form action="#" method="GET" className="relative flex flex-1">
                                    <label htmlFor="search-field" className="sr-only">
                                        Search
                                    </label>
                                    <MagnifyingGlassIcon
                                        aria-hidden="true"
                                        className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
                                    />
                                    <input
                                        id="search-field"
                                        name="search"
                                        type="search"
                                        placeholder="Search..."
                                        className="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                                    />
                                </form>


                            }
                            <div className="flex items-center gap-x-4 lg:gap-x-6">

                                {showNotificationIcon &&
                                    <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
                                        <span className="sr-only">View notifications</span>
                                        <BellIcon aria-hidden="true" className="h-6 w-6" />
                                    </button>
                                }
                                {/* Separator */}
                                <div aria-hidden="true" className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10" />

                                {/* Profile dropdown */}
                                <Menu as="div" className="relative">
                                    <MenuButton className="-m-1.5 flex items-center p-1.5">
                                        <span className="sr-only">Open user menu</span>

                                        {user?.imageUrl ?
                                            <img
                                                alt="" src={user.imageUrl || ''}
                                                className="h-8 w-8 rounded-full" />

                                            :
                                            <UserCircleIcon
                                                className='h-8 w-8'
                                            />
                                        }

                                        <span className="hidden lg:flex lg:items-center">
                                            <span aria-hidden="true" className="ml-4 text-sm font-semibold leading-6 text-gray-900">
                                                {user?.name}
                                            </span>
                                            <ChevronDownIcon aria-hidden="true" className="ml-2 h-5 w-5 text-gray-400" />
                                        </span>
                                    </MenuButton>
                                    <MenuItems
                                        transition
                                        className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                    >
                                        {userDropdownOptions?.map((item) => (
                                            <MenuItem key={item.name}>
                                                <a
                                                    onClick={item.onClick}
                                                    href={item.href}
                                                    className="block px-3 py-1 cursor-pointer text-sm leading-6 text-gray-900 data-[focus]:bg-gray-50"
                                                >
                                                    {item.name}
                                                </a>
                                            </MenuItem>
                                        ))}
                                    </MenuItems>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <main className="py-10">
                        <div className="px-4 sm:px-6 lg:px-8">{children}</div>
                    </main>
                </div>
            </div>
        </>
    )
}
