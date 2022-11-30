import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchHotPosts, fetchNewPosts, fetchTopPosts } from "../api/apis";

export const loadHotPosts = createAsyncThunk(
    'app/loadHotPosts',
    async () => {
        return await fetchHotPosts()
    }
)

export const loadNewPosts = createAsyncThunk(
    'app/loadNewPosts',
    async() => {
        return await fetchNewPosts();
    }
)

export const loadTopPosts = createAsyncThunk(
    'app/loadTopPosts',
    async() => {
        return await fetchTopPosts();
    }
)

const initialState = {
    posts: [],
    isLoading: false,
    error: false,
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        //HOT POSTS
        builder 
            .addCase(loadHotPosts.pending, state => {
                state.isLoading = true;
            })
            .addCase(loadHotPosts.fulfilled, (state, action) => {
                state.posts = action.payload
                state.isLoading = false;
            })
            .addCase(loadHotPosts.rejected, (state, action) => {
                state.error = action.error;
                state.isLoading = false;
            })

        //NEW POSTS
        builder
            .addCase(loadNewPosts.pending, state => {
                state.isLoading = true;
            })
            .addCase(loadNewPosts.fulfilled, (state, action) => {
                state.posts = action.payload;
                state.isLoading = false;
            })
            .addCase(loadNewPosts.rejected, (state, action) => {
                state.error = action.error;
                state.isLoading = false;
            })

        //TOP POSTS
        builder
            .addCase(loadTopPosts.pending, state => {
                state.isLoading = true;
            })
            .addCase(loadTopPosts.fulfilled, (state, action) => {
                state.posts = action.payload;
                state.isLoading = false;
            })
            .addCase(loadTopPosts.rejected, (state, action) => {
                state.error = action.error;
                state.isLoading = false;
            })
    }
})

export const selectPosts = state => state.app.posts;
export const selectIsLoading = state => state.app.isLoading;
export default appSlice.reducer;