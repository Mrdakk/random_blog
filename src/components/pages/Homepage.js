import React, { Component } from "react";
import { Link } from "react-router-dom";
import { fetchPosts } from "../../service/postService";

export class Homepage extends Component {
    constructor() {
        super()

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        fetchPosts()
            .then(posts => this.setState({ posts }))
    }

    render() {
        const { posts } = this.state;
        return (
            <>
                <main className="homepageContainer">
                    <h2 className="authorsh2">Posts</h2>
                    <div className="post">
                        {posts.map(post => {
                            return (
                                <div className="post" key={post.id}>
                                    <h4>
                                        <Link className="author-link" to={`/posts/${post.id}`}>
                                            <h5>{post.title}</h5>
                                        </Link>
                                    </h4>
                                    <p>{post.body}</p>
                                </div>
                            );
                        })}
                    </div>
                </main>
            </>
        );
    }
}