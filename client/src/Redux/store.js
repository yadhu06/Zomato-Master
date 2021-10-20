import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./Reducer/rootReducer";

//create middlewares
const middlewares = [thunk]
    ;
if (process.env.NODE_ENV === "dvelopment") {
    const { logger } = require("redux-logger");

    middlewares.push(logger);
}
const store = createStore(rootReducer, {}, applyMiddleware(...middlewares));

export default store;