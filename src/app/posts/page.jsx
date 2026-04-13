
const PostsPage = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
    console.log(posts);
    return (
        <div>
            <h2>Total Posts : {posts.length}</h2>
        </div>
    );
};

export default PostsPage;