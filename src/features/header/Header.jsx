import React from "react";
import { FcReddit } from "react-icons/fc";
import { FiGithub } from "react-icons/fi";
import { Search } from "../search/Search";

export const Header = () => {
    return (
        <header className="h-[65px] flex items-center justify-around shadow-xl border-b">
            <div id="logo-wrapper" className="w-[200px] h-[40px] rounded-md flex items-center justify-start gap-4">
                <div id="logo">
                    <FcReddit className="h-[40px] w-[40px]" />
                </div>
                <div className="pt-[2px]" id="title">
                    <h1 className="text-[20px]">Reddit <span className="italic text-blue-400">Minimal</span></h1>
                </div>
            </div>
            <Search />
            <div id="theme-wrapper" className="w-[200px] h-[40px] rounded-md flex items-center justify-end gap-4">
                {/* <ThemeSwitch /> */}
                <div>
                    <h1 className="text-[20px]">THEME SWITCH</h1>
                </div>
                <div>
                    <FiGithub className="cursor-pointer h-[30px] w-[30px] hover:scale-105 ease-in duration-300" />
                </div>
            </div>
        </header>
    )
}