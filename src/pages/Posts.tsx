import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState(''); // Input value as user types
  const [debouncedQuery, setDebouncedQuery] = useState(query); // Debounced value
  const navigate = useNavigate();

  //  Debounce Effect:
  // This waits for the user to stop typing for 500ms before updating the debounced query
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query); // Set debounced value only after delay
    }, 500);

    return () => clearTimeout(handler); // Clear previous timer on every keystroke
  }, [query]);

  //  Fetch posts when the debounced value changes
  useEffect(() => {
    setLoading(true);
    const url = debouncedQuery
      ? `https://dummyjson.com/posts/search?q=${debouncedQuery}` // If user typed something
      : `https://dummyjson.com/posts?limit=150`; // Otherwise, fetch all posts

    fetch(url)
      .then((res) => res.json())
      .then((data) => setPosts(data.posts))
      .catch(() => setPosts([]))
      .finally(() => setLoading(false));
  }, [debouncedQuery]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-black">All Posts</h1>


      <div className="mb-6 flex gap-2">
        <input
          type="text"
          placeholder="Search posts..."
          value={query}
          onChange={(e) => setQuery(e.target.value)} // Typing updates the input value
          className="flex-1 px-4 py-2 rounded border shadow-sm"
        />
        {query && (
          <button
            onClick={() => setQuery('')} // Clear input when button is clicked
            className="px-4 py-2 text-sm bg-gray-300 hover:bg-gray-400 rounded"
          >
            Clear
          </button>
        )}
      </div>


      {loading ? (
        <div className="text-center py-12">Loading posts...</div>
      ) : posts.length === 0 ? (
        <div className="text-center text-gray-500">No posts found.</div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="p-6 rounded-lg shadow bg-white cursor-pointer hover:shadow-md transition"
              onClick={() => navigate(`/posts/${post.id}`)} 
            >
              <h3 className="text-lg font-semibold mb-2 text-black">{post.title}</h3>
              <p className="text-sm text-gray-600 mb-4 line-clamp-3">{post.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Posts;
