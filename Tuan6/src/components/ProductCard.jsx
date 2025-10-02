import React from 'react'

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition duration-300 flex flex-col">
      <div className="h-48 w-full bg-gray-100 flex items-center justify-center">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full object-contain p-2"
        />
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">{product.title}</h3>
        <p className="text-sm text-gray-500 line-clamp-2 mt-1 flex-1">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-blue-600">${product.price}</span>
          <span className="text-sm text-gray-400">⭐ {product.rating}</span>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
