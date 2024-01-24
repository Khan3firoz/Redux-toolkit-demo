const createSlice = require('@reduxjs/toolkit').createSlice;
const cakeActions=require('../cake/cakeSlice').cakeActions
const initialState = {
    numberOfIceCream: 20
};

const iceCreamSlice = createSlice({
    name: 'iceCream',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numberOfIceCream--;
        },
        restocked: (state, action) => {
            state.numberOfIceCream += action.payload || 0; // Default value as 0
        }
    },
    extraReducers:(builder) => {
        builder
        .addCase(cakeActions.ordered, (state) => {
            state.numberOfIceCream--
        })
        // ['cake/ordered']:(builder)=>{
        //     state.numberOfIceCream--
        // }
    }
});

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions;
