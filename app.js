import fetch from "node-fetch";

const getData = async (userId) => {
    const user = await (
        await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    ).json();

    const posts = await (
        await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    ).json();
    user.posts = posts
    return user
}

export default getData