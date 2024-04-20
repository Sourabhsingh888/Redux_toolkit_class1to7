import { configureStore } from '@reduxjs/toolkit';
import  Userslice  from './slices/Userslice';

const store = configureStore({
    reducer: {
    users:Userslice,
    },
})

export default store;