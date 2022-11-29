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
