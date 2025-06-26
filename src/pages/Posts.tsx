import { useEffect, useState } from 'react';

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/posts?limit=150')
      .then(res => res.json())
      .then(data => {
        setPosts(data.posts);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center text-center px-4">
        <p className="text-lg text-gray-700">Loading posts...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-black">All Posts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(post => (
            <div key={post.id} className="p-6 rounded-xl shadow bg-white">
              <h3 className="text-lg font-semibold mb-2 text-black">{post.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{post.body}</p>
              <div className="text-sm text-gray-700 mb-1">👤 User ID: {post.userId}</div>
              <div className="text-sm text-gray-700 mb-1">👁️ Views: {post.views}</div>
              <div className="text-sm text-gray-700 mb-1">
                👍 {post.reactions.likes} &nbsp; 👎 {post.reactions.dislikes}
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {post.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-gray-200 rounded-full text-xs text-gray-700"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Posts;
