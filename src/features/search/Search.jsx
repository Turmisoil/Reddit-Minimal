import React from "react";
import { CiSearch } from "react-icons/ci";

export const Search = () => {
    return (
        <div className="relative w-[30%]">
            <CiSearch className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3" />
            <input type="text" className="w-full py-3 pl-12 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-blue-400" placeholder="Search..." />
        </div>
    )
}