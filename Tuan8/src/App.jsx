import React from "react";

const BookmarkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white bg-red-500 rounded-full p-1">
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
  </svg>
);

export default function RecipeCard() {
  return (
    <div className="relative w-full min-h-screen bg-white font-sans">
      {/* Header */}
      <div className="flex justify-between items-center px-10 py-5 shadow-md">
        <div className="flex items-center space-x-2">
          <img
            src="../src/assets/chefify.png" // Replace with actual logo URL
            alt="Chefify Logo"
            className="w-38 h-10"
          />
        </div>
        <input
          type="text"
          placeholder="What would you like to cook?"
          className="px-4 py-2 w-1/3 rounded-full bg-gray-100 text-sm outline-none"
        />
        <div className="flex space-x-6 items-center text-gray-700">
          <a href="#">What to cook</a>
          <a href="#">Recipes</a>
          <a href="#">Ingredients</a>
          <a href="#">Occasions</a>
          <a href="#">About Us</a>
          <button className="text-pink-600 bg-pink-200 w-25 h-8 rounded-lg">
            Log in
          </button>
          <button className="bg-pink-500 text-white px-4 py-1 rounded-lg hover:bg-pink-600">
            Sign up
          </button>
        </div>
      </div>

      {/* Main Banner */}
      <div className="w-full max-w-[2560px] mx-auto overflow-hidden">
        <img
          src="../src/assets/images.jpg" // Replace with actual banner URL
          alt="Cooking Banner"
          className="w-full h-[600px] object-cover object-center"
        />

        {/* Card */}
        <div className="absolute top-[377px] left-20 transform -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg w-96 text-center">
          <div className="absolute top-[-13px] left-[77px] bg-yellow-400 px-3 py-1 rounded-sm text-sm font-semibold inline-block mb-2 w-60">
            Today's Recipe
          </div>
          <h2 className="text-pink-600 font-bold text-xl mb-2">Caprese Salad</h2>
          <p className="text-gray-700 text-sm mb-14">
            Classic Italian Caprese salad: ripe tomatoes, fresh mozzarella,
            herbs, olive oil & balsamic glaze make a fresh dish for lunch or
            appetizer.
          </p>
          <div className="flex items-center justify-center mb-4">
            <img
              src="../src/assets/avatar.png" // Replace with actual chef avatar URL
              alt="Chef Avatar"
              className="w-10 h-10 rounded-full mr-2"
            />
            <span className="text-sm font-medium">Caprese Salad</span>
          </div>
          <button className="bg-pink-500 text-white px-4 py-2 rounded-full text-sm hover:bg-pink-600">
            View now →
          </button>
        </div>
      </div>

      {/* This Summer's Recipes Section */}
      <div className="py-12 px-6 md:px-10 lg:px-20">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
          This Summer's Recipes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Italian Tomato Salad */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <img
                src="../src/assets/Lotus delight salad_01.png" // Replace with actual image URL
                alt="Italian Tomato Salad"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center">
                <h3 className="text-lg font-semibold text-gray-800 mr-20">
                  Italian Tomato Salad
                </h3>
                <img
                  src="../src/assets/Icon Button 73.png" // Replace with actual icon URL
                  alt="Tomato Salad"
                  className="w-8 h-2 h-auto object-cover"
                />
              </div>
              <p className="text-gray-600 text-sm mt-2 pl-2 bg-pink-200 rounded-full w-22 items-center">
                14 minutes
              </p>
            </div>
          </div>

          {/* Spaghetti with Vegetables */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <img
                src="../src/assets/Lotus delight salad_01.png" // Replace with actual image URL
                alt="Italian Tomato Salad"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center">
                <h3 className="text-lg font-semibold text-gray-800 mr-20">
                  Italian Tomato Salad
                </h3>
                <img
                  src="../src/assets/Icon Button 73.png" // Replace with actual icon URL
                  alt="Tomato Salad"
                  className="w-8 h-2 h-auto object-cover"
                />
              </div>
              <p className="text-gray-600 text-sm mt-2 pl-2 bg-pink-200 rounded-full w-22 items-center">
                14 minutes
              </p>
            </div>
          </div>

          {/* Lotus Delight Salad */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <img
                src="../src/assets/Lotus delight salad_01.png" // Replace with actual image URL
                alt="Italian Tomato Salad"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center">
                <h3 className="text-lg font-semibold text-gray-800 mr-20">
                  Italian Tomato Salad
                </h3>
                <img
                  src="../src/assets/Icon Button 73.png" // Replace with actual icon URL
                  alt="Tomato Salad"
                  className="w-8 h-2 h-auto object-cover"
                />
              </div>
              <p className="text-gray-600 text-sm mt-2 pl-2 bg-pink-200 rounded-full w-22 items-center">
                14 minutes
              </p>
            </div>
          </div>

          {/* Snack */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <img
                src="../src/assets/Lotus delight salad_01.png" // Replace with actual image URL
                alt="Italian Tomato Salad"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center">
                <h3 className="text-lg font-semibold text-gray-800 mr-20">
                  Italian Tomato Salad
                </h3>
                <img
                  src="../src/assets/Icon Button 73.png" // Replace with actual icon URL
                  alt="Tomato Salad"
                  className="w-8 h-2 h-auto object-cover"
                />
              </div>
              <p className="text-gray-600 text-sm mt-2 pl-2 bg-pink-200 rounded-full w-22 items-center">
                14 minutes
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Recipes with Videos Section */}
      <div className="py-12 px-6 md:px-10 lg:px-20 bg-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
          Recipes with Videos
        </h2>
        <p className="text-gray-700 text-center mb-8">
          Cook great dishes with step-by-step video tutorials
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Salad with Cabbage and Shrimp */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <img
                src="../src/assets/Lotus delight salad_01.png" // Replace with actual image URL
                alt="Italian Tomato Salad"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center">
                <h3 className="text-lg font-semibold text-gray-800 mr-20">
                  Italian Tomato Salad
                </h3>
                <img
                  src="../src/assets/Icon Button 73.png" // Replace with actual icon URL
                  alt="Tomato Salad"
                  className="w-8 h-2 h-auto object-cover"
                />
              </div>
              <p className="text-gray-600 text-sm mt-2 pl-2 bg-pink-200 rounded-full w-22 items-center">
                14 minutes
              </p>
            </div>
          </div>

          {/* Green Bean, Shrimp, and Potato Salad */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <img
                src="../src/assets/Lotus delight salad_01.png" // Replace with actual image URL
                alt="Italian Tomato Salad"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center">
                <h3 className="text-lg font-semibold text-gray-800 mr-20">
                  Italian Tomato Salad
                </h3>
                <img
                  src="../src/assets/Icon Button 73.png" // Replace with actual icon URL
                  alt="Tomato Salad"
                  className="w-8 h-2 h-auto object-cover"
                />
              </div>
              <p className="text-gray-600 text-sm mt-2 pl-2 bg-pink-200 rounded-full w-22 items-center">
                14 minutes
              </p>
            </div>
          </div>

          {/* Fried Egg */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <img
                src="../src/assets/Lotus delight salad_01.png" // Replace with actual image URL
                alt="Italian Tomato Salad"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center">
                <h3 className="text-lg font-semibold text-gray-800 mr-20">
                  Italian Tomato Salad
                </h3>
                <img
                  src="../src/assets/Icon Button 73.png" // Replace with actual icon URL
                  alt="Tomato Salad"
                  className="w-8 h-2 h-auto object-cover"
                />
              </div>
              <p className="text-gray-600 text-sm mt-2 pl-2 bg-pink-200 rounded-full w-22 items-center">
                14 minutes
              </p>
            </div>
          </div>

          {/* Lotus Delight Salad */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <img
                src="../src/assets/Lotus delight salad_01.png" // Replace with actual image URL
                alt="Italian Tomato Salad"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center">
                <h3 className="text-lg font-semibold text-gray-800 mr-20">
                  Italian Tomato Salad
                </h3>
                <img
                  src="../src/assets/Icon Button 73.png" // Replace with actual icon URL
                  alt="Tomato Salad"
                  className="w-8 h-2 h-auto object-cover"
                />
              </div>
              <p className="text-gray-600 text-sm mt-2 pl-2 bg-pink-200 rounded-full w-22 items-center">
                14 minutes
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Editor's Choice Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Editor's Choice
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Mouthwatering selections: Our expert editors' favorite picks!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex">
              <div className="w-1/2">
                <img
                  src="../src/assets/Lotus delight salad_01.png"
                  alt="Sticky Rice Cake with Beans"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-1/2 flex flex-col justify-between relative">
                <div className="absolute top-2 right-2">
                  <img src="../src/assets/Icon Button 73.png" alt="" />
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Sticky Rice Cake with Beans</h3>
                  <p className="text-gray-600 text-sm mb-2">34 minutes</p>
                  <p className="text-gray-700 text-sm">
                    Sticky rice cake with beans: A delightful Asian treat
                    with chewy rice and a flavorful surprise filling.
                  </p>
                </div>
                <div className="flex items-center p-4">
                  <img
                    src="../src/assets/avatar.png"
                    alt="Jennifer King"
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <span className="text-sm font-medium text-gray-900">Jennifer King</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden flex">
              <div className="w-1/2">
                <img
                  src="../src/assets/Lotus delight salad_01.png"
                  alt="Sticky Rice Cake with Beans"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-1/2 flex flex-col justify-between relative">
                <div className="absolute top-2 right-2">
                  <img src="../src/assets/Icon Button 73.png" alt="" />
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Sticky Rice Cake with Beans</h3>
                  <p className="text-gray-600 text-sm mb-2">34 minutes</p>
                  <p className="text-gray-700 text-sm">
                    Sticky rice cake with beans: A delightful Asian treat
                    with chewy rice and a flavorful surprise filling.
                  </p>
                </div>
                <div className="flex items-center p-4">
                  <img
                    src="../src/assets/avatar.png"
                    alt="Jennifer King"
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <span className="text-sm font-medium text-gray-900">Jennifer King</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden flex">
              <div className="w-1/2">
                <img
                  src="../src/assets/Lotus delight salad_01.png"
                  alt="Sticky Rice Cake with Beans"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-1/2 flex flex-col justify-between relative">
                <div className="absolute top-2 right-2">
                  <img src="../src/assets/Icon Button 73.png" alt="" />
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Sticky Rice Cake with Beans</h3>
                  <p className="text-gray-600 text-sm mb-2">34 minutes</p>
                  <p className="text-gray-700 text-sm">
                    Sticky rice cake with beans: A delightful Asian treat
                    with chewy rice and a flavorful surprise filling.
                  </p>
                </div>
                <div className="flex items-center p-4">
                  <img
                    src="../src/assets/avatar.png"
                    alt="Jennifer King"
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <span className="text-sm font-medium text-gray-900">Jennifer King</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden flex">
              <div className="w-1/2">
                <img
                  src="../src/assets/Lotus delight salad_01.png"
                  alt="Sticky Rice Cake with Beans"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-1/2 flex flex-col justify-between relative">
                <div className="absolute top-2 right-2">
                  <img src="../src/assets/Icon Button 73.png" alt="" />
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Sticky Rice Cake with Beans</h3>
                  <p className="text-gray-600 text-sm mb-2">34 minutes</p>
                  <p className="text-gray-700 text-sm">
                    Sticky rice cake with beans: A delightful Asian treat
                    with chewy rice and a flavorful surprise filling.
                  </p>
                </div>
                <div className="flex items-center p-4">
                  <img
                    src="../src/assets/avatar.png"
                    alt="Jennifer King"
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <span className="text-sm font-medium text-gray-900">Jennifer King</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Cột 1: About Us */}
            <div>
              <h5 className="text-lg font-semibold mb-2">About Us</h5>
              <p className="text-sm mb-3">
                Welcome to our website, a wonderful place to explore and learn
                how to cook like a pro.
              </p>
              <div className="flex mt-2 gap-2">
                <input
                  type="email"
                  className="bg-gray-800 text-white px-3 py-2 rounded-l outline-none w-full"
                  placeholder="Enter your email"
                />
                <button
                  className="bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-r text-white"
                >
                  Send
                </button>
              </div>
            </div>

            {/* Cột 2: Learn More + Shop */}
            <div className="ml-50">
              <h5 className="text-lg font-semibold mb-2">Learn More</h5>
              <ul className="space-y-1 text-sm mb-16">
                <li><a href="#" className="hover:underline">Our Cooks</a></li>
                <li><a href="#" className="hover:underline">See Our Features</a></li>
                <li><a href="#" className="hover:underline">FAQ</a></li>
              </ul>
              <h5 className="text-lg font-semibold mb-2">Shop</h5>
              <ul className="space-y-1 text-sm">
                <li><a href="#" className="hover:underline">Gift Subscription</a></li>
                <li><a href="#" className="hover:underline">Send Us Feedback</a></li>
              </ul>
            </div>

            {/* Cột 3: Recipes */}
            <div className="ml-50">
              <h5 className="text-lg font-semibold mb-2">Recipes</h5>
              <ul className="space-y-1 text-sm">
                <li><a href="#" className="hover:underline">What to Cook This Week</a></li>
                <li><a href="#" className="hover:underline">Pasta</a></li>
                <li><a href="#" className="hover:underline">Dinner</a></li>
                <li><a href="#" className="hover:underline">Healthy</a></li>
                <li><a href="#" className="hover:underline">Vegetarian</a></li>
                <li><a href="#" className="hover:underline">Vegan</a></li>
                <li><a href="#" className="hover:underline">Christmas</a></li>
              </ul>
            </div>
          </div>

          {/* Dòng cuối của footer */}
          <div className="border-t border-gray-700 mt-8 pt-4 flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-2 md:mb-0 gap-8">
              <img
                src="../src/assets/white_chefify.png"
                alt="Logo"
                width="100"
                className="mr-2"
              />
              <span className="text-sm">© 2023 Cheffy Company</span>
              <div className="text-sm space-x-4">
              <a href="#" className="hover:underline">Terms of Service</a>
              <a href="#" className="hover:underline">Privacy Policy</a>
            </div>
            </div>
          </div>
        </div>
      </footer>


    </div >
  );
}

