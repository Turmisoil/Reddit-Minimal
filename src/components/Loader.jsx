import React from "react";

export const Loader = () => {
    return (
        <div class="border-2 rounded-md w-full">
        <div class="w-full flex animate-pulse flex-row items-center h-[100px] justify-center space-x-5 p-6">
            <div class="w-24 bg-gray-300 h-20 rounded-full "></div>
                <div class="flex flex-col w-full gap-4">
                    <div class="bg-gray-300 h-4 rounded-md "></div>
                    <div class="bg-gray-300 h-4 rounded-md "></div>
                    <div class="bg-gray-300 h-4 rounded-md "></div>
            </div>
        </div>
    </div>
    )
}