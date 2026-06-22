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

const initialCategories: Category[] = [
  { id: '1', name: 'Canecas', slug: 'canecas' },
  { id: '2', name: 'Squeezes', slug: 'squeezes' },
  { id: '3', name: 'Copos', slug: 'copos' },
  { id: '4', name: 'Garrafas Térmicas', slug: 'garrafas-termicas' },
  { id: '5', name: 'Kits Corporativos', slug: 'kits-corporativos' },
]

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>(initialCategories)
  const [name, setName] = useState('')
  const [slug, setSlug] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newCategory: Category = {
      id: Date.now().toString(),
      name,
      slug,
    }
    setCategories([...categories, newCategory])
    setName('')
    setSlug('')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b border-pink-claro/30 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-pink-principal transition-colors">
                <Home size={20} />
                Voltar ao site
              </Link>
              <Link href="/">
                <img
                  src="/ValenPrintHosizontalImg.png"
                  alt="ValenPrint"
                  className="h-10 md:h-12 w-auto object-contain"
                />
              </Link>
            </div>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Categorias</h2>
          <Link href="/admin" className="text-pink-principal hover:text-pink-medio font-semibold transition-colors">
            Voltar ao Dashboard
          </Link>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-card-premium border border-pink-claro/10 mb-6">
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-semibold mb-2">Nome</label>
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value)
                  setSlug(e.target.value.toLowerCase().replace(/\s+/g, '-'))
                }}
                className="w-full px-4 py-3 rounded-xl border border-pink-claro/30 focus:border-pink-principal focus:outline-none focus:ring-2 focus:ring-pink-principal/20 transition-all"
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
                className="w-full px-4 py-3 rounded-xl border border-pink-claro/30 focus:border-pink-principal focus:outline-none focus:ring-2 focus:ring-pink-principal/20 transition-all"
                placeholder="slug-da-categoria"
                required
              />
            </div>
            <div className="flex items-end">
              <button
                type="submit"
                className="bg-pink-principal text-white px-6 py-3 rounded-full font-semibold hover:bg-black-premium transition-all shadow-pink-glow flex items-center gap-2"
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
              className="bg-white p-4 rounded-2xl shadow-card-premium border border-pink-claro/10 flex justify-between items-center"
            >
              <div>
                <p className="font-semibold">{cat.name}</p>
                <p className="text-gray-500 text-sm">{cat.slug}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
