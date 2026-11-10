import React from 'react'
import { useProductList } from './ProductPage.api'
import { useNavigate, useParams } from 'react-router-dom'
const productCard = (product, navigate) => {
  return (
    <div>
      <button onClick={() => navigate('/')}>Close</button>
      <img src={product.image} alt="" />
      <h2>{product.description}</h2>
      <h2>категорию: {product.category}</h2>
      <h5>рейтинг: {product.rating.rate}</h5>
      <h4>ценa: {product.price}</h4>
    </div>
  )
}
export const ProductPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { data, error, isError, isLoading } = useProductList(id)
  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (isError) {
    return <div>Ошибка при получении данных: {error.message}</div>;
  }
  return productCard(data, navigate)
}
