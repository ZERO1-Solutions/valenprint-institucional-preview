'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import { Home } from 'lucide-react'

type Category = {
  id: string
  name: string
  slug: string
}

type Product = {
  id: string
  name: string
  description: string
  imageUrl: string
  price: number
  stock: number
  isFeatured: boolean
  categoryId: string
  category: Category
}

const initialCategories: Category[] = [
  { id: '1', name: 'Canecas', slug: 'canecas' },
  { id: '2', name: 'Squeezes', slug: 'squeezes' },
  { id: '3', name: 'Copos', slug: 'copos' },
  { id: '4', name: 'Garrafas Térmicas', slug: 'garrafas-termicas' },
  { id: '5', name: 'Kits Corporativos', slug: 'kits-corporativos' },
]

const initialProducts: Product[] = [
  { 
    id: '1', 
    name: 'Caneca Cerâmica Branca', 
    description: 'Caneca de cerâmica premium com sua logo ou arte personalizada', 
    imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80', 
    price: 29.90, 
    stock: 150, 
    isFeatured: true, 
    categoryId: '1', 
    category: initialCategories[0] 
  },
  { 
    id: '2', 
    name: 'Squeeze Alumínio 500ml', 
    description: 'Squeeze ecológico e resistente, ideal para esportes e eventos', 
    imageUrl: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=800&q=80', 
    price: 34.90, 
    stock: 80, 
    isFeatured: true, 
    categoryId: '2', 
    category: initialCategories[1] 
  },
  { 
    id: '3', 
    name: 'Copo de Vidro Fosco', 
    description: 'Copo de vidro fosco elegante para eventos especiais', 
    imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80', 
    price: 19.90, 
    stock: 200, 
    isFeatured: false, 
    categoryId: '3', 
    category: initialCategories[2] 
  },
]

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>(initialProducts)
  const [categories] = useState<Category[]>(initialCategories)
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    imageUrl: '',
    price: '',
    stock: '',
    isFeatured: false,
    categoryId: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const category = categories.find(c => c.id === formData.categoryId)
    if (category) {
      const newProduct: Product = {
        id: Date.now().toString(),
        name: formData.name,
        description: formData.description,
        imageUrl: formData.imageUrl,
        price: parseFloat(formData.price),
        stock: parseInt(formData.stock),
        isFeatured: formData.isFeatured,
        categoryId: formData.categoryId,
        category,
      }
      setProducts([...products, newProduct])
      setFormData({
        name: '',
        description: '',
        imageUrl: '',
        price: '',
        stock: '',
        isFeatured: false,
        categoryId: '',
      })
    }
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
          <h2 className="text-2xl font-bold">Produtos</h2>
          <Link href="/admin" className="text-pink hover:underline">
            Voltar ao Dashboard
          </Link>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Nome</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink focus:outline-none focus:ring-2 focus:ring-pink/20"
                placeholder="Nome do produto"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Categoria</label>
              <select
                value={formData.categoryId}
                onChange={(e) => setFormData({ ...formData, categoryId: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink focus:outline-none focus:ring-2 focus:ring-pink/20"
                required
              >
                <option value="">Selecione uma categoria</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Preço</label>
              <input
                type="number"
                step="0.01"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink focus:outline-none focus:ring-2 focus:ring-pink/20"
                placeholder="29.90"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Estoque</label>
              <input
                type="number"
                value={formData.stock}
                onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink focus:outline-none focus:ring-2 focus:ring-pink/20"
                placeholder="100"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold mb-2">Descrição</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={3}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink focus:outline-none focus:ring-2 focus:ring-pink/20"
                placeholder="Descrição do produto"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold mb-2">URL da Imagem</label>
              <input
                type="url"
                value={formData.imageUrl}
                onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink focus:outline-none focus:ring-2 focus:ring-pink/20"
                placeholder="https://exemplo.com/imagem.jpg"
                required
              />
            </div>
            <div className="md:col-span-2 flex items-center gap-2">
              <input
                type="checkbox"
                id="featured"
                checked={formData.isFeatured}
                onChange={(e) => setFormData({ ...formData, isFeatured: e.target.checked })}
                className="w-4 h-4"
              />
              <label htmlFor="featured" className="text-sm font-semibold">
                Produto em Destaque
              </label>
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="bg-pink text-white px-6 py-3 rounded-full font-semibold hover:bg-black transition-all flex items-center gap-2"
              >
                <Plus size={18} />
                Adicionar Produto
              </button>
            </div>
          </form>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((prod) => (
            <div
              key={prod.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <img
                src={prod.imageUrl}
                alt={prod.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-xs text-pink font-semibold mb-1">
                  {prod.category.name}
                </p>
                <h3 className="text-lg font-bold mb-2">{prod.name}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {prod.description}
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-xl font-bold">R${prod.price.toFixed(2)}</p>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                    Estoque: {prod.stock}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
