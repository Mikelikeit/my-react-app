import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
// TODO: для байндинга dispatch
// import { bindActionCreators } from "redux";


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

// TODO: тут можно заюзать bindActionCreators (https://redux.js.org/api/bindactioncreators)
/* bindActionCreators делает тоже самое
 Переписать так:
 const mapDispatchToProps = dispatch => {
    return bindActionCreators(dispatch, {
        addPost: addPostActionCreator,
        updateNewPostText: updateNewPostTextActionCreator,
    });
 };
 */
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text))
        }
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer