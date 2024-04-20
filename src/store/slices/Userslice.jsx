import { createSlice } from "@reduxjs/toolkit";

const Userslice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        addUser(state, action) {
            state.push(action.payload);
        },
        removeUser(state, action) {
            
        },
        deleteUsers(state, action) {
            
        }
    }
});

console.log(Userslice.actions)
export default Userslice.reducer;
export const {addUser} = Userslice.actions;