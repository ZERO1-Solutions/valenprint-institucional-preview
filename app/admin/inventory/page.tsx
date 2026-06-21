'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Home } from 'lucide-react'

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

const initialCategories: Category[] = [
  { id: '1', name: 'Canecas' },
  { id: '2', name: 'Squeezes' },
  { id: '3', name: 'Copos' },
]

const initialProducts: Product[] = [
  { id: '1', name: 'Caneca Cerâmica Branca', stock: 150, category: initialCategories[0] },
  { id: '2', name: 'Squeeze Alumínio 500ml', stock: 45, category: initialCategories[1] },
  { id: '3', name: 'Copo de Vidro Fosco', stock: 5, category: initialCategories[2] },
]

export default function InventoryPage() {
  const [products, setProducts] = useState<Product[]>(initialProducts)

  const updateStock = (id: string, stock: number) => {
    setProducts(products.map(p => 
      p.id === id ? { ...p, stock } : p
    ))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-pink">
                <Home size={20} />
                Voltar ao site
              </Link>
              <h1 className="text-2xl font-bold">
                Valen<span className="text-pink">Print</span> Admin
              </h1>
            </div>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Gerenciar Estoque</h2>
          <Link href="/admin" className="text-pink hover:underline">
            Voltar ao Dashboard
          </Link>
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
      </main>
    </div>
  )
}
