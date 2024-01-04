const PostPage = async () => {
  const response = await fetch("http://localhost:5000/posts", {
    cache: "no-store",
  });
  const posts = await response.json();
  console.log(posts);

  return (
    <div className="w-full ">
      <h1 className="text-2xl">Total post: {posts.length}</h1>
      {posts.map((post) => (
        <div
          key={post.id}
          className="w-[70%] mx-auto card card-compact mb-2  bg-grey-100 shadow-xl"
        >
          <figure>
            <imgage
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{post.title}</h2>
            <p>{post.description}</p>
            <p>Likes: {post.likesCount}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">See More</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostPage;
