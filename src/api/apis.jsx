import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchHotPosts = async() => {
    try {
        const response = await fetch('https://www.reddit.com/hot.json');
        const jsonResponse = await response.json();
        const posts = jsonResponse.data.children;
        return posts;
        
    } catch (err) {
        return console.log(err)
    }
}

export const fetchNewPosts = async() => {
    try {
        const response = await fetch('https://www.reddit.com/new.json');
        const jsonResponse = await response.json();
        const posts = jsonResponse.data.children;
        return posts;

    } catch (err) {
        return console.log(err)
    }
}

export const fetchTopPosts = async() => {
    try {
        const response = await fetch('https://www.reddit.com/top.json');
        const jsonResponse = await response.json();
        const posts = jsonResponse.data.children;
        return posts;
        
    } catch (err) {
        return console.log(err)
    }
}

export const fetchSubredditIcon = async(subreddit) => {
    try {
        const response = await fetch(`https://www.reddit.com/${subreddit}/about.json`)
        const jsonResponse = await response.json();
        return jsonResponse
        
    } catch (err) {
        return console.log(err)
    }
}
