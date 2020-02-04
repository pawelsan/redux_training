import React, { Component } from 'react';
import PropTypes from 'prop-types';
// connect connects the component to the redux store
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }
    render() {
        const postItems = this.props.posts.map(postItem => (
            <li key={postItem.id}>
                <h3>{postItem.title}</h3>
                <p>{postItem.body}</p>
            </li>
        ));
        return (
            <div>
                <ul>
                    {postItems}
                </ul>
            </div>
        );
    }
}

// Add props to prop types
Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired
}

// first parameter in the connect functiion is about mapping the state to the properties
// get the state from redux (the root reducer (the index.js file in the reducers folder) and map it to properties in the component
const mapStateToProps = state => ({
    posts: state.posts.items
})

export default connect(mapStateToProps, { fetchPosts })(Posts);