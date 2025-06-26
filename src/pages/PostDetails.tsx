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

  if (loading) return <div className="text-center py-12">Loading post...</div>;
  if (!post) return <div className="text-center py-12 text-gray-500">Post not found</div>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-black mb-4">{post.title}</h1>
      <p className="text-gray-700 mb-4">{post.body}</p>
      <div className="text-sm text-gray-600 mb-2">👤 User ID: {post.userId}</div>
      <div className="text-sm text-gray-600 mb-2">👁️ Views: {post.views}</div>
      <div className="text-sm text-gray-600 mb-4">👍 {post.reactions?.likes} 👎 {post.reactions?.dislikes}</div>

      <div className="flex flex-wrap gap-2">
        {post.tags?.map((tag: string) => (
          <span key={tag} className="px-2 py-1 bg-gray-200 rounded-full text-xs">#{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default PostDetails;
