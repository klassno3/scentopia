import React from 'react'
import Hero from '../components/Hero'
import Discount from '../components/Discount'
import Brands from '../components/Brands'
import ProductList from '../components/ProductList'

export default function Home() {
  return (
    <div>
      <Hero />
      <Discount />
      <ProductList/>
      <Brands/>
      
    </div>
  )
}
