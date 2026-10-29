import { createSlice } from "@reduxjs/toolkit"


    const counterReducer = createSlice({
        name: "counter",
        initialState: {
            count: 0
        },
        reducers: {
            increment: (state) => {
                state.count++;
            },
            decrement: (state) => {
                state.count--;
            },
            incrementByAmount: (state,action) => {
                state.count += Number(action.payload);
            },
            }
        })


export const {increment, decrement, incrementByAmount} = counterReducer.actions;

export default counterReducer.reducer;
