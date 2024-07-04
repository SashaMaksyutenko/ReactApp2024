import React from 'react'
import { useNavigate } from 'react-router-dom'
function CreateProduct () {
  const navigate = useNavigate()
  return (
    <div>
      create product
      <button
        onClick={() => {
          navigate(-1)
        }}
      >
        go back
      </button>
    </div>
  )
}
export default CreateProduct
