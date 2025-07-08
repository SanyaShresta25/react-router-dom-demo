import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Meta from '../components/Meta';

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
    return (
      <div className="text-center py-12 text-violet-syrup dark:text-lemon-drop">
        Loading post...
      </div>
    );

  if (!post)
    return (
      <div className="text-center py-12 text-muted dark:text-blue-crystal">
        Post not found
      </div>
    );

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 bg-light-bg dark:bg-dark-bg min-h-screen rounded-xl shadow-md">
      <Meta title={` ${post.title}`} />

      <h1 className="text-3xl font-bold text-violet-syrup dark:text-lemon-drop mb-4">
        {post.title}
      </h1>

      <p className="text-gray-800 dark:text-blue-crystal mb-4">{post.body}</p>

      <div className="text-sm text-muted dark:text-orange-paloma mb-2">
        👤 User ID: {post.userId}
      </div>
      <div className="text-sm text-muted dark:text-orange-paloma mb-2">
        👁️ Views: {post.views}
      </div>
      <div className="text-sm text-muted dark:text-orange-paloma mb-4">
        👍 {post.reactions?.likes} &nbsp;&nbsp; 👎 {post.reactions?.dislikes}
      </div>

      <div className="flex flex-wrap gap-2">
        {post.tags?.map((tag: string) => (
          <span
            key={tag}
            className="px-2 py-1 bg-orange-paloma dark:bg-pink-punch text-white rounded-full text-xs font-medium"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PostDetails;
