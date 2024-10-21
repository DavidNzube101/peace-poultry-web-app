'use client'

import { useState } from 'react'
import Layout from '../../components/Layout'
import { useCart } from '../../context/CartContext'
import { products } from '../../data/products'

export default function Products() {
  const { addToCart, cart } = useCart()
  const [quantities, setQuantities] = useState<{ [key: number]: number }>(
    products.reduce((acc, product) => ({ ...acc, [product.id]: 1 }), {})
  )

  const handleQuantityChange = (id: number, value: number) => {
    setQuantities(prev => ({ ...prev, [id]: value }))
  }

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart({ ...product, quantity: quantities[product.id] })
  }

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Hi, I'm interested in buying some poultry. Here's my order:\n${cart.map(item => `${item.quantity}x ${item.name}`).join('\n')}`)
    window.open(`https://wa.me/YOUR_PHONE_NUMBER?text=${message}`, '_blank')
  }

  const handleMonnifyPayment = () => {
    // Implement Monnify payment integration here
    alert('Monnify payment integration would be implemented here')
  }

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="mb-4">${product.price}</p>
            <div className="flex items-center mb-4">
              <label htmlFor={`quantity-${product.id}`} className="mr-2">
                Quantity:
              </label>
              <input
                type="number"
                id={`quantity-${product.id}`}
                min="1"
                value={quantities[product.id]}
                onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
                className="border rounded px-2 py-1 w-16"
              />
            </div>
            <button
              onClick={() => handleAddToCart(product)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="mt-8 border-t pt-6">
          <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
          {cart.map(item => (
            <div key={item.id} className="flex justify-between items-center mb-2">
              <span>{item.quantity}x {item.name}</span>
              <span>${item.price * item.quantity}</span>
            </div>
          ))}
          <div className="text-xl font-bold mt-4">Total: ${getTotalPrice()}</div>
          <div className="mt-6 flex gap-4">
            <button
              onClick={handleWhatsApp}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Chat on WhatsApp
            </button>
            <button
              onClick={handleMonnifyPayment}
              className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            >
              Pay with Monnify
            </button>
          </div>
        </div>
      )}
    </Layout>
  )
}