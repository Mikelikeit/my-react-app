import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sideBarReducer from "./sideBarReducer";
import {combineReducers, createStore} from "redux";
import usersReducer from "./usersReducer";

// TODO: использовать const
let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    usersPage:usersReducer
    /*sideBar:sideBarReducer*/
})

// TODO: использовать const
let store = createStore (reducers)


window.store=store
export default store