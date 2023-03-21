import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        name: 'datnh'
    },
    {
        id: 2,
        name: 'datit06'
    },
];

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {}
});


export const selectAllUser = (state) => state.users

export default usersSlice.reducer

