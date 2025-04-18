import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Cột 1: Giới thiệu */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400 text-sm mb-4">
              Welcome to our website, a wonderful place to explore and learn how to cook like a pro.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                className="flex-grow bg-white text-black px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Enter your email;"
              />
              <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-md">
                Send
              </button>
            </div>
          </div>

          {/* Cột 2: Tìm hiểu thêm */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Learn More</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Our Goals
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  See Our Features
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Cột 3: Cửa hàng */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Gift Subscription
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Send Us Feedback
                </a>
              </li>
            </ul>
          </div>

          {/* Cột 4: Công thức nấu ăn */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Recipes</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  What to Cook This Week
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Pasta
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Dinner
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Healthy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Vegetarian
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Vegan
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Christmas
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Dòng dưới cùng của footer */}
        <div className="mt-8 pt-4 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between text-sm">
          <div className="mb-4 md:mb-0 flex items-center">
             {/* Thay đổi đường dẫn ảnh nếu cần */}
            <img src="./src/assets/chefify.png" alt="Logo" className="h-10 w-40 mr-6" />
            <span className="text-gray-400 mr-4">© 2024 Cheffy Company</span>
            <span className="text-gray-400">Terms of Privical</span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
