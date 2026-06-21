'use client'

import { useEffect, useState } from 'react'
import { Plus } from 'lucide-react'

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

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    imageUrl: '',
    price: '',
    stock: '',
    isFeatured: false,
    categoryId: '',
  })

  const fetchData = async () => {
    const [productsRes, categoriesRes] = await Promise.all([
      fetch('/api/products'),
      fetch('/api/categories'),
    ])
    const productsData = await productsRes.json()
    const categoriesData = await categoriesRes.json()
    setProducts(productsData)
    setCategories(categoriesData)
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await fetch('/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
    setFormData({
      name: '',
      description: '',
      imageUrl: '',
      price: '',
      stock: '',
      isFeatured: false,
      categoryId: '',
    })
    fetchData()
  }

  if (loading) return <p>Carregando...</p>

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Produtos</h2>
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
    </div>
  )
}
