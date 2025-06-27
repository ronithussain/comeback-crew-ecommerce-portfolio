"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaHeart, FaShoppingCart, FaTimes, FaTruck } from "react-icons/fa"
import { useSelector } from "react-redux";


const NavBar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    // get cart items from redux store to display the item count
    const cartItems = useSelector((state) => state.cart.items)
    const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0)

    return (
        <nav className='sticky top-0 z-50 bg-slate-200 sm:px-6 px-1 py-4 flex items-center justify-between'>
            {/* left section: logo */}
            <div className=' flex flex-col leading-tight'>
                <span className='text-base md:text-2xl font-bold text-[#a91f64]'>
                    Comeback-Crew
                </span>
                <span className="text-xs sm:text-sm text-gray-700 tracking-widest self-center">
                    Restaurant Store
                </span>
            </div>

            {/* center section: nav links */}
            <ul className=" hidden md:flex gap-8 text-gray-700 font-medium">
                <li>
                    <Link href="/" className="hover:text-[#a91f64]">Home</Link>
                </li>
                <li className="hover:text-[#a91f64] cursor-pointer">New Arrivals</li>
                <li className="hover:text-[#a91f64] cursor-pointer">Top Sellers</li>
                <li>
                    <Link href="/products" className="hover:text-[#a91f64]">Products</Link>
                </li>
            </ul>

            {/* right section: icons */}
            <div className=" flex items-center gap-6 text-gray-700 text-xl">
                <div className="flex gap-6">
                    <FaTruck className="hover:text-[#a01f64]" />
                    <Link href="/wishlist">
                        <FaHeart className="hover:text-[#a01f64]" />
                    </Link>
                    <Link href="/cart" className="relative">
                        <FaShoppingCart className="hover:text-[#a01f64]" />
                        {cartItemCount > 0 && (
                            <span className="absolute -top-3 -right-4 text-xs text-white bg-[#a91f64] rounded-full px-1.5 py-0.5">
                                {cartItemCount}
                            </span>
                        )}
                    </Link>
                </div>
                {/* menu icon */}
                <div className="md:hidden flex">
                    <button onClick={toggleMenu}>
                        {isMenuOpen ? (
                            <FaTimes className="text-2xl hover:text-[#a01f64] cursor-pointer" />
                        ) : (
                            <FaBars className="text-2xl hover:text-[#a01f64] cursor-pointer" />
                        )
                        }
                    </button>
                </div>
            </div>


            {/* mobile section: menu */}
            {isMenuOpen && (
                <ul className="absolute top-full left-0 w-full bg-white flex flex-col items-center gap-4 py-4 text-gray-700 font-medium md:hidden shadow-md">
                    <li>
                        <Link href="/" onClick={toggleMenu} className="hover:text-[#a91f64]">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/new-arrivals" onClick={toggleMenu} className="hover:text-[#a91f64]">
                            New Arrivals
                        </Link>
                    </li>
                    <li>
                        <Link href="/top-sellers" onClick={toggleMenu} className="hover:text-[#a91f64]">
                            Top Sellers
                        </Link>
                    </li>
                    <li>
                        <Link href="/products" onClick={toggleMenu} className="hover:text-[#a91f64]">
                            Products
                        </Link>
                    </li>
                </ul>
            )}

        </nav>
    );
};

export default NavBar;