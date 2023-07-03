import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./reducers/userReducer";
import { imagesReducer } from "./reducers/imagesReducer";
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhencer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  user: userReducer,
  images: imagesReducer,
});

const store = createStore(rootReducer, composeEnhencer(applyMiddleware(thunk)));

export default store;
