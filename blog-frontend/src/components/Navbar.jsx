import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white dark:bg-gray-900 shadow px-6 py-4 mb-6 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-blue-700 dark:text-white">📝 Blogify</Link>
      <div className="flex items-center space-x-3">
        <DarkModeToggle />
        {user ? (
          <>
            <span className="text-gray-600 dark:text-gray-300">Welcome, <strong>{user.username}</strong></span>
            <Link to="/create" className="text-sm bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">
              + New Post
            </Link>
            <button
              onClick={logout}
              className="text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="text-sm bg-gray-700 text-white px-3 py-1 rounded hover:bg-gray-800">Login</Link>
            <Link to="/register" className="text-sm bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
