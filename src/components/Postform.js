import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

class PostForm extends Component {
    state = {
        title: '',
        body: ''
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { title, body } = this.state
        const post = {
            title,
            body
        };
        this.props.createPost(post);
    }

    render() {
        return (
            <div>
                <h1>
                    Add post
                </h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label htmlFor="">Title:</label><br />
                        <input type="text" name="title" onChange={this.onChange} value={this.state.title} />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="" >Body:</label><br />
                        <textarea name="body" onChange={this.onChange} value={this.state.body} />
                    </div>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost })(PostForm);