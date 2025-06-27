import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch(() => setPost(null))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading)
    return <div className="text-center py-12 text-black dark:text-white">Loading post...</div>;

  if (!post)
    return <div className="text-center py-12 text-gray-500 dark:text-gray-400">Post not found</div>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 bg-gray-100 dark:bg-black min-h-screen">
      <h1 className="text-3xl font-bold text-black dark:text-white mb-4">{post.title}</h1>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{post.body}</p>
      <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">👤 User ID: {post.userId}</div>
      <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">👁️ Views: {post.views}</div>
      <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        👍 {post.reactions?.likes} 👎 {post.reactions?.dislikes}
      </div>

      <div className="flex flex-wrap gap-2">
        {post.tags?.map((tag: string) => (
          <span
            key={tag}
            className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-full text-xs"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PostDetails;
