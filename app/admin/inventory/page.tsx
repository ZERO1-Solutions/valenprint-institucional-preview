'use client'

import { useEffect, useState } from 'react'

type Category = {
  id: string
  name: string
}

type Product = {
  id: string
  name: string
  stock: number
  category: Category
}

export default function InventoryPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  const fetchProducts = async () => {
    const res = await fetch('/api/products')
    const data = await res.json()
    setProducts(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const updateStock = async (id: string, stock: number) => {
    await fetch(`/api/products/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ stock }),
    })
    fetchProducts()
  }

  if (loading) return <p>Carregando...</p>

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Gerenciar Estoque</h2>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                Produto
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                Categoria
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                Estoque
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                Ações
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {products.map((prod) => (
              <tr key={prod.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <p className="font-semibold">{prod.name}</p>
                </td>
                <td className="px-6 py-4 text-gray-500">{prod.category.name}</td>
                <td className="px-6 py-4">
                  <input
                    type="number"
                    value={prod.stock}
                    onChange={(e) => {
                      const newStock = parseInt(e.target.value) || 0
                      updateStock(prod.id, newStock)
                    }}
                    className="w-24 px-3 py-2 rounded-lg border border-gray-200 focus:border-pink focus:outline-none focus:ring-2 focus:ring-pink/20"
                  />
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      prod.stock > 50
                        ? 'bg-green-100 text-green-700'
                        : prod.stock > 10
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {prod.stock > 50
                      ? 'Disponível'
                      : prod.stock > 10
                      ? 'Baixo'
                      : 'Crítico'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
