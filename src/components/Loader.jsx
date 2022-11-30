import React from "react";

export const Loader = () => {
    return (
        <div className="border-2 rounded-md w-full">
        <div className="w-full flex animate-pulse flex-row items-center h-[100px] justify-center space-x-5 p-6">
            <div className="w-24 bg-gray-300 h-20 rounded-full "></div>
                <div className="flex flex-col w-full gap-4">
                    <div className="bg-gray-300 h-4 rounded-md "></div>
                    <div className="bg-gray-300 h-4 rounded-md "></div>
                    <div className="bg-gray-300 h-4 rounded-md "></div>
            </div>
        </div>
    </div>
    )
}