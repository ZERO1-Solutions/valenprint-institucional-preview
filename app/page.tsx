'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const products = [
  {
    id: '1',
    name: 'Caneca Cerâmica Branca',
    description: 'Caneca de cerâmica premium com sua logo ou arte personalizada',
    imageUrl: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800&q=80',
    price: 29.9,
    stock: 150,
    category: 'Canecas'
  },
  {
    id: '2',
    name: 'Squeeze Alumínio 500ml',
    description: 'Squeeze ecológico e resistente, ideal para esportes e eventos',
    imageUrl: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&q=80',
    price: 34.9,
    stock: 80,
    category: 'Squeezes'
  },
  {
    id: '3',
    name: 'Copo de Vidro Fosco',
    description: 'Copo de vidro fosco elegante para eventos especiais',
    imageUrl: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800&q=80',
    price: 19.9,
    stock: 200,
    category: 'Copos'
  },
  {
    id: '4',
    name: 'Garrafa Térmica Inox',
    description: 'Garrafa térmica de alta qualidade, mantém a temperatura por horas',
    imageUrl: 'https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=800&q=80',
    price: 49.9,
    stock: 45,
    category: 'Garrafas Térmicas'
  },
  {
    id: '5',
    name: 'Kit Corporativo Premium',
    description: 'Kit completo com caneca, caderno e caneta personalizados',
    imageUrl: 'https://images.unsplash.com/photo-1588580023730-18ce55594880?w=800&q=80',
    price: 99.9,
    stock: 30,
    category: 'Kits Corporativos'
  },
  {
    id: '6',
    name: 'Brindes para Eventos',
    description: 'Pacote de brindes personalizados para feiras e eventos',
    imageUrl: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80',
    price: 149.9,
    stock: 25,
    category: 'Brindes'
  }
]

const Button = ({ children, variant = 'primary', className = '', ...props }: any) => {
  const baseStyle = 'px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-2'
  const variants = {
    primary: 'bg-pink text-white hover:bg-black shadow-lg hover:shadow-pink/30',
    secondary: 'bg-black text-white hover:bg-pink shadow-lg',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-black'
  }
  return (
    <button className={`${baseStyle} ${variants[variant as keyof typeof variants]} ${className}`} {...props}>
      {children}
    </button>
  )
}

const WhatsAppButton = () => (
  <a 
    href="https://wa.me/5511999999999" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 hover:scale-110"
  >
    WhatsApp
  </a>
)

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <WhatsAppButton />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold tracking-tight">
              Valen<span className="text-pink">Print</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-gray-600 hover:text-pink transition-colors">Home</a>
              <a href="#products" className="text-gray-600 hover:text-pink transition-colors">Produtos</a>
              <a href="#about" className="text-gray-600 hover:text-pink transition-colors">Sobre</a>
              <a href="#contact" className="text-gray-600 hover:text-pink transition-colors">Contato</a>
              <Link href="/admin" className="text-pink hover:underline font-semibold">
                Admin
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                Personalização que <span className="text-pink">fortalece</span> sua marca.
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Canecas, squeezes, copos e acessórios personalizados para varejo, atacado e empresas.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary">
                  Ver Produtos
                </Button>
                <Button variant="secondary">
                  Falar no WhatsApp
                </Button>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.8, delay: 0.2 }} 
              className="relative"
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1512909006721-3d6018887383?w=800&q=80" 
                  alt="Produtos ValenPrint" 
                  className="object-cover w-full h-full" 
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Transformamos produtos em <span className="text-pink">experiências</span>.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A ValenPrint oferece soluções completas em personalização para empresas, eventos, revendedores e consumidores que buscam qualidade, exclusividade e acabamento profissional.
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { text: 'Produção de alta qualidade' },
              { text: 'Atendimento personalizado' },
              { text: 'Entregas para todo o Brasil' },
              { text: 'Pequenas e grandes quantidades' },
              { text: 'Produtos premium' },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.1 }} 
                className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-xl transition-shadow"
              >
                <p className="font-semibold">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Produtos em <span className="text-pink">Destaque</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <motion.div 
                key={product.id} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.1 }} 
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" 
                  />
                  {product.stock <= 10 && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Últimas unidades!
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <p className="text-xs text-pink font-semibold mb-2">{product.category}</p>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-pink transition-colors">{product.name}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-2xl font-bold">R${product.price.toFixed(2)}</p>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                      Estoque: {product.stock}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="py-24 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para <span className="text-pink">personalizar</span> seus produtos?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Solicite um orçamento sem compromisso e receba atendimento especializado.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
              <Button variant="outline">
                WhatsApp
              </Button>
            </a>
            <Button variant="primary">
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="text-2xl font-bold mb-6">
                Valen<span className="text-pink">Print</span>
              </div>
              <p className="text-gray-400">Personalização que fortalece sua marca.</p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Links rápidos</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-pink transition-colors">Home</a></li>
                <li><a href="#products" className="hover:text-pink transition-colors">Produtos</a></li>
                <li><a href="#about" className="hover:text-pink transition-colors">Sobre</a></li>
                <li><a href="#contact" className="hover:text-pink transition-colors">Contato</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Contato</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-3">
                  <a href="https://wa.me/5511999999999" className="hover:text-pink">(11) 99999-9999</a>
                </li>
                <li>contato@valenprint.com.br</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Redes sociais</h4>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink transition-colors">
                  Instagram
                </a>
                <a href="#" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink transition-colors">
                  Facebook
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800 text-center text-gray-500">
            <p>© 2026 ValenPrint. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
