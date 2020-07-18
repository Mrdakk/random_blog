import React, { Component } from "react";
import { Link } from "react-router-dom";
import { fetchSingleAuthor } from "../../service/authorService"

export class SingleAuthor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            author: null
        }
    }

    componentDidMount() {
        const authorId = this.props.match.params.authorId
        fetchSingleAuthor(authorId)
            .then(author => this.setState({ author: author }))
    }

    render() {
        const author = this.state.author
        if (!author) {
            return "Searching for author...come back later please";
        }

        return (
            <div className="container">
                <Link className="author-link" to="/authors">
                    All authors
              </Link>
                <h2 className="authorsh2">Single Author</h2>
                <div className="row">
                    <div className="col-md-6">
                        <img
                            className="imgAuthor"
                            src="https://via.placeholder.com/150"
                            alt=""
                        />
                    </div>
                    <div className="col-md-6">
                        <h3>
                            {author.name}
                            {author.surname}
                        </h3>
                        <p>username: {author.username} </p>
                        <p>email: {author.email}</p>
                        <p>phone: {author.phone}</p>
                    </div>
                    <div className="col-md-6">
                        <h3>Address</h3>
                        <p>street: {author.street}</p>
                        <p>city: {author.city}</p>
                        <p>zipcode: {author.zipcode}</p>
                    </div>
                    <div className="col-md-6">
                        <iframe
                            width="100%"
                            height="100%"
                            scrolling="no"
                            marginHeight="0"
                            marginWidth="0"
                            title={author.address}
                            frameBorder="0"
                            style={{ border: 0 }}
                            src={`https://maps.google.com/maps?q=${author.lattitude},${author.longitude}&z=15&output=embed`}
                        />
                    </div>
                    <div className="col-md-12">
                        <h3>Company</h3>
                        <p>name: {author.compName}</p>
                        <p>slogan: {author.slogan}</p>
                    </div>
                </div>
            </div>
        );
    }
}
