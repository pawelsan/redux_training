import React, { Component } from 'react';

class Postform extends Component {
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
        }
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        })
            .then(res => res.json())
            .then(data => console.log(data))
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

export default Postform;