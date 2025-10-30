import Link from "next/link";

const HomeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5 mr-2"
  >
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const SearchIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5 mr-2"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" x2="16.65" y1="21" y2="16.65" />
  </svg>
);

const RocketIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.77-2 1-3.26l.7-4a1 1 0 0 0-.62-1.22l-1.42-.85a1 1 0 0 1-.2-.63v-.86a1 1 0 0 1 .2-.63l1.42-.85a1 1 0 0 0 .62-1.22l-.7-4c-.23-1.26-.17-2.43 1-3.26l5-2s3.74.5 5 2c.71.84.77 2 1 3.26l.7 4a1 1 0 0 0-.62 1.22l-1.42.85a1 1 0 0 1-.2.63v.86a1 1 0 0 1 .2.63l1.42.85a1 1 0 0 0 .62 1.22l-.7 4c-.23 1.26-.17 2.43 1 3.26l-5 2s-3.74-.5-5-2c-.71-.84-.77-2-1-3.26l-.7-4a1 1 0 0 0 .62-1.22l1.42-.85a1 1 0 0 1 .2-.63v-.86a1 1 0 0 1-.2-.63l-1.42-.85a1 1 0 0 0-.62-1.22l.7-4Z" />
  </svg>
);

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 px-4">
      <div className="max-w-md w-full text-center p-8 md:p-12 bg-white dark:bg-gray-800 rounded-xl shadow-2xl transition-all duration-300 transform hover:shadow-3xl">
        <RocketIcon className="mx-auto h-16 w-16 text-indigo-500 dark:text-indigo-400 mb-6 animate-pulse" />

        <p className="text-7xl font-extrabold text-indigo-600 dark:text-indigo-500 mb-4 tracking-tighter">
          404
        </p>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Lost in Hyperspace
        </h1>

        <p className="text-base text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
          The planetary coordinates you entered did not resolve to a valid page.
          It looks like this resource was either moved or never existed.
        </p>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out dark:focus:ring-offset-gray-900"
          >
            <HomeIcon />
            Return to Mission Control
          </Link>

          <Link
            href="/search"
            className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out dark:focus:ring-offset-gray-900"
          >
            <SearchIcon />
            Try Searching
          </Link>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          If you believe this is an error, please{" "}
          <Link
            href="/contact"
            className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium transition duration-150"
          >
            contact support
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
