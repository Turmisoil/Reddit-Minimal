import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchHotPosts } from "../api/apis";

export const loadHotPosts = createAsyncThunk(
    'app/loadHotPosts',
    async () => {
        return await fetchHotPosts()
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
    }
})

export const selectPosts = state => state.app.posts;
export const selectIsLoading = state => state.app.isLoading;
export default appSlice.reducer;