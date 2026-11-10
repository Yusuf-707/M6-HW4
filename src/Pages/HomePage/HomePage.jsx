import React from 'react'
import { useProductsList } from './HomePage.api'
import { Link } from 'react-router-dom'

const productCard = (product) => {
  return (
    <Link to={`/product/${product.id}`} key={product.id}>
      <hr />
      <img src={product.image} alt="" />
      <h1>{product.title}</h1>
      <h3>{product.price}</h3>
      <hr />
    </Link>
  )
}

export const HomePage = () => {
  const { data, error, isError, isLoading } = useProductsList()
  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (isError) {
    return <div>Ошибка при получении данных: {error.message}</div>;
  }
  return data?.map(product => productCard(product))
}
