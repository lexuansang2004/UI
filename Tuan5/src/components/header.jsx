import React from 'react';

const Header = () => {
  return (
    <nav className="bg-white h-full w-full py-3">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img src="./src/assets/chefify.png" alt="Logo" className="w-[150px] h-[40px] object-contain" />
        </a>

        {/* Search bar */}
        <div className="flex-1 mx-4">
          <div className="flex items-center bg-gray-100 rounded-xl px-4 py-2">
            <img src="./src/assets/icons8-search-50.png" alt="Search" className="w-5 h-5 mr-2" />
            <input
              type="text"
              placeholder="What would you like to cook?"
              className="flex-1 bg-transparent focus:outline-none text-sm placeholder-gray-500"
            />
          </div>
        </div>

        {/* Centered nav links - hidden on small screens */}
        <div className="hidden lg:flex justify-center flex-2">
          <ul className="flex space-x-6 text-sm font-medium text-gray-700">
            <li><a href="#" className="hover:text-orange-500">What to cook</a></li>
            <li><a href="#" className="hover:text-orange-500">Recipes</a></li>
            <li><a href="#" className="hover:text-orange-500">Ingredients</a></li>
            <li><a href="#" className="hover:text-orange-500">Occasions</a></li>
            <li><a href="#" className="hover:text-orange-500">About Us</a></li>
          </ul>
        </div>

        {/* Recipe box & Avatar */}
        <div className="flex items-center space-x-4 ml-4">
          <button className="hover:bg-pink-300 px-4 py-2 rounded-full text-sm flex items-center space-x-2 !bg-pink-200">
            {/* Icon and text within the button */}
            <img src="./src/assets/archive_check.png" alt="Recipe Box Icon" className="w-5 h-5" />
            <span className="text-pink-500">Your Recipe Box</span>
          </button>


          {/* Profile Picture */}
          <img
            src="./src/assets/avatar.png"
            alt="User"
            className="w-10 h-10 rounded-full object-cover border border-gray-200"
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;
