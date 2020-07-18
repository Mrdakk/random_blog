import axios from "axios"
import { Post } from "../entities/Post"

export const fetchPosts = () => {
    return axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.data)
        .then(apiPosts => {
            const posts = [];
            apiPosts.forEach(elem => {
                const post = new Post(elem.id, elem.title, elem.body, elem.userId)
                posts.push(post)
            })
            return posts
        })
}

export const fetchSinglePost = (postId) => {
    return axios
        .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.data)
        .then(elem => {
            const post = new Post(
                elem.id,
                elem.title,
                elem.body,
                elem.userId
            )

            return post
        })
}

export const fetchMorePosts = userId => {
    return axios
        .get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(response => response.data)
        .then(apiMorePosts => {
            const morePosts = [];

            apiMorePosts.forEach(elem => {
                const moreApiPosts = new Post(
                    elem.id,
                    elem.title,
                    elem.body,
                    elem.userId
                );

                morePosts.push(moreApiPosts);
            });

            return morePosts;
        });
};