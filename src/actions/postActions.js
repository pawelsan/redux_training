import { FETCH_POSTS, NEW_POST } from './types';

// each action creator is a function that we need to export
// dispatch is like a resolver in a promise, dispatch is called whenever data is to be send
// the function below is then dispatched to the reducer file - postReducer.js

export const fetchPosts = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
        }))
}

export const createPost = (postData) => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(post => dispatch({
            type: NEW_POST,
            payload: postData
        }))
}