import Link from "next/link";

async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
}

export default async function Posts() {
  const listOfPosts = await getPosts();
  return (
    <div>
      <ul>
        {listOfPosts.map((post) => {
          return (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>
                <h5>{post.title}</h5>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
