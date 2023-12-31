import {  createSlice, PayloadAction } from "@reduxjs/toolkit"

interface State {
    active: boolean,
}

export const initialState: State = {
    active: false,
}

const basketVisibility = createSlice({
    name: 'basketVisibility',
    initialState,
    reducers: {
        setBasketVisibility(state, action: PayloadAction<boolean>) {
            state.active = action.payload
        },
    },
})

export default basketVisibility.reducer

export const {
    setBasketVisibility,
} = basketVisibility.actions





