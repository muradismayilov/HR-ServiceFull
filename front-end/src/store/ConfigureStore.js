import { devToolsEnhancer } from "redux-devtools-extension";
import rootReducer from "./RootReducer";
import {createStore} from "redux"

export function configureStore(){
    return createStore(rootReducer,devToolsEnhancer)
}