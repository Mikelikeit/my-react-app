const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState = {
    posts: [
        {id: 1, message: 'Hi man', likesCount: 'like 35'},
        {id: 1, message: 'How are you?', likesCount: 'like 85'},
        {id: 1, message: 'Your ready to party?', likesCount: 'like 64'}
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newText = state.newPostText
            return {
                ...state,
                posts: [...state.posts, {id: 5, message: newText, likesCount: 'like 0'}],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT:
            return {
            ...state,
            newPostText : action.newText
        }

        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: 'ADD-POST'})
export const updateNewPostTextActionCreator = (text) => ({type: 'UPDATE-NEW-POST-TEXT', newText: text})

export default profileReducer