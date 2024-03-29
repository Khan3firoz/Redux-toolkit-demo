const configureStore=require('@reduxjs/toolkit').configureStore
const cakeReducer=require('../features/cake/cakeSlice')
const iceCreameReducer=require('../features/iceCreame/iceCreameSlice')
// const reduxLogger=require('redux-logger')
// const logger=reduxLogger.createLogger()

const store=configureStore({
    reducer:{
        cake:cakeReducer,
        iceCreame:iceCreameReducer
    },
    // middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
})

module.exports=store