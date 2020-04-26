/*import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sideBarReducer from "./sideBarReducer";*/

let store = {
    _state: {

        profilePage: {
            posts: [
                {id: 1, message: 'Hi man', likesCount: 'like 35'},
                {id: 1, message: 'How are you?', likesCount: 'like 85'},
                {id: 1, message: 'Your ready to party?', likesCount: 'like 64'}
            ],
            newPostText: ''
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi!'},
                {id: 2, message: 'Do you like coding?'},
                {id: 3, message: 'Yes! I like it'}
            ],
            dialogs: [
                {id: 1, name: 'Alex'},
                {id: 2, name: 'Mike'},
                {id: 3, name: 'Julia'},
                {id: 4, name: 'Dima'},
                {id: 5, name: 'Igor'}
            ],
            newMessageText: ''
        },
        sideBar: {

            friends: [
                {id: 1, name: 'Alex'},
                {id: 2, name: 'Mike'},
                {id: 3, name: 'Julia'}
            ]
        }

    },
    _callSubscriber() {

    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sideBar = sideBarReducer(this._state.sideBar, action)
        this._callSubscriber(this._state)
    }
}






/*export default store*/
/*
window.store=store*/
