import Link from 'next/link';
import { useState } from 'react';

export default function Navbar({ user }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <a>GoldTube</a>
        </Link>
        {user ? (
          <div className="flex items-center">
            <span className="mr-4">{user.username}</span>
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded" onClick={handleToggle}>
              Upload Video
            </button>
          </div>
        ) : (
          <Link href="/login">
            <a>Login</a>
          </Link>
        )}
      </div>
      {isOpen && (
        <div className="bg-gray-800 text-white py-4 absolute top-16 right-0 w-64">
          <ul>
            <li>
              <Link href="/dashboard">
                <a>Dashboard</a>
              </Link>
            </li>
            <li>
              <Link href="/logout">
                <a>Logout</a>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}