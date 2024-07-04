import { useNavigate, Link, Navigate } from 'react-router-dom'
import React from 'react'
function ProductList () {
  const navigate = useNavigate()
  return (
    <div>
      ProductList{' '}
      <button
        onClick={() => {
          navigate('/product/create')
        }}
      >
        Add Product
      </button>
    </div>
  )
}
export default ProductList
