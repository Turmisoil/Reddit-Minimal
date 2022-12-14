import React from "react";
import { Link } from "react-router-dom";

export const SubredditAside = () => {

    return (
        <aside className="hidden md:flex flex-col justify-start col-span-1 pt-10 max-h-[1200px] w-full">
            <div id='subreddit-wrapper' className="flex flex-col gap-2 justify-between rounded-lg border-2 shadow-xl">
                <div className="border-b-2 p-6">
                    <Link to='/'>
                        GO HOME
                    </Link>
                </div>
                <div className="p-6 pb-2">TOGGLE SUBREDDITS</div>
                <div className="p-6">
                    <Link to='/r/1'>
                        SUBREDDIT TEST
                    </Link>
                </div>
                <div className="p-6">SUBREDDIT NAME</div>
                <div className="p-6">SUBREDDIT NAME</div>
                <div className="p-6">SUBREDDIT NAME</div>
                <div className="p-6">SUBREDDIT NAME</div>
                <div className="p-6">SUBREDDIT NAME</div>
                <div className="p-6">SUBREDDIT NAME</div>
                <div className="p-6">SUBREDDIT NAME</div>
                <div className="p-6">SUBREDDIT NAME</div>
                <div className="p-6">SUBREDDIT NAME</div>
                <div className="p-6">SUBREDDIT NAME</div>
                <div className="p-6 mb-8">SUBREDDIT NAME</div>
            </div>
        </aside>
    )
}