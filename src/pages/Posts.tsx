import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Meta from '../components/Meta';

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
    <div className="max-w-6xl mx-auto px-4 py-8 bg-light-bg dark:bg-gray-900 min-h-screen">
      <Meta
        title="Explore Posts"
        description="Browse and search through a collection of demo posts with infinite scroll and dynamic routing."
      />

      <h1 className="text-3xl font-bold mb-4 font-serif text-pink-punch dark:text-white">
        All Posts
      </h1>

      {/* Search Bar */}
      <div className="mb-6 flex gap-2">
        <input
          type="text"
          placeholder="Search posts..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 px-4 py-2 rounded border border-muted dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white shadow-sm focus:outline-none"
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="px-4 py-2 text-sm bg-pink-punch text-white hover:bg-pink-600 dark:bg-lemon-drop dark:text-black dark:hover:bg-yellow-400 rounded"
          >
            Clear
          </button>
        )}
      </div>

      {/* Post Grid */}
      {loading ? (
        <div className="text-center py-12 text-pink-punch dark:text-lemon-drop font-medium">
          Loading posts...
        </div>
      ) : posts.length === 0 ? (
        <div className="text-center text-pink-punch dark:text-gray-400">
          No posts found.
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.slice(0, visibleCount).map((post) => (
            <div
              key={post.id}
              className="p-6 rounded-lg shadow bg-white dark:bg-gray-800 text-black dark:text-white cursor-pointer hover:shadow-lg transition duration-300"
              onClick={() => navigate(`/posts/${post.id}`)}
            >
              <h3 className="text-lg font-semibold mb-2 text-pink-punch dark:text-lemon-drop">
                {post.title}
              </h3>
              <p className="text-sm text-black dark:text-gray-200 opacity-90 mb-4 line-clamp-3">
                {post.body}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Infinite Scroll Loader */}
      {!loading && isLoadingMore && visibleCount < posts.length && (
        <div className="text-center py-8 text-2xl text-pink-punch dark:text-gray-400 animate-pulse">
          Loading more...
        </div>
      )}
    </div>
  );
};

export default Posts;
