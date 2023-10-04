import { applyMiddleware, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducer";

const middleware = [thunk]

const centralStore = legacy_createStore(
    rootReducer,
    compose(applyMiddleware(...middleware))
)

export default centralStore;