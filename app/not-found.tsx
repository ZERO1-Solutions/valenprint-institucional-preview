'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-[150px] md:text-[200px] font-bold text-pink leading-none">
            404
          </div>
        </motion.div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Página não encontrada
          </h1>
          <p className="text-xl text-gray-600 mb-10">
            Oops! Parece que a página que você está procurando não existe ou foi movida.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link 
            href="/"
            className="px-8 py-4 bg-pink text-white rounded-full font-semibold hover:bg-black transition-all duration-300 shadow-lg hover:shadow-pink/30"
          >
            Voltar para a Home
          </Link>
          <a 
            href="https://wa.me/5511999999999" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-4 bg-black text-white rounded-full font-semibold hover:bg-pink transition-all duration-300 shadow-lg"
          >
            Contatar WhatsApp
          </a>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16"
        >
          <p className="text-gray-500 mb-4">
            Ou acesse uma das seções abaixo:
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/#products" className="text-pink hover:text-black transition-colors font-semibold">
              Produtos
            </Link>
            <Link href="/#about" className="text-pink hover:text-black transition-colors font-semibold">
              Sobre nós
            </Link>
            <Link href="/#contact" className="text-pink hover:text-black transition-colors font-semibold">
              Contato
            </Link>
            <Link href="/admin" className="text-pink hover:text-black transition-colors font-semibold">
              Área Admin
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12"
        >
          <Link href="/" className="inline-block">
            <div className="text-3xl font-bold tracking-tight text-gray-900">
              Valen<span className="text-pink">Print</span>
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
