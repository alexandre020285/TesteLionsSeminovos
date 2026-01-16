# Lions Seminovos - Site Inspirado

Aplicação front-end inspirada no site da Lions Seminovos, desenvolvida com Next.js e React.

## 🚀 Funcionalidades

- **Página Inicial**: Hero section, veículos em destaque e call-to-action
- **Catálogo**: Listagem completa de veículos com filtros por marca
- **Agende uma Visita**: Formulário de contato para agendamento
- **Layout Responsivo**: Funciona perfeitamente em mobile, tablet e desktop
- **Links Externos**: Botões que direcionam para redes sociais e WhatsApp

## 🛠️ Tecnologias

- Next.js 14
- React 18
- TypeScript
- CSS Modules

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
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página inicial
│   ├── page.module.css     # Estilos da página inicial
│   ├── globals.css         # Estilos globais e variáveis CSS
│   ├── catalogo/           # Página do catálogo
│   │   ├── page.tsx
│   │   └── page.module.css
│   └── agende-visita/      # Página de agendamento
│       ├── page.tsx
│       └── page.module.css
├── components/
│   ├── Header.tsx          # Cabeçalho com navegação
│   ├── Header.module.css
│   ├── Footer.tsx          # Rodapé
│   ├── Footer.module.css
│   ├── Hero.tsx            # Seção hero da página inicial
│   ├── Hero.module.css
│   ├── VehicleCard.tsx     # Card de veículo
│   └── VehicleCard.module.css
└── public/                 # Arquivos estáticos
```

## 🎨 Personalização

- **Cores**: Edite as variáveis CSS em `app/globals.css` para alterar as cores do tema
- **Imagens**: Adicione imagens de veículos na pasta `public/images/carros/`
- **Logo**: Substitua o emoji 🦁 por um logo real em `components/Header.tsx`

## 📱 Responsividade

O site é totalmente responsivo e se adapta a:
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)
- Large Desktop (1280px+)

## 🔗 Links Externos

- **Instagram**: Botão no header e footer
- **WhatsApp**: Botão na página "Agende uma Visita"
- **Facebook**: Link no footer

## 📝 Notas

Este é um projeto inspirado no site da Lions Seminovos. As imagens e dados são apenas para demonstração.

## 🚀 Build para Produção

```bash
npm run build
npm start
```
