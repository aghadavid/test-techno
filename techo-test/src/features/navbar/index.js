import { createSlice } from '@reduxjs/toolkit';

export const navbarSlice = createSlice({
    name: 'navbar',
    initialState: {
        activeItem: 'home', 
    },
    reducers: {
        setActiveItem: (state, action) => {
            state.activeItem = action.payload; 
        },
    },
});

export const { setActiveItem } = navbarSlice.actions;

export default navbarSlice.reducer;