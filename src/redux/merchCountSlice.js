import { createSlice } from '@reduxjs/toolkit';

const merchCountSlice = createSlice({
    name: 'merchCount',
    initialState: {
        count: 0,
        selectedButton: null
    },
    reducers: {
        setCount(state, action) {
            state.count = action.payload;
        },
        incrementCount: (state) => {
            state.count += 1;
        },
        decrementCount:(state) => {
            state.count -= 1;
        },
        setSelectedButton(state, action) {
            state.selectedButton = action.payload;
        }
    },
});

export const { setCount, incrementCount, decrementCount, setSelectedButton } = merchCountSlice.actions;
export default merchCountSlice.reducer;