'use client'

import { useState } from 'react'
import { Package, Tag, TrendingUp, Home, Plus, Edit2, Trash2, Activity } from 'lucide-react'
import Link from 'next/link'

type Product = {
  id: string
  name: string
  category: string
  purchasePrice: number
  minSalePrice: number
  currentPrice: number
  stock: number
  minStock: number
  status: 'available' | 'low' | 'critical' | 'out'
}

type Category = {
  id: string
  name: string
  slug: string
}

const initialProducts: Product[] = [
  { id: '1', name: 'Caneca Cerâmica Branca', category: 'Canecas', purchasePrice: 12.50, minSalePrice: 19.90, currentPrice: 29.90, stock: 150, minStock: 20, status: 'available' },
  { id: '2', name: 'Squeeze Alumínio 500ml', category: 'Squeezes', purchasePrice: 18.00, minSalePrice: 25.00, currentPrice: 34.90, stock: 45, minStock: 30, status: 'low' },
  { id: '3', name: 'Copo de Vidro Fosco', category: 'Copos', purchasePrice: 8.50, minSalePrice: 15.00, currentPrice: 19.90, stock: 5, minStock: 25, status: 'critical' },
  { id: '4', name: 'Garrafa Térmica Inox', category: 'Garrafas', purchasePrice: 28.00, minSalePrice: 40.00, currentPrice: 49.90, stock: 0, minStock: 10, status: 'out' },
  { id: '5', name: 'Kit Corporativo Premium', category: 'Kits', purchasePrice: 45.00, minSalePrice: 69.90, currentPrice: 99.90, stock: 30, minStock: 15, status: 'available' },
]

const initialCategories: Category[] = [
  { id: '1', name: 'Canecas', slug: 'canecas' },
  { id: '2', name: 'Squeezes', slug: 'squeezes' },
  { id: '3', name: 'Copos', slug: 'copos' },
  { id: '4', name: 'Garrafas', slug: 'garrafas' },
  { id: '5', name: 'Kits', slug: 'kits' },
]

const salesStats = {
  totalSales: 234,
  minTicket: 19.90,
  avgTicket: 54.80,
  maxTicket: 199.80,
  grossRevenue: 12823.20,
  netRevenue: 7423.50
}

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'products' | 'categories' | 'sales'>('dashboard')
  const [products, setProducts] = useState<Product[]>(initialProducts)
  const [categories, setCategories] = useState<Category[]>(initialCategories)

  const getStatusText = (status: string) => {
    switch(status) {
      case 'available': return 'Disponível'
      case 'low': return 'Baixo'
      case 'critical': return 'Crítico'
      case 'out': return 'Esgotado'
      default: return 'Desconhecido'
    }
  }

  const getStatusClass = (status: string) => {
    switch(status) {
      case 'available': return 'bg-green-100 text-green-700'
      case 'low': return 'bg-yellow-100 text-yellow-700'
      case 'critical': return 'bg-orange-100 text-orange-700'
      case 'out': return 'bg-red-100 text-red-700'
      default: return 'bg-gray-100 text-gray-700'
    }
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
        <nav className="flex flex-wrap gap-2 mb-8 bg-white p-2 rounded-2xl shadow-card-premium border border-pink-claro/20">
          {[
            { id: 'dashboard', label: 'Dashboard', icon: Activity },
            { id: 'products', label: 'Produtos', icon: Package },
            { id: 'categories', label: 'Categorias', icon: Tag },
            { id: 'sales', label: 'Vendas', icon: TrendingUp },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${activeTab === tab.id
                ? 'bg-pink-principal text-white shadow-pink-glow'
                : 'text-gray-600 hover:bg-pink-claro/20'
              }`}
            >
              <tab.icon size={20} />
              {tab.label}
            </button>
          ))}
        </nav>

        {activeTab === 'dashboard' && (
          <div>
            <h2 className="text-2xl font-bold mb-8">Resumo Geral</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-2xl shadow-card-premium border border-pink-claro/10">
                <div className="text-pink-principal font-semibold mb-2">Total de Vendas</div>
                <div className="text-3xl font-bold">{salesStats.totalSales}</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-card-premium border border-pink-claro/10">
                <div className="text-pink-principal font-semibold mb-2">Faturamento Bruto</div>
                <div className="text-3xl font-bold">R${salesStats.grossRevenue.toFixed(2)}</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-card-premium border border-pink-claro/10">
                <div className="text-pink-principal font-semibold mb-2">Faturamento Líquido</div>
                <div className="text-3xl font-bold">R${salesStats.netRevenue.toFixed(2)}</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-card-premium border border-pink-claro/10">
                <div className="text-pink-principal font-semibold mb-2">Ticket Médio</div>
                <div className="text-3xl font-bold">R${salesStats.avgTicket.toFixed(2)}</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-2xl shadow-card-premium border border-pink-claro/10">
                <div className="text-gray-500 mb-1">Ticket Mínimo</div>
                <div className="text-2xl font-bold">R${salesStats.minTicket.toFixed(2)}</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-card-premium border border-pink-claro/10">
                <div className="text-gray-500 mb-1">Ticket Máximo</div>
                <div className="text-2xl font-bold">R${salesStats.maxTicket.toFixed(2)}</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-card-premium border border-pink-claro/10">
                <div className="text-gray-500 mb-1">Margem Média</div>
                <div className="text-2xl font-bold">{((salesStats.netRevenue / salesStats.grossRevenue) * 100).toFixed(0)}%</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-card-premium border border-pink-claro/10 overflow-hidden">
              <div className="p-6 border-b border-pink-claro/10">
                <h3 className="text-xl font-bold">Estoque Crítico</h3>
              </div>
              <div className="p-6">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-gray-600 border-b border-pink-claro/10">
                      <th className="pb-4 font-semibold">Produto</th>
                      <th className="pb-4 font-semibold">Estoque Atual</th>
                      <th className="pb-4 font-semibold">Estoque Mínimo</th>
                      <th className="pb-4 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-pink-claro/10">
                    {products.filter(p => p.status !== 'available').map(product => (
                      <tr key={product.id}>
                        <td className="py-4 font-medium">{product.name}</td>
                        <td className="py-4">{product.stock}</td>
                        <td className="py-4">{product.minStock}</td>
                        <td className="py-4">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getStatusClass(product.status)}`}>
                            {getStatusText(product.status)}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'products' && (
          <div>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Produtos</h2>
              <button className="bg-pink-principal text-white px-6 py-3 rounded-full font-semibold hover:bg-black-premium transition-all shadow-pink-glow flex items-center gap-2">
                <Plus size={20} />
                Novo Produto
              </button>
            </div>
            
            <div className="bg-white rounded-2xl shadow-card-premium border border-pink-claro/10 overflow-hidden">
              <table className="w-full">
                <thead className="bg-pink-claro/5">
                  <tr className="text-left text-gray-600">
                    <th className="px-6 py-4 font-semibold">Produto</th>
                    <th className="px-6 py-4 font-semibold">Preço de Compra</th>
                    <th className="px-6 py-4 font-semibold">Preço Mínimo Venda</th>
                    <th className="px-6 py-4 font-semibold">Preço Atual</th>
                    <th className="px-6 py-4 font-semibold">Estoque</th>
                    <th className="px-6 py-4 font-semibold">Estoque Mínimo</th>
                    <th className="px-6 py-4 font-semibold">Status</th>
                    <th className="px-6 py-4 font-semibold">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-pink-claro/10">
                  {products.map(product => (
                    <tr key={product.id} className="hover:bg-pink-claro/5 transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-medium">{product.name}</div>
                        <div className="text-sm text-gray-500">{product.category}</div>
                      </td>
                      <td className="px-6 py-4">R${product.purchasePrice.toFixed(2)}</td>
                      <td className="px-6 py-4">R${product.minSalePrice.toFixed(2)}</td>
                      <td className="px-6 py-4 text-pink-principal font-bold">R${product.currentPrice.toFixed(2)}</td>
                      <td className="px-6 py-4 font-medium">{product.stock}</td>
                      <td className="px-6 py-4">{product.minStock}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getStatusClass(product.status)}`}>
                          {getStatusText(product.status)}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors">
                            <Edit2 size={18} />
                          </button>
                          <button className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'categories' && (
          <div>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Categorias</h2>
              <button className="bg-pink-principal text-white px-6 py-3 rounded-full font-semibold hover:bg-black-premium transition-all shadow-pink-glow flex items-center gap-2">
                <Plus size={20} />
                Nova Categoria
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map(category => (
                <div key={category.id} className="bg-white p-6 rounded-2xl shadow-card-premium border border-pink-claro/10">
                  <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                  <div className="flex gap-2">
                    <button className="flex-1 py-2 border-2 border-pink-principal rounded-xl text-pink-principal font-semibold hover:bg-pink-principal hover:text-white transition-all flex items-center justify-center gap-2">
                      <Edit2 size={16} />
                      Editar
                    </button>
                    <button className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'sales' && (
          <div>
            <h2 className="text-2xl font-bold mb-8">Histórico de Vendas</h2>
            
            <div className="bg-white rounded-2xl shadow-card-premium border border-pink-claro/10">
              <div className="p-6 border-b border-pink-claro/10">
                <h3 className="text-xl font-bold mb-4">Resumo do Mês</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div>
                    <div className="text-gray-500 mb-1">Vendas</div>
                    <div className="text-2xl font-bold">{salesStats.totalSales}</div>
                  </div>
                  <div>
                    <div className="text-gray-500 mb-1">Faturamento Bruto</div>
                    <div className="text-2xl font-bold">R${salesStats.grossRevenue.toFixed(2)}</div>
                  </div>
                  <div>
                    <div className="text-gray-500 mb-1">Faturamento Líquido</div>
                    <div className="text-2xl font-bold">R${salesStats.netRevenue.toFixed(2)}</div>
                  </div>
                  <div>
                    <div className="text-gray-500 mb-1">Ticket Médio</div>
                    <div className="text-2xl font-bold">R${salesStats.avgTicket.toFixed(2)}</div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-500 text-center py-8">Histórico detalhado de vendas aparecerá aqui</p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
