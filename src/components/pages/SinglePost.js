import React, { Component } from "react";
import { Link } from "react-router-dom"

import { fetchSinglePost } from "../../service/postService"
import { fetchSingleAuthor } from "../../service/authorService";
import { fetchMorePosts } from "../../service/postService"

export class SinglePost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            post: null,
            author: null,
            posts: []
        }
    }


    fetchData = () => {
        const postId = this.props.match.params.postsId;

        fetchSinglePost(postId)
            .then(post => {
                this.setState({ post });

                fetchSingleAuthor(post.userId).then(author => this.setState({ author }));

                this.loadRelatedPosts(post.userId)
            });
    }

    loadRelatedPosts = (userId) => {
        fetchMorePosts(userId).then(userPosts => {
            const currentPostId = Number.parseInt(this.props.match.params.postsId);
            const relatedPosts = userPosts.filter(post => post.id !== currentPostId);

            this.setState({ posts: relatedPosts });
        });
    }

    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.postsId !== this.props.match.params.postsId) {
            this.fetchData();
        }
    }

    render() {
        const { post, author } = this.state;

        if (!post || !author) {
            return "Loading...";
        }

        return (
            <div className="postContainer">
                <div>
                    <h2 className="sbp">{post.title}</h2>
                    <p className="authorsh2">
                        <Link to={`/authors/${author.id}`} className="author-link">
                            {author.name}
                        </Link>
                    </p>
                    <p>{post.body}</p>
                </div>
                <div>
                    <h4 className="posth4">more posts from some author:</h4>
                    {this.state.posts.map(post => {
                        return (
                            <p key={post.id}>
                                <Link
                                    className="authorPost author-link"
                                    to={`/posts/${post.id}`}
                                >
                                    {post.title}
                                </Link>
                            </p>
                        );
                    })}
                </div>
            </div>
        );
    }
}