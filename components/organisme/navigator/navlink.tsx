"use client"

import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import clsx from "clsx";
import Link from "next/link";

export default function NavLink() {
    const [open, setOpen] = useState(false);
    return (
    <>
        <button 
            onClick={() => setOpen(!open)}
            className="inline-flex items-center p-2 justify-center text-sm text-gray-500 rounded-md md:hidden hover:bg-gray-100">
            {!open ? <IoMenu className="size-8" /> : <IoClose className="size-8"/>}
        </button>
        <div className={clsx("w-full md:block md:w-auto", {"hidden": !open})}>
            <ul className="flex flex-col font-semibold text-sm uppercase p-4 mt-4 rounded-sm bg-gray-50 md:flex-row md:items-center md:space-x-10 md:p-0 md:mt-0 md:border-0 md:bg-white">
                <li>
                    <Link href="/" className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-sm md:hover:bg-blue-500 md:p-2 hover:text-white transition-colors duration-200">
                    Home
                    </Link>
                </li>
                <li className="group relative">
                    <Link href="/openTrips" className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-sm  md:hover:bg-blue-500 md:p-2 hover:text-white transition-colors duration-200">
                    Open Trips
                    </Link>
                    <ul className="absolute left-0 w-40 hidden group-hover:block bg-gray-700 text-white p-2">
                        <li><Link href="#" className="block px-4 py-2 text-white hover:bg-gray-600">Bali</Link></li>
                        <li><Link href="#" className="block px-4 py-2 text-white hover:bg-gray-600">Lombok</Link></li>
                        <li><Link href="#" className="block px-4 py-2 text-white hover:bg-gray-600">Tomat</Link></li>
                    </ul>
                </li>
                <li>
                    <Link href="/privateTrips" className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-sm  md:hover:bg-blue-500 md:p-2 hover:text-white transition-colors duration-200">
                    Private Trips
                    </Link>
                </li>
                <li>
                    <Link href="/about" className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-sm  md:hover:bg-blue-500 md:p-2 hover:text-white transition-colors duration-200">
                    Tentang Kami
                    </Link>
                </li>
                <li>
                    <Link href="/contact" className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-sm  md:hover:bg-blue-500 md:p-2 hover:text-white transition-colors duration-200">
                    Kontak Kami
                    </Link>
                </li>
            </ul>
        </div>
    </>
  );
}
