export default async function Post({ params }) {
  const { id } = await params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );
  const post = await response.json();
  return (
    <div>
      <h5>{post.title}</h5>
      <span>n° {post.id}</span>
    </div>
  );
}
