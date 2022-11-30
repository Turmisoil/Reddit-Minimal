import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loadHotPosts, loadNewPosts, loadTopPosts } from "../../app/appSlice";
import { AiOutlineFire } from "react-icons/ai";
import { BsStar, BsGraphUp } from "react-icons/bs";

export const Filter = () => {

    const [focus, setFocus] = useState('HOT');

    const handleFilter = (type) => {
        switch(type){
            case 'HOT':
                dispatch(loadHotPosts());
                setFocus('HOT')
                break;
            case 'NEW':
                dispatch(loadNewPosts());
                setFocus('NEW')
                break;
            case 'TOP':
                dispatch(loadTopPosts());
                setFocus('TOP')
                break;
            default:
                break;
        }
    }

    const dispatch = useDispatch();

    return(
        <div className="flex items-center justify-around border-2 w-full bg-white rounded-md shadow-xl h-[60px]">
            <div className="p-2">
                <button className={`${focus === 'HOT' ? 'border-b-2 border-black' : 'border-none'} cursor-pointer p-[4px] flex items-center gap-2 ease-in duration-100`} onClick={() => {handleFilter('HOT')}}>
                    <AiOutlineFire className="h-[20px] w-[20px]" />
                    <p>HOT</p>
                </button>
            </div>
            <div className="p-2">
                <button className={`${focus === 'NEW' ? 'border-b-2 border-black' : 'border-none'} cursor-pointer p-[4px] flex items-center gap-2 ease-in duration-100`} onClick={() => {handleFilter('NEW')}}>
                    <BsStar className="h-[20px] w-[20px]" />
                    <p>NEW</p>
                </button>
            </div>
            <div className="p-2">
                <button className={`${focus === 'TOP' ? 'border-b-2 border-black' : 'border-none'} cursor-pointer p-[4px] flex items-center gap-2 ease-in duration-100`} onClick={() => {handleFilter('TOP')}}>
                    <BsGraphUp className="h-[20px] w-[20px]" />
                    <p>TOP</p>
                </button>
            </div>
        </div>
    )
}