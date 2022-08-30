import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gray-200 text-black text-2xl font-bold">
      <ul className="flex flex-row gap-6 justify-center py-8">
        <li className="hover:border-l-4 border-green-600">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:border-l-4 border-green-600">
          <Link to="create-new">New</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
