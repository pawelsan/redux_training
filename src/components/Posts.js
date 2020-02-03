import React, { Component } from 'react';

class Posts extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => (
                this.setState({
                    posts: data
                })
            ))
    }
    render() {
        const postItems = this.state.posts.map(postItem => (
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

export default Posts;