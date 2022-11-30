import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadHotPosts, loadTopPosts, selectIsLoading, selectPosts } from "../../app/appSlice";
import { Loader } from "../../components/Loader";
import { About } from "../about/About";
import { Filter } from "../filter/Filter";
import { Post } from "../post/Post";

export const Home = () => {

    const isLoading = useSelector(selectIsLoading);
    const posts = useSelector(selectPosts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadHotPosts());
    }, [])

    return(
        <div id="home-wrapper" className="flex flex-col self-start items-center justify-start pt-10 col-span-full md:col-span-2">
            <div id="home-information" className="w-full rounded-xl flex flex-col gap-8 items-center">
                {/* <About /> */}
                <Filter />
                <div className="flex flex-col items-center gap-4 w-full">
                    {isLoading ?  (<><Loader/><Loader/><Loader/></>) : (posts.map((post, index) => <Post data={post} key={index}/>))}
                </div>
            </div>
        </div>
    )
}