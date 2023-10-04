import { combineReducers } from "redux"
import catReducer from "./catReducer"
// import uploadCatRducer from "./uploadCatReducer"

const rootReducer = combineReducers({

    CAT_REDUCER: catReducer,
    
})
export default rootReducer