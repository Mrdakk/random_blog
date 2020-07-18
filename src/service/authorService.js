import axios from "axios"

import { Author } from "../entities/Author"

export const fetchAuthors = () => {
    return axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(res => res.data)
        .then(apiAuthors => {
            const authors = [];
            apiAuthors.forEach(elem => {
                const author = new Author(
                    elem.id,
                    elem.name
                )

                authors.push(author)
            })

            return authors;
        })
}

export const fetchSingleAuthor = (authorId) => {
    return axios
        .get(`https://jsonplaceholder.typicode.com/users/${authorId}`)
        .then(response => response.data)
        .then(elem => {
            const author = new Author(
                elem.id,
                elem.name,
                elem.username,
                elem.email,
                elem.phone,
                elem.address.street,
                elem.address.city,
                elem.address.zipcode,
                elem.company.name,
                elem.company.catchPhrase,
                elem.address.geo.lat,
                elem.address.geo.lng
            )
            return author
        })
}