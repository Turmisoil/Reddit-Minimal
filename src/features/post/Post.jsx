import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchSubredditIcon } from "../../api/apis";
import { selectIsLoading } from "../../app/appSlice";
import { convertTime } from "../../utilities/convertTime";
import { SlSocialReddit } from "react-icons/sl"
import { FaComments } from "react-icons/fa"

export const Post = ({data}) => {

    const isLoading = useSelector(selectIsLoading);
    const [subredditIcon, setSubredditIcon] = useState('');

    const generateIcon = async() => {
        const response = await fetchSubredditIcon(data.data.subreddit_name_prefixed);
        const icon = response.data.icon_img
        setSubredditIcon(icon)
    }

    const createIcon = (icon) => {
        if(icon){
            return <img src={icon} className="border-2 rounded-full h-[40px] w-[40px]"></img>
        } else {
            return <SlSocialReddit className="border-2 rounded-full h-[30px] w-[30px]" />
        }
    }
    
    useEffect(() => {
        generateIcon();
    }, [])
 

    return (
        <div className="bg-white border-2 rounded-xl shadow-lg w-full flex flex-col">
            <div className="flex flex-col">
                <div className="flex items-center justify-start gap-4 p-[12px]">
                    <div className="">
                        {createIcon(subredditIcon)}
                    </div>
                    <div className="">{data.data.subreddit_name_prefixed}</div>
                    <div className="">posted by {data.data.author}</div>
                    <div className="ml-auto">{convertTime(data.data.created_utc)}</div>
                </div>
                <div className="p-[12px] text-[20px] font-semibold">
                    {data.data.title}
                </div>
            </div>
            <div className="flex items-center justify-between">
                <div>
                    <img src={isLoading ? '' : data.data.post_hint === 'image' ? data.data.url : ''}></img>
                </div>
            </div>
            <div className="flex flex-col items-center justify-between border-t-2 p-2">
                <div className="self-start flex items-center justify-start gap-2">
                    <FaComments/>
                    {data.data.num_comments} comments
                </div>
            </div>
        </div>
    )
}