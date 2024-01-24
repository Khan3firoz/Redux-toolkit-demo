const store = require('./app/store')
const cakeActions  = require('./features/cake/cakeSlice').cakeActions
const {iceCreamActions}  = require('./features/iceCreame/iceCreameSlice')

console.log('Initial State',store.getState())
const unsubscribe=store.subscribe(()=>console.log('updated State',store.getState()))

store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.restocked(4))
store.dispatch(iceCreamActions.ordered());
store.dispatch(iceCreamActions.ordered())
store.dispatch(iceCreamActions.ordered())
store.dispatch(iceCreamActions.restocked(3))

unsubscribe()

  