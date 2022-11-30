import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { About } from "../about/About";
import { Filter } from "../filter/Filter";
import { Post } from "../post/Post";
import { selectIsLoading, selectPosts } from "../../app/appSlice";
import { loadHotPosts } from "../../app/appSlice";
import { Loader } from "../../components/Loader";

export const Subreddit = () => {

    const isLoading = useSelector(selectIsLoading);
    const posts = useSelector(selectPosts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadHotPosts())
    }, [])

    return (
        <div id="subreddit-wrapper" className="flex flex-col self-start items-center justify-start pt-10 col-span-full md:col-span-2">
        <div id="subreddit-information" className="w-full rounded-xl flex flex-col gap-8 items-center">
            <About />
            <Filter />
            <div className="flex flex-col items-center gap-4 w-full">
                {isLoading ?  (<><Loader/><Loader/><Loader/></>) : (posts.map((post, index) => <Post data={post} key={index}/>))}
            </div>
        </div>
    </div>
    )
}