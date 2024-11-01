import { Link } from 'react-router-dom';

const Header = () => {
 


  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex justify-between items-center py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-orange-500">
          <Link to="/">Printing Solutions</Link>
        </div>

        {/* Search Bar */}
        <div className="w-1/3 relative">
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-full focus:outline-none"
            placeholder="Search for services or products..."
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white px-4 py-2 rounded-full">
            <i className="fal fa-search"></i> {/* Pro FontAwesome Search Icon */}
          </button>
        </div>

        {/* Icons (User Account, Cart) */}
        <div className="flex items-center space-x-6">
          <Link to="/profile" className="text-gray-700 hover:text-orange-500">
            <i className="fal fa-user-circle"></i> {/* Pro FontAwesome User Icon */}
          </Link>
                
          <Link to="/cart" className="relative text-gray-700 hover:text-orange-500">
            <i className="fal fa-shopping-cart"></i> {/* Pro FontAwesome Cart Icon */}
            <span className="absolute top-0 right-0 text-xs text-white bg-orange-500 rounded-full w-4 h-4 flex items-center justify-center">0</span>
          </Link>
        </div>
      </div>
    </header>
  );
  
};

export default Header;
