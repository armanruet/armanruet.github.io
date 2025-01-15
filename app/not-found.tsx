import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
        The page you're looking for doesn't exist.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        Go Home
      </Link>
    </div>
  );
}
