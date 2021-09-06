import Image from 'next/image'
import Logo from '../public/airbnb-logo.svg'
import { SearchIcon, MenuIcon, UserCircleIcon, UserIcon, GlobeIcon } from '@heroicons/react/solid'
function Header() {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-3 md:px-10">

        <div className="relative flex items-center h-10 cursor-pointer my-auto">
            <Image src={Logo} layout='fill' objectFit="contain" objectPosition="left" />
        </div>
        <div className="flex items-center md:border-2 rounded-full p-1 md:shadow-sm">
                <input type="text" placeholder="Start your search" className="pl-2 bg-transparent outline-none border-none flex-grow text-sm text-gray-500 placeholder-gray-400" />
                <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:ml-2"/>
        </div>
        <div className="flex items-center justify-end text-gray-500 space-x-4">
                <p className="hidden md:inline cursor-pointer">Become a host</p>
                <GlobeIcon className="h-6" />
                <div className="flex items-center space-x-2 border-2 rounded-full p-1">
                    <MenuIcon className="h-6" />
                    <UserCircleIcon className="h-6" />
                </div>
        </div>
        </header>
    )
}

export default Header
