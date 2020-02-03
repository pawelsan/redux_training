import { FETCH_POSTS, NEW_POSTS } from '../actions/types';

// items represent the posts comming from our actions
// item represents the single post we add
const initialState = {
    items: [],
    item: {}
}
// the function below evaluates what type we are dealing with
// the action needs to have a type, and this is what we are evaluating
export default function (state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}