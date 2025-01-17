import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex justify-around text-white">
        <li>
          <Link to="/" className="hover:text-gray-200">Home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-gray-200">About</Link>
        </li>
       
      </ul>
    </nav>
  );
};

export default Navbar;
