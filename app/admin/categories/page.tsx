'use client'

import { useEffect, useState } from 'react'
import { Plus, Trash2 } from 'lucide-react'

type Category = {
  id: string
  name: string
  slug: string
}

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([])
  const [name, setName] = useState('')
  const [slug, setSlug] = useState('')
  const [loading, setLoading] = useState(true)

  const fetchCategories = async () => {
    const res = await fetch('/api/categories')
    const data = await res.json()
    setCategories(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await fetch('/api/categories', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, slug }),
    })
    setName('')
    setSlug('')
    fetchCategories()
  }

  if (loading) return <p>Carregando...</p>

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Categorias</h2>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
        <form onSubmit={handleSubmit} className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm font-semibold mb-2">Nome</label>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value)
                setSlug(e.target.value.toLowerCase().replace(/\s+/g, '-'))
              }}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink focus:outline-none focus:ring-2 focus:ring-pink/20"
              placeholder="Nome da categoria"
              required
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-semibold mb-2">Slug</label>
            <input
              type="text"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink focus:outline-none focus:ring-2 focus:ring-pink/20"
              placeholder="slug-da-categoria"
              required
            />
          </div>
          <div className="flex items-end">
            <button
              type="submit"
              className="bg-pink text-white px-6 py-3 rounded-full font-semibold hover:bg-black transition-all flex items-center gap-2"
            >
              <Plus size={18} />
              Adicionar
            </button>
          </div>
        </form>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">{cat.name}</p>
              <p className="text-gray-500 text-sm">{cat.slug}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
