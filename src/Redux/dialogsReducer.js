const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newText = state.newMessageText
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: 4, message: newText}]
            }
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            }
        default:
            return state
    }

}

export const addMessageCreator = () => ({type: 'ADD-MESSAGE'})
export const updateNewMessageTextCreator = (text) => ({type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text})

export default dialogsReducer

