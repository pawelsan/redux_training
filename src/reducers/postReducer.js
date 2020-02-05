import { FETCH_POSTS, NEW_POST } from '../actions/types';

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
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            }
        case NEW_POST:
            return {
                ...state,
                item: action.payload
            }
        default:
            return state;
    }
}