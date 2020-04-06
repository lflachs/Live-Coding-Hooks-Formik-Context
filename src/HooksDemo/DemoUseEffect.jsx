import React from "react";

function DemoUseEffect() {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <h1>{post.title}</h1>
      ))}
    </div>
  );
}

export default DemoUseEffect;
