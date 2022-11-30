import React from "react";

export const Filter = () => {

    return(
        <div className="flex items-center justify-around border-2 w-full bg-white rounded-md shadow-xl h-[60px]">
            <div className="p-2">
                <button>
                    HOT
                </button>
            </div>
            <div className="p-2">
                <button>
                    NEW
                </button>
            </div>
            <div className="p-2">
                <button>
                    TOP
                </button>
            </div>
        </div>
    )
}