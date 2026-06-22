# Design System - ValenPrint

Este documento descreve o design system implementado no site da ValenPrint.

---

## 1. Cores Principais

O sistema de cores é minimalista e voltado para destacar a identidade visual da marca:

| Cor       | Hex       | Uso Principal                                  |
|-----------|-----------|------------------------------------------------|
| Branco    | `#FFFFFF` | Fundo principal do site                       |
| Preto     | `#111111` | Texto principal, elementos de destaque        |
| Rosa      | `#FF4F9A` | Cor de acento (CTAs, links, marcas de destaque) |
| Cinza 50  | `#f9fafb` | Fundos secundários                             |
| Cinza 100 | `#f3f4f6` | Bordas, fundos de inputs                       |
| Cinza 600 | `#4b5563` | Texto secundário                               |
| Cinza 800 | `#1f2937` | Rodapé, fundos escuros                         |

### Cores de Status (Painel Admin)
| Cor       | Status       |
|-----------|--------------|
| Verde     | Disponível   |
| Amarelo   | Baixo        |
| Laranja   | Crítico      |
| Vermelho  | Esgotado     |

---

## 2. Tipografia

### Família de Fonte
- **Principal**: `Poppins`
- **Fallbacks**: `Inter`, `Montserrat`, `sans-serif`

### Hierarquia de Títulos
| Tamanho               | Uso                                  |
|-----------------------|--------------------------------------|
| `text-5xl md:text-6xl` | Títulos principais (Hero section)   |
| `text-4xl md:text-5xl` | Títulos de seções                   |
| `text-2xl`             | Títulos do painel admin             |
| `text-xl`              | Subtítulos e cards                  |

### Pesos de Fonte
- `font-semibold`: Botões, labels, texto destacado
- `font-bold`: Títulos e valores importantes

---

## 3. Componentes Principais

### 3.1 Botões
Três variantes principais:

#### Primário
```css
bg-pink text-white hover:bg-black shadow-lg
```

#### Secundário
```css
bg-black text-white hover:bg-pink shadow-lg
```

#### Outline
```css
border-2 border-white text-white hover:bg-white hover:text-black
```

#### Estilo Base Comum
```css
px-8 py-4 rounded-full font-semibold transition-all duration-300
```

### 3.2 Navegação
- **Navbar fixa**: Fundo `bg-white/95 backdrop-blur-md`
- **Links**: `text-gray-600 hover:text-pink transition-colors`
- **Menu mobile**: Animação com `framer-motion`

### 3.3 Cards de Produto
- **Contêiner**: `bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300`
- **Imagem**: `group-hover:scale-110 transition-transform duration-500`
- **Categoria**: `text-xs text-pink font-semibold`

### 3.4 Painel Admin
- **Abas**: `bg-pink text-white` (ativa) / `text-gray-600 hover:bg-gray-100` (inativa)
- **Cards de dados**: `bg-white p-6 rounded-xl shadow-sm border border-gray-100`
- **Tabelas**: Cabeçalhos com `bg-gray-50`, linhas com `hover:bg-gray-50`
- **Inputs**: `border border-gray-200 focus:border-pink focus:ring-2 focus:ring-pink/20`

---

## 4. Layout e Espaçamento

### Grid Responsivo
Usado em seções como Hero, Produtos e Sobre.

### Padding Padrão
- Site principal: `px-6`
- Painel admin: `px-4 sm:px-6 lg:px-8`

### Bordas Arredondadas
| Tamanho       | Uso                                  |
|---------------|--------------------------------------|
| `rounded-full`| Botões, badges, WhatsApp button      |
| `rounded-2xl` | Seções, cards de produto             |
| `rounded-xl`  | Cards admin, tabelas                 |

### Sombras
- Uso moderado: `shadow-lg`, `shadow-xl`, `shadow-2xl` para criar profundidade.

---

## 5. Animações e Interatividade

- **Framer Motion**: Animações de entrada de elementos (Hero, cards, menu mobile)
- **Transições**: `transition-all duration-300` para elementos interativos
- **Efeitos Hover**:
  - Escala em botões: `hover:scale-110`
  - Zoom em imagens de produtos
  - Mudança de cor em links e botões

---

## 6. Tecnologias Base

| Tecnologia          | Versão       | Uso                                  |
|---------------------|--------------|--------------------------------------|
| Next.js             | 14.1.0       | Framework React                      |
| Tailwind CSS        | 3.3.0        | Utility-first CSS                    |
| Framer Motion       | 11.0.0       | Animações                            |
| Lucide React        | 0.300.0      | Ícones (painel admin)                |
