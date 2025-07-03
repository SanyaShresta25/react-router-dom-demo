import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

interface Post {
  id: number;
  title: string;
  body: string;
}

const POSTS_PER_PAGE = 10;

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);
  const [loading, setLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState(query);
  const navigate = useNavigate();

  // Debounce search input
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedQuery(query), 500);
    return () => clearTimeout(handler);
  }, [query]);

 
  useEffect(() => {
    setLoading(true);
    setVisibleCount(POSTS_PER_PAGE); 
    const url = debouncedQuery
      ? `https://dummyjson.com/posts/search?q=${debouncedQuery}`
      : `https://dummyjson.com/posts?limit=50`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setPosts(data.posts))
      .catch(() => setPosts([]))
      .finally(() => setLoading(false));
  }, [debouncedQuery]);

  // Infinite scroll handler
  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100 &&
      visibleCount < posts.length &&
      !isLoadingMore
    ) {
      setIsLoadingMore(true);
      setTimeout(() => {
        setVisibleCount((prev) => Math.min(prev + POSTS_PER_PAGE, posts.length));
        setIsLoadingMore(false);
      }, 800); 
    }
  }, [visibleCount, posts.length, isLoadingMore]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 bg-gray-100 dark:bg-black min-h-screen">
 
    
      <h1 className="text-3xl font-bold mb-4 text-black dark:text-white">All Posts</h1>

      <div className="mb-6 flex gap-2">
        <input
          type="text"
          placeholder="Search posts..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 shadow-sm focus:outline-none"
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="px-4 py-2 text-sm bg-gray-300 dark:bg-gray-700 dark:text-white hover:bg-gray-400 dark:hover:bg-gray-600 rounded"
          >
            Clear
          </button>
        )}
      </div>

      {loading ? (
        <div className="text-center py-12 text-black dark:text-white">Loading posts...</div>
      ) : posts.length === 0 ? (
        <div className="text-center text-gray-500 dark:text-gray-400">No posts found.</div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.slice(0, visibleCount).map((post) => (
            <div
              key={post.id}
              className="p-6 rounded-lg shadow bg-white dark:bg-gray-800 cursor-pointer hover:shadow-md transition"
              onClick={() => navigate(`/posts/${post.id}`)}
            >
              <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">
                {post.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                {post.body}
              </p>
            </div>
          ))}
        </div>
      )}

      {!loading && isLoadingMore && visibleCount < posts.length && (
        <div className="text-center py-8 text-2xl text-gray-400 dark:text-gray-500">
          <span className="animated-dots">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </span>
        </div>
      )}
    </div>
  );
};

export default Posts;
