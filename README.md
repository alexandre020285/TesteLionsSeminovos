# Lions Seminovos - Site

Aplicação front-end desenvolvida com Next.js e React para exibição de veículos seminovos.

## 🚀 Funcionalidades

- **Página Inicial**: 
  - Carousel automático com 4 slides e rotação a cada 4 segundos
  - Navegação manual com botões laterais
  - Indicadores de slide (dots)
  - Efeito glassmorphism no card de texto
  - Veículos em destaque
  - Call-to-action

- **Catálogo**: 
  - Listagem completa de veículos
  - Filtros por marca
  - Cards responsivos com imagens otimizadas

- **Detalhes do Veículo**: 
  - Página dinâmica para cada veículo (`/veiculo/[id]`)
  - Informações completas (ano, quilometragem, marca, preço)
  - Botões para agendar visita e WhatsApp
  - Navegação de volta

- **Agende uma Visita**: 
  - Formulário de contato para agendamento
  - Campos: nome, email, telefone, data, horário, mensagem

- **Header Fixo**: 
  - Header com posição fixa no topo
  - Gradiente transparente na parte inferior (70% escuro, 30% transparente)
  - Logo circular
  - Menu responsivo com animação
  - Ícones de redes sociais (Instagram e Facebook) com cores correspondentes

- **Botão WhatsApp Flutuante**: 
  - Botão fixo no canto inferior direito
  - Disponível em todas as páginas
  - Link direto para WhatsApp

- **Layout Responsivo**: 
  - Funciona perfeitamente em mobile, tablet e desktop
  - Menu hambúrguer para mobile
  - Imagens otimizadas com Next.js Image

## 🛠️ Tecnologias

- **Next.js 14** - Framework React com SSR e otimizações
- **React 18** - Biblioteca JavaScript para interfaces
- **TypeScript** - Tipagem estática
- **CSS Modules** - Estilos com escopo local
- **React Icons** - Biblioteca de ícones (Instagram, Facebook, WhatsApp, setas)

## 📦 Instalação

1. Instale as dependências:
```bash
npm install
```

2. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

3. Acesse [http://localhost:3000](http://localhost:3000)

## 📁 Estrutura do Projeto

```
├── app/
│   ├── layout.tsx              # Layout principal (Header, Footer, WhatsAppFloat)
│   ├── page.tsx                # Página inicial
│   ├── page.module.css         # Estilos da página inicial
│   ├── globals.css             # Estilos globais e variáveis CSS
│   ├── catalogo/               # Página do catálogo
│   │   ├── page.tsx
│   │   └── page.module.css
│   ├── agende-visita/          # Página de agendamento
│   │   ├── page.tsx
│   │   └── page.module.css
│   └── veiculo/                # Página de detalhes do veículo
│       └── [id]/
│           ├── page.tsx
│           └── page.module.css
├── components/
│   ├── Header.tsx              # Cabeçalho com navegação fixa
│   ├── Header.module.css
│   ├── Footer.tsx              # Rodapé
│   ├── Footer.module.css
│   ├── Hero.tsx                # Seção hero com carousel
│   ├── Hero.module.css
│   ├── VehicleCard.tsx         # Card de veículo
│   ├── VehicleCard.module.css
│   ├── WhatsAppFloat.tsx       # Botão flutuante do WhatsApp
│   └── WhatsAppFloat.module.css
├── data/
│   └── vehicles.ts             # Dados centralizados dos veículos
└── public/
    └── images/
        ├── banner/             # Imagens do carousel
        │   ├── banner.webp
        │   ├── hero2.jpg
        │   ├── hero 3.webp
        │   └── hero 4.webp
        ├── carros/             # Imagens dos veículos
        │   ├── Honda Civic 2020.webp
        │   ├── Toyota Corolla 2021.jpg
        │   ├── Volkswagen Jetta 2019.jpg
        │   ├── Ford Focus 2020.jpg
        │   ├── Chevrolet Onix 2021.webp
        │   └── Fiat Argo 2022.jpg
        └── logo/               # Logo e favicon
            ├── lions logo.jpg
            └── lions Favicon.png
```

## 🎨 Características de Design

- **Header Fixo**: 
  - Posição fixa no topo da página
  - Gradiente linear: escuro no topo (70%) e transparente na base (30%)
  - Logo circular com 50px de diâmetro
  - Menu mobile com animação de rotação no botão hambúrguer

- **Carousel Hero**: 
  - Transição automática a cada 4 segundos
  - Navegação infinita (loop)
  - Botões de navegação lateral
  - Indicadores de slide clicáveis
  - Card de texto com efeito glassmorphism
  - Posicionamento do card no canto inferior esquerdo

- **Cards de Veículos**: 
  - Imagens com `object-fit: contain` para evitar distorção
  - Link para página de detalhes individual
  - Layout responsivo em grid

- **Ícones de Redes Sociais**: 
  - Instagram: cor #E4405F
  - Facebook: cor #1877F2
  - Efeito hover com escala

## 🎯 Funcionalidades Técnicas

- **Otimização de Imagens**: 
  - Uso do componente `next/image` para otimização automática
  - Lazy loading (exceto primeira imagem do carousel)
  - Suporte a diferentes formatos (webp, jpg)

- **Gerenciamento de Estado**: 
  - `useState` para controle do carousel e menu mobile
  - `useEffect` para timer do carousel automático

- **Roteamento**: 
  - Rotas dinâmicas para detalhes de veículos (`/veiculo/[id]`)
  - Navegação com `next/link` e `useRouter`

- **Dados Centralizados**: 
  - Arquivo `data/vehicles.ts` com interface TypeScript
  - Exportação de array de veículos e veículos em destaque

## 🎨 Personalização

- **Cores**: Edite as variáveis CSS em `app/globals.css`:
  ```css
  --color-primary: #1a1a1a;
  --color-secondary: #d4af37;
  --color-accent: #c9a961;
  ```

- **Imagens**: 
  - Adicione imagens de veículos em `public/images/carros/`
  - Adicione banners em `public/images/banner/`
  - Atualize os dados em `data/vehicles.ts`

- **Logo**: Substitua `public/images/logo/lions logo.jpg`

- **WhatsApp**: Atualize o número em `components/WhatsAppFloat.tsx`:
  ```typescript
  href="https://wa.me/5521000000000"
  ```

- **Redes Sociais**: Atualize os links em `components/Header.tsx` e `components/Footer.tsx`

## 📱 Responsividade

O site é totalmente responsivo e se adapta a:
- **Mobile**: 320px+ (menu hambúrguer, layout vertical)
- **Tablet**: 768px+ (menu horizontal, grid 2 colunas)
- **Desktop**: 1024px+ (menu completo, grid 3 colunas)
- **Large Desktop**: 1280px+ (container máximo de 1280px)

## 🔗 Links Externos

- **Instagram**: `https://www.instagram.com/lionsseminovos`
- **Facebook**: `https://www.facebook.com/lionsseminovos`
- **WhatsApp**: Botão flutuante em todas as páginas

## 📝 Notas

- Todas as imagens são servidas localmente da pasta `public/images/`
- O projeto não utiliza configuração de `images.remotePatterns` no `next.config.js`
- O header tem altura de 5rem (80px) e o conteúdo principal tem `padding-top: 5rem` para compensar
- O hero na página inicial tem `margin-top: -5rem` para sobrepor o header

## 🚀 Build para Produção

```bash
npm run build
npm start
```

## 📄 Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm start` - Inicia servidor de produção
- `npm run lint` - Executa o linter do Next.js
