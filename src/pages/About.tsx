import Meta from '../components/Meta';

const aboutItems = [
{
  title: 'React Router',
  desc: 'React Router is a powerful routing library for React applications, enabling seamless navigation between different views or pages without reloading the entire page. It provides dynamic, client-side routing capabilities and supports features like nested routes, route parameters, redirects, protected routes using guards, and lazy loading of components. React Router enhances the user experience by maintaining application state during navigation, allowing developers to build single-page applications (SPAs) that feel fast and responsive. With a declarative API and tight integration with React, it simplifies route configuration and component rendering based on the current URL, ensuring modular and maintainable code architecture.',
  link: 'https://reactrouter.com/en/main',
  className: 'col-span-2 row-span-2 bg-pink-punch',
},

  {
    title: 'React Context API',
    desc: 'The Context API allows global state sharing like themes or auth, without manually passing props through every level of the component tree.',
    link: 'https://react.dev/learn/passing-data-deeply-with-context',
    className: 'bg-lemon-drop',
  },
  {
    title: 'Pagination',
    desc: 'Pagination divides content into smaller chunks to improve performance and user experience by avoiding large data loads and enabling features like lazy loading.',
    link: 'https://react.dev/learn/rendering-lists#keeping-list-rendering-fast',
    className: 'bg-lime-wedge',
  },
  {
    title: 'Debouncing in Search',
    desc: 'Debouncing reduces how often a function runs, making it ideal for search inputs by preventing too many API calls and improving performance.',
    link: 'https://developer.mozilla.org/en-US/docs/Web/API/setTimeout#debouncing-input',
    className: 'bg-orange-paloma',
  },
  {
    title: 'useEffect Hook',
    desc: 'useEffect lets you run side effects after render. You can control when it runs using a dependency array, ideal for fetching data or syncing state.',
    link: 'https://react.dev/reference/react/useEffect',
    className:  'bg-pink-punch',
  },
  {
    title: 'useNavigate Hook',
    desc: 'useNavigate from React Router lets you navigate programmatically, useful for redirecting users after login or form submission.',
    link: 'https://reactrouter.com/en/main/hooks/use-navigate',
    className: 'bg-violet-syrup',
  },
  {
    title: 'React Router DOM',
    desc: 'React Router DOM is the web-specific version of React Router, offering hooks and components to implement client-side routing.',
    link: 'https://reactrouter.com/en/main/start/tutorial',
    className: 'bg-lemon-drop',
  },
  {
    title: 'useState Hook',
    desc: 'The useState hook adds state to functional components. It returns the current state and a function to update it, enabling dynamic UIs.',
    link: 'https://react.dev/reference/react/useState',
    className: 'bg-lime-wedge',
  },
  {
    title: 'useRef Hook',
    desc: 'useRef gives you a mutable object to hold a value across renders. It’s great for accessing DOM elements or persisting values without re-rendering.',
    link: 'https://react.dev/reference/react/useRef',
    className: 'bg-orange-paloma',
  },
];


const About = () => {
  return (
    <>
      <Meta
        title="About the Project"
        description="Explore React Router, Context API, Pagination, and Debouncing in this project."
      />
      <div className="min-h-screen bg-light-bg dark:bg-black px-4 py-10">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-black dark:text-white mb-2">
            About This Project
          </h1>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-base sm:text-lg">
            This application showcases best practices in modern React development with routing, state sharing,
            and performance optimization techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[250px] max-w-7xl mx-auto">
          {aboutItems.map((item, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 shadow hover:shadow-md transition duration-300 flex flex-col justify-between ${item.className} text-black dark:text-white`}
            >
              <div>
                <h2 className="text-lg sm:text-xl font-semibold mb-2">{item.title}</h2>
                <p className="text-sm sm:text-base leading-relaxed">{item.desc}</p>
              </div>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block underline underline-offset-2 text-sm hover:opacity-80"
                >
                  Read more
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
