// pages/404.js
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-6xl font-bold text-gray-900">404</h1>
      <p className="text-xl text-gray-600 mt-4">Oops! The page you are looking for does not exist.</p>
      <Link href="/">
        <a className="mt-6 bg-black text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-800 transition">
          Go Back Home
        </a>
      </Link>
    </div>
  );
};

export default NotFound;
