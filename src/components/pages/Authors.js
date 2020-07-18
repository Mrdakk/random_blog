import React, { Component } from "react";
import { Link } from "react-router-dom";
import { fetchAuthors } from "../../service/authorService"

export class Authors extends Component {
    constructor() {
        super()
        this.state = {
            authors: []
        }
    }

    componentDidMount() {
        fetchAuthors()
            .then(authors => this.setState({ authors }))
    }

    render() {
        const { authors } = this.state
        return (
            <div className="authorsContainer">
                <h2 className="authorsh2">Authors</h2>
                <div>
                    {authors.map(author => {
                        return (
                            <p className="authorsP" key={author.id}>
                                <Link className="author-link" to={`/authors/${author.id}`}>
                                    {author.name}
                                </Link>
                            </p>
                        );
                    })}
                </div>
            </div>
        );
    }
}
