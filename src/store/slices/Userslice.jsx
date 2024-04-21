import { createSlice } from "@reduxjs/toolkit";
const Userslice = createSlice({
    name: "user",
    initialState:[],
    reducers: {
        addUser(state, action) {
            state.push(action.payload);
            console.log(action.payload);
        },
        removeUser(state, action) {
            // console.log("hii" + action.payload)
            // state.pop(action.payload);
            state.splice(action.payload,1)
            
        },
        clearAllUsers(state,action) {
            // console.log({ "State": state, "Action": action.payload})
            // console.log( "hello delete userslice")
            // return state = []; // not correct way to remove
            return []; // correct way to remove
            
        }
    }
});

console.log(Userslice.actions)
export default Userslice.reducer;
export const { addUser, removeUser, clearAllUsers } = Userslice.actions;