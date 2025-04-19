import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'

const ProductListingPage = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)

  const productsPerPage = 12

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data.products)
        setLoading(false)
      })
      .catch(err => {
        console.error('Lỗi khi tải sản phẩm:', err)
        setLoading(false)
      })
  }, [])

  const totalPages = Math.ceil(products.length / productsPerPage)

  const handlePrev = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1))
  }

  const handleNext = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages))
  }

  const paginatedProducts = products.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  )

  if (loading) {
    return <div className="p-10 text-center text-xl">Đang tải dữ liệu...</div>
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">
        🛍️ Danh sách sản phẩm
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        {paginatedProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-10 flex justify-center items-center gap-4">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
          ← Trang trước
        </button>
        <span className="text-gray-700 font-medium">
          Trang {currentPage} / {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
          Trang sau →
        </button>
      </div>
    </div>
  )
}

export default ProductListingPage
